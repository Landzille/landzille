"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import type { ReadableResource } from "@/utils/readableResources";
import styles from "./styles.module.css";
import ArrowWhite from "@/svg/arrow-white";

const PdfViewer = dynamic(() => import("@/components/pdfViewer"), {
  ssr: false,
  loading: () => <div className={styles.loading}>Loading…</div>,
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

const trackDownload = (resource: ReadableResource) => {
  window.gtag?.("event", "resource_download", {
    resource_id: resource.slug,
    resource_title: resource.title,
  });
};

interface Props {
  resource: ReadableResource;
}

const ResourceReader: React.FC<Props> = ({ resource }) => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Link
            href={`/resources/${resource.slug}`}
            className={styles.backLink}
          >
            <BackIcon /> Back to preview
          </Link>
          <span className={styles.title}>{resource.title}</span>
        </div>
        <a
          href={resource.pdfUrl}
          download
          onClick={() => trackDownload(resource)}
          className={styles.downloadLink}
        >
          Download Now
          <ArrowWhite />
        </a>
      </header>

      <div className={styles.viewerWrap}>
        <div className={styles.viewerCard}>
          <PdfViewer
            pdfUrl={resource.pdfUrl}
            resourceId={resource.slug}
            resourceTitle={resource.title}
            variant="full"
          />
        </div>
      </div>
    </div>
  );
};

export default ResourceReader;
