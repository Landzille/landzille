import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export const SummerHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Hero Content */}
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Annual Summer
              <br />
              Internship Program
            </h1>

            <p className={styles.subtitle}>
              EMPOWERING TOMORROW&apos;S INVESTORS, TODAY.
            </p>

            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span className={styles.label}>
                  In Partnership with Skillweed
                </span>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.label}>Duration: 4 Weeks</span>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.label}>
                  Audience: High School Students (Ages 14–18)
                </span>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.label}>Location: Virtual</span>
              </div>
            </div>
          </div>

          {/* Video Card */}
          <div className={styles.videoCard}>
            <Image
              src="/assets/summer-program.png"
              loading="lazy"
              width={800}
              height={800}
              alt="Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
