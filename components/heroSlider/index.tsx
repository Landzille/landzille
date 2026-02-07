"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { slides } from "@/utils/data";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.slidesContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={styles.overlay}></div>
          </div>
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.heading}>{slides[currentSlide].heading}</h1>

          <div className={styles.actions}>
            <Link href="#land-listings" className={styles.primaryButton}>
              Browse Land Listings
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.locationDisplay}>
        <span className={styles.currentLocation}>
          {slides[currentSlide].location}
        </span>
        <div className={styles.currentLocationLine}></div>
      </div>

      <div className={styles.navigation}>
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`${styles.navButton} ${
              index === currentSlide ? styles.activeNav : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to ${slide.location}`}
          >
            <span className={styles.navLine}></span>
          </button>
        ))}
      </div>
    </section>
  );
}
