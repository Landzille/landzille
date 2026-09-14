"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import styles from "./resource-gate.module.css";
import { trackResourceEvent } from "./analytics";
import type { PendingDownload } from "./ResourceAccessProvider";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const UnlockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="11" width="16" height="9" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M8 11V7a4 4 0 0 1 7.6-1.8"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface Props {
  pending: PendingDownload;
  onClose: () => void;
  onUnlocked: () => void;
}

export default function ResourceGateModal({
  pending,
  onClose,
  onUnlocked,
}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [formLoadedAt] = useState<string>(() => Date.now().toString());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    trackResourceEvent("resource_gate_viewed", {
      resource_id: pending.resourceId,
      resource_type: pending.resourceType,
    });
  }, [pending.resourceId, pending.resourceType]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/resource-access/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          resourceId: pending.resourceId,
          resourceType: pending.resourceType,
          companyWebsite,
          formLoadedAt,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      trackResourceEvent("resource_gate_completed", {
        resource_id: pending.resourceId,
        resource_type: pending.resourceType,
      });
      onUnlocked();
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resource-gate-heading"
    >
      <div
        className={styles.modalCard}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.modalClose}
          onClick={onClose}
          aria-label="Close"
        >
          <CloseIcon />
        </button>

        <div className={styles.gateIconWrap}>
          <UnlockIcon />
        </div>
        <h2 id="resource-gate-heading" className={styles.gateTitle}>
          Unlock &ldquo;{pending.title}&rdquo;
        </h2>
        <p className={styles.gateSub}>
          Enter your details once to {pending.kind === "view" ? "view" : "download"}{" "}
          this resource.
        </p>

        <form onSubmit={handleSubmit} className={styles.gateForm} noValidate>
          <div
            style={{
              position: "absolute",
              left: "-9999px",
              width: "1px",
              height: "1px",
              overflow: "hidden",
            }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="companyWebsite"
              value={companyWebsite}
              onChange={(e) => setCompanyWebsite(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {error && (
            <p className={styles.gateError} role="alert">
              {error}
            </p>
          )}

          <div className={styles.gateFields}>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.gateInput}
              autoComplete="name"
              disabled={loading}
              autoFocus
              required
            />
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              className={styles.gateInput}
              autoComplete="email"
              disabled={loading}
              required
            />
          </div>

          <button type="submit" className={styles.gateSubmit} disabled={loading}>
            {loading
              ? "Unlocking…"
              : `Unlock & ${pending.kind === "view" ? "view" : "download"}`}
            {!loading && <ArrowIcon />}
          </button>
        </form>
      </div>
    </div>
  );
}
