"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

const photos = [
  {
    src: "/assets/dodd-city-gallery/gallery-6.jpeg",
    caption: "A spring-fed pond ringed by native hardwoods",
    area: "a",
  },
  {
    src: "/assets/dodd-city-gallery/gallery-7.jpeg",
    caption: "The herd gathers in the open pasture",
    area: "b",
  },
  {
    src: "/assets/dodd-city-gallery/gallery-3.jpeg",
    caption: "Aerial view of the grazing herd and tree line",
    area: "c",
  },
  {
    src: "/assets/dodd-city-gallery/gallery-5.jpeg",
    caption: "Cattle grazing beneath a wide Texas sky",
    area: "d",
  },
  {
    src: "/assets/dodd-city-gallery/gallery-1.jpeg",
    caption: "Road frontage, with mature oaks along the property line",
    area: "e",
  },
  {
    src: "/assets/dodd-city-gallery/gallery-2.jpeg",
    caption: "A walk along the quiet county road bordering the land",
    area: "f",
  },
  {
    src: "/assets/dodd-city-gallery/gallery-4.jpeg",
    caption: "The property's rolling pasture, seen from above",
    area: "g",
  },
];

const ExpandIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path
      d="M7 3H3v4M13 3h4v4M7 17H3v-4M13 17h4v-4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronIcon = ({ direction }: { direction: "left" | "right" }) => (
  <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
    <path
      d={direction === "left" ? "M12 4l-6 6 6 6" : "M8 4l6 6-6 6"}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DoddCityGallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    []
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    []
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, showPrev, showNext]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>THE LAND</p>
        <h2 className={styles.heading}>See it for yourself</h2>
        <p className={styles.lead}>
          Ground-level and aerial views of the property &mdash; open pasture,
          grazing cattle, a spring-fed pond and quiet county-road frontage.
        </p>

        <div className={styles.grid}>
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              className={styles.tile}
              style={{ gridArea: photo.area }}
              onClick={() => setActiveIndex(index)}
              aria-label={`Open photo: ${photo.caption}`}
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.image}
              />
              <span className={styles.tileOverlay} />
              <span className={styles.tileCaption}>{photo.caption}</span>
              <span className={styles.expandBadge}>
                <ExpandIcon />
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            className={styles.lightboxClose}
            onClick={close}
            aria-label="Close"
          >
            <CloseIcon />
          </button>

          <button
            type="button"
            className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous photo"
          >
            <ChevronIcon direction="left" />
          </button>

          <div
            className={styles.lightboxImageWrap}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[activeIndex].src}
              alt={photos[activeIndex].caption}
              width={1600}
              height={900}
              className={styles.lightboxImage}
              priority
            />
            <p className={styles.lightboxCaption}>
              {photos[activeIndex].caption}
              <span className={styles.lightboxCount}>
                {activeIndex + 1} / {photos.length}
              </span>
            </p>
          </div>

          <button
            type="button"
            className={`${styles.lightboxNav} ${styles.lightboxNext}`}
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      )}
    </section>
  );
};

export default DoddCityGallery;
