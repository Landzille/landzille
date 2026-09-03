"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import HeaderNew from "@/components/headerNew";
import Arrow from "@/svg/arrow";
import type { ReadableResource } from "@/utils/readableResources";
import styles from "./styles.module.css";

const PdfViewer = dynamic(() => import("@/components/pdfViewer"), {
  ssr: false,
  loading: () => (
    <div className={styles.previewFallback}>Loading preview…</div>
  ),
});

const BackIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path
      d="M12.5 15L7.5 10L12.5 5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShareIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path
      d="M14 6.5a2 2 0 100-4 2 2 0 000 4zM6 12.5a2 2 0 100-4 2 2 0 000 4zM14 18.5a2 2 0 100-4 2 2 0 000 4zM7.75 11.25l4.5-3.5M7.75 8.75l4.5 3.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path
      d="M4 10.5l4 4 8-8.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface Props {
  resource: ReadableResource;
  others: ReadableResource[];
}

const trackDownload = (resource: ReadableResource) => {
  window.gtag?.("event", "resource_download", {
    resource_id: resource.slug,
    resource_title: resource.title,
  });
};

const ResourcePreview: React.FC<Props> = ({ resource, others }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    if (typeof navigator.share === "function") {
      try {
        await navigator.share({
          title: resource.title,
          text: resource.subtitle,
          url,
        });
      } catch {
        // user cancelled the share sheet
      }
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.page}>
      <HeaderNew />

      <div className={styles.hero}>
        <Link href="/resources" className={styles.backLink}>
          <BackIcon /> All resources
        </Link>

        <h1 className={styles.title}>{resource.title}</h1>
        {resource.subtitle && (
          <p className={styles.subtitle}>{resource.subtitle}</p>
        )}

        <div className={styles.previewRow}>
          <div className={styles.previewCard}>
            <div className={styles.previewHeader}>
              <span className={styles.previewLabel}>Reading preview</span>
              <Link
                href={`/resources/${resource.slug}/read`}
                target="_blank"
                className={styles.previewOpen}
              >
                Open full reader
              </Link>
            </div>
            <PdfViewer
              pdfUrl={resource.pdfUrl}
              resourceId={resource.slug}
              resourceTitle={resource.title}
            />
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              onClick={handleShare}
              className={`${styles.actionBtn} ${styles.shareBtn}`}
            >
              {copied ? <CheckIcon /> : <ShareIcon />}
              {copied ? "Copied" : "Share"}
            </button>
            <a
              href={resource.pdfUrl}
              download
              onClick={() => trackDownload(resource)}
              className={`${styles.actionBtn} ${styles.saveBtn}`}
            >
              Download Now
              <Arrow />
            </a>
          </div>
        </div>
      </div>

      {others.length > 0 && (
        <div className={styles.more}>
          <h2 className={styles.moreHeading}>More resources</h2>
          <div className={styles.moreGrid}>
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/resources/${other.slug}`}
                className={styles.moreCard}
              >
                <div className={styles.moreImageWrap}>
                  <Image
                    src={other.image}
                    alt={other.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <span className={styles.moreTitle}>{other.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcePreview;
