"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styles from "./styles.module.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

type Props = {
  pdfUrl: string;
  resourceId: string;
  resourceTitle: string;
  variant?: "card" | "full";
};

const ChevronLeftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
    <path
      d="M12.5 15L7.5 10L12.5 5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
    <path
      d="M7.5 5L12.5 10L7.5 15"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ZoomOutIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M18 18l-4.35-4.35M6.5 9h5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const ZoomInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M18 18l-4.35-4.35M9 6.5v5M6.5 9h5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const sendEvent = (
  name: string,
  params: Record<string, unknown>,
  beacon = false
) => {
  window.gtag?.(
    "event",
    name,
    beacon ? { ...params, transport_type: "beacon" } : params
  );
};

const SWIPE_THRESHOLD = 50;
const ZOOM_MIN = 0.5;
const ZOOM_MAX = 3;
const ZOOM_STEP = 0.25;

const clampZoom = (z: number) => Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, z));

const touchDistance = (a: React.Touch, b: React.Touch) =>
  Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);

const PdfViewer = ({
  pdfUrl,
  resourceId,
  resourceTitle,
  variant = "card",
}: Props) => {
  const isFull = variant === "full";

  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageInput, setPageInput] = useState("1");
  const [containerWidth, setContainerWidth] = useState<number>();
  const [containerHeight, setContainerHeight] = useState<number>();
  const [pageAspectRatio, setPageAspectRatio] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [loadError, setLoadError] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const sessionStartRef = useRef(0);
  const pageEnteredAtRef = useRef(0);
  const maxPageRef = useRef(1);
  const flushedRef = useRef(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const multiTouchRef = useRef(false);
  const pinchStartDistRef = useRef<number | null>(null);
  const pinchStartZoomRef = useRef(1);
  const zoomRef = useRef(1);

  useEffect(() => {
    zoomRef.current = zoom;
  }, [zoom]);

  useEffect(() => {
    sessionStartRef.current = Date.now();
    pageEnteredAtRef.current = Date.now();
  }, []);

  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;
      setContainerWidth(containerRef.current.clientWidth);
      setContainerHeight(containerRef.current.clientHeight);
    };
    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    window.addEventListener("resize", updateSize);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  useEffect(() => {
    containerRef.current?.scrollTo(0, 0);
  }, [pageNumber]);

  const handlePageLoadSuccess = (page: { width: number; height: number }) => {
    setPageAspectRatio((current) => current ?? page.width / page.height);
  };

  const fitWidth = (() => {
    if (!containerWidth || !containerHeight) return undefined;
    const ratio = pageAspectRatio ?? containerWidth / containerHeight;
    const containerRatio = containerWidth / containerHeight;
    const base =
      ratio > containerRatio ? containerWidth : containerHeight * ratio;
    return base * zoom;
  })();

  const handleLoadSuccess = ({ numPages: total }: { numPages: number }) => {
    setNumPages(total);
    setLoadError(false);
    sendEvent("pdf_preview_open", {
      resource_id: resourceId,
      resource_title: resourceTitle,
      total_pages: total,
      context: variant,
    });
    sendEvent("pdf_page_view", {
      resource_id: resourceId,
      resource_title: resourceTitle,
      page_number: 1,
      total_pages: total,
      context: variant,
    });
  };

  const goToPage = useCallback(
    (next: number) => {
      if (!numPages || next < 1 || next > numPages || next === pageNumber)
        return;

      const dwellSeconds = Math.round(
        (Date.now() - pageEnteredAtRef.current) / 1000
      );
      sendEvent("pdf_page_time", {
        resource_id: resourceId,
        page_number: pageNumber,
        seconds: dwellSeconds,
        context: variant,
      });

      setPageNumber(next);
      setPageInput(String(next));
      pageEnteredAtRef.current = Date.now();
      maxPageRef.current = Math.max(maxPageRef.current, next);

      sendEvent("pdf_page_view", {
        resource_id: resourceId,
        resource_title: resourceTitle,
        page_number: next,
        total_pages: numPages,
        context: variant,
      });
    },
    [numPages, pageNumber, resourceId, resourceTitle, variant]
  );

  const flushSummary = useCallback(() => {
    if (flushedRef.current || !numPages) return;
    flushedRef.current = true;
    const sessionSeconds = Math.round(
      (Date.now() - sessionStartRef.current) / 1000
    );
    sendEvent(
      "pdf_reading_summary",
      {
        resource_id: resourceId,
        resource_title: resourceTitle,
        max_page_reached: maxPageRef.current,
        total_pages: numPages,
        percent_read: Math.round((maxPageRef.current / numPages) * 100),
        session_seconds: sessionSeconds,
        context: variant,
      },
      true
    );
  }, [numPages, resourceId, resourceTitle, variant]);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "hidden") flushSummary();
    };
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("pagehide", flushSummary);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("pagehide", flushSummary);
      flushSummary();
    };
  }, [flushSummary]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) return;

      if (e.key === "ArrowRight") goToPage(pageNumber + 1);
      if (e.key === "ArrowLeft") goToPage(pageNumber - 1);
      if (e.key === "+" || e.key === "=")
        setZoom((z) => clampZoom(z + ZOOM_STEP));
      if (e.key === "-") setZoom((z) => clampZoom(z - ZOOM_STEP));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPage, pageNumber]);

  const zoomIn = () => {
    sendEvent("pdf_zoom", {
      resource_id: resourceId,
      context: variant,
      direction: "in",
    });
    setZoom((z) => clampZoom(z + ZOOM_STEP));
  };
  const zoomOut = () => {
    sendEvent("pdf_zoom", {
      resource_id: resourceId,
      context: variant,
      direction: "out",
    });
    setZoom((z) => clampZoom(z - ZOOM_STEP));
  };
  const resetZoom = () => setZoom(1);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length >= 2) {
      multiTouchRef.current = true;
      pinchStartDistRef.current = touchDistance(e.touches[0], e.touches[1]);
      pinchStartZoomRef.current = zoomRef.current;
      touchStartXRef.current = null;
      touchStartYRef.current = null;
      return;
    }

    multiTouchRef.current = false;
    if (zoomRef.current === 1) {
      touchStartXRef.current = e.touches[0].clientX;
      touchStartYRef.current = e.touches[0].clientY;
    } else {
      touchStartXRef.current = null;
      touchStartYRef.current = null;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length >= 2 && pinchStartDistRef.current) {
      const currentDist = touchDistance(e.touches[0], e.touches[1]);
      const ratio = currentDist / pinchStartDistRef.current;
      const next = clampZoom(pinchStartZoomRef.current * ratio);
      setZoom(Math.abs(next - 1) < 0.04 ? 1 : next);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.touches.length > 0) return;

    pinchStartDistRef.current = null;
    const wasMultiTouch = multiTouchRef.current;
    multiTouchRef.current = false;

    const startX = touchStartXRef.current;
    const startY = touchStartYRef.current;
    touchStartXRef.current = null;
    touchStartYRef.current = null;

    if (
      wasMultiTouch ||
      startX === null ||
      startY === null ||
      zoomRef.current !== 1
    ) {
      return;
    }

    const deltaX = e.changedTouches[0].clientX - startX;
    const deltaY = e.changedTouches[0].clientY - startY;
    const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY) * 1.5;
    if (!isHorizontalSwipe) return;

    if (deltaX > SWIPE_THRESHOLD) goToPage(pageNumber - 1);
    else if (deltaX < -SWIPE_THRESHOLD) goToPage(pageNumber + 1);
  };

  const submitPageInput = () => {
    const parsed = parseInt(pageInput, 10);
    if (!isNaN(parsed)) goToPage(parsed);
    else setPageInput(String(pageNumber));
  };

  return (
    <div className={`${styles.wrap} ${isFull ? styles.wrapFull : ""}`}>
      {numPages && (
        <div
          className={`${styles.toolbar} ${isFull ? styles.toolbarFull : ""}`}
        >
          <div className={styles.toolbarGroup}>
            <button
              type="button"
              onClick={() => goToPage(pageNumber - 1)}
              disabled={pageNumber <= 1}
              aria-label="Previous page"
              className={`${styles.toolbarBtn} ${
                isFull ? styles.toolbarBtnFull : ""
              }`}
            >
              <ChevronLeftIcon />
            </button>

            <form
              className={styles.pageIndicator}
              onSubmit={(e) => {
                e.preventDefault();
                submitPageInput();
              }}
            >
              <input
                type="text"
                inputMode="numeric"
                value={pageInput}
                onChange={(e) =>
                  setPageInput(e.target.value.replace(/[^0-9]/g, ""))
                }
                onBlur={submitPageInput}
                className={`${styles.pageInput} ${
                  isFull ? styles.pageInputFull : ""
                }`}
                aria-label="Page number"
              />
              <span>of {numPages}</span>
            </form>

            <button
              type="button"
              onClick={() => goToPage(pageNumber + 1)}
              disabled={pageNumber >= numPages}
              aria-label="Next page"
              className={`${styles.toolbarBtn} ${
                isFull ? styles.toolbarBtnFull : ""
              }`}
            >
              <ChevronRightIcon />
            </button>
          </div>

          <div className={styles.toolbarDivider} />

          <div className={styles.toolbarGroup}>
            <button
              type="button"
              onClick={zoomOut}
              disabled={zoom <= ZOOM_MIN}
              aria-label="Zoom out"
              className={`${styles.toolbarBtn} ${
                isFull ? styles.toolbarBtnFull : ""
              }`}
            >
              <ZoomOutIcon />
            </button>
            <button
              type="button"
              onClick={resetZoom}
              className={styles.zoomLabel}
              aria-label="Reset zoom"
            >
              {Math.round(zoom * 100)}%
            </button>
            <button
              type="button"
              onClick={zoomIn}
              disabled={zoom >= ZOOM_MAX}
              aria-label="Zoom in"
              className={`${styles.toolbarBtn} ${
                isFull ? styles.toolbarBtnFull : ""
              }`}
            >
              <ZoomInIcon />
            </button>
          </div>
        </div>
      )}

      <div
        className={`${styles.viewer} ${isFull ? styles.full : ""}`}
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: zoom === 1 ? "pan-y" : "auto" }}
      >
        <Document
          file={pdfUrl}
          onLoadSuccess={handleLoadSuccess}
          onLoadError={() => setLoadError(true)}
          loading={<div className={styles.status}>Loading preview…</div>}
          error={null}
        >
          {fitWidth && (
            <Page
              pageNumber={pageNumber}
              width={fitWidth}
              onLoadSuccess={handlePageLoadSuccess}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              loading={<div className={styles.status}>Loading page…</div>}
            />
          )}
        </Document>

        {loadError && (
          <div className={styles.status}>
            Couldn&apos;t load the preview.{" "}
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
              Open the PDF directly
            </a>{" "}
            instead.
          </div>
        )}
      </div>
    </div>
  );
};

export default PdfViewer;
