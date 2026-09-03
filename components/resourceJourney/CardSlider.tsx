"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import Arrow from "@/svg/arrow";
import type { Resource } from "@/utils/resources";
import { slugify } from "@/utils/readableResources";

const ChevronLeft = () => (
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

const ChevronRight = () => (
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

interface CardSliderProps {
  resources: Resource[];
}

const CardSlider: React.FC<CardSliderProps> = ({ resources }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(`[data-slide="true"]`);
    const gap = 32;
    const step = (card?.offsetWidth ?? 320) + gap;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <div className={styles.sliderWrapper}>
      {resources.length > 1 && (
        <div className={styles.sliderControls}>
          <button
            type="button"
            className={styles.sliderArrow}
            onClick={() => scrollByAmount(-1)}
            aria-label="Scroll left"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className={styles.sliderArrow}
            onClick={() => scrollByAmount(1)}
            aria-label="Scroll right"
          >
            <ChevronRight />
          </button>
        </div>
      )}

      <div className={styles.track} ref={trackRef}>
        {resources.map((resource) => (
          <div key={resource.title} className={styles.card} data-slide="true">
            <Link
              href={`/resources/${slugify(resource.title)}`}
              className={styles.previewLink}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 80vw, 400px"
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{resource.title}</h3>
                {resource.subtitle && (
                  <p className={styles.cardSubtitle}>{resource.subtitle}</p>
                )}
              </div>
            </Link>
            <Link
              href={`/resources/${slugify(resource.title)}`}
              className={styles.downloadLink}
            >
              View Resource
              <Arrow />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
