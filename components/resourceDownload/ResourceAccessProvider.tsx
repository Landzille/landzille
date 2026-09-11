"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import ResourceGateModal from "./ResourceGateModal";
import { trackResourceEvent } from "./analytics";

export type ResourceType = "resource" | "magazine" | "team-research";
export type ResourceActionKind = "download" | "view";

export interface PendingDownload {
  resourceId: string;
  resourceType: ResourceType;
  fileUrl: string;
  title: string;
  kind: ResourceActionKind;
}

interface ResourceAccessContextValue {
  unlocked: boolean;
  requestDownload: (
    item: PendingDownload,
    triggerEl?: HTMLElement | null
  ) => void;
}

const ResourceAccessContext = createContext<ResourceAccessContextValue | null>(
  null
);

function startDownload(fileUrl: string) {
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export function useResourceAccess() {
  const ctx = useContext(ResourceAccessContext);
  if (!ctx) {
    throw new Error(
      "useResourceAccess must be used within ResourceAccessProvider"
    );
  }
  return ctx;
}

export default function ResourceAccessProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [pending, setPending] = useState<PendingDownload | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const router = useRouter();

  const performAction = useCallback(
    (item: PendingDownload) => {
      if (item.kind === "view") {
        router.push(item.fileUrl);
      } else {
        startDownload(item.fileUrl);
      }
    },
    [router]
  );

  useEffect(() => {
    let cancelled = false;
    fetch("/api/resource-access/status")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled && data?.unlocked) setUnlocked(true);
      })
      .catch(() => {
        // Assume locked — the gate will simply show on the next download.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const requestDownload = useCallback(
    (item: PendingDownload, triggerEl?: HTMLElement | null) => {
      trackResourceEvent("resource_download_clicked", {
        resource_id: item.resourceId,
        resource_type: item.resourceType,
        action: item.kind,
        gate_was_required: !unlocked,
      });

      if (unlocked) {
        trackResourceEvent("resource_download_started", {
          resource_id: item.resourceId,
          resource_type: item.resourceType,
          action: item.kind,
          gate_was_required: false,
        });
        performAction(item);
        return;
      }

      triggerRef.current = triggerEl ?? null;
      setPending(item);
    },
    [unlocked, performAction]
  );

  const handleUnlocked = useCallback(() => {
    setUnlocked(true);
    if (pending) {
      trackResourceEvent("resource_download_started", {
        resource_id: pending.resourceId,
        resource_type: pending.resourceType,
        action: pending.kind,
        gate_was_required: true,
      });
      performAction(pending);
    }
    setPending(null);
  }, [pending, performAction]);

  const handleClose = useCallback(() => {
    setPending(null);
    triggerRef.current?.focus();
  }, []);

  return (
    <ResourceAccessContext.Provider value={{ unlocked, requestDownload }}>
      {children}
      {pending && (
        <ResourceGateModal
          pending={pending}
          onClose={handleClose}
          onUnlocked={handleUnlocked}
        />
      )}
    </ResourceAccessContext.Provider>
  );
}
