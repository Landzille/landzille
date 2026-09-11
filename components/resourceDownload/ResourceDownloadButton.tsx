"use client";

import { useRef, type ReactNode } from "react";
import Link from "next/link";
import {
  useResourceAccess,
  type ResourceActionKind,
  type ResourceType,
} from "./ResourceAccessProvider";

interface Props {
  resourceId: string;
  resourceType: ResourceType;
  title: string;
  fileUrl: string;
  kind?: ResourceActionKind;
  className?: string;
  children: ReactNode;
}

export default function ResourceDownloadButton({
  resourceId,
  resourceType,
  title,
  fileUrl,
  kind = "download",
  className,
  children,
}: Props) {
  const { unlocked, requestDownload } = useResourceAccess();
  const buttonRef = useRef<HTMLButtonElement>(null);

  if (unlocked) {
    return kind === "view" ? (
      <Link href={fileUrl} className={className}>
        {children}
      </Link>
    ) : (
      <a href={fileUrl} download className={className}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      ref={buttonRef}
      className={className}
      onClick={() =>
        requestDownload(
          { resourceId, resourceType, title, fileUrl, kind },
          buttonRef.current
        )
      }
    >
      {children}
    </button>
  );
}
