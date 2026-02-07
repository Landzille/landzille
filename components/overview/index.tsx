"use client";
import React from "react";
import styles from "./styles.module.css";

export const OverviewSection: React.FC = () => {
  return (
    <section className={styles.overview}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Overview</h2>
        <p className={styles.description}>
          The Skillweed x Landzille Summer Internship is a one-month immersive
          program designed to equip future leaders with real-world knowledge in
          land investment, real estate, and financial literacy. It&apos;s not
          just an internship, it&apos;s a launchpad into leadership, college
          applications, and economic empowerment.
        </p>

        <div className={styles.weeksGrid}>
          <div className={styles.weekCard}>
            <h3 className={styles.weekTitle}>
              Week 1: Orientation & Foundations
            </h3>
            <ul className={styles.weekList}>
              <li>SMART Goals</li>
              <li>Intro to Problem Solving</li>
              <li>Land Investment 101</li>
            </ul>
          </div>

          <div className={styles.weekCard}>
            <h3 className={styles.weekTitle}>Week 2–3: Deep Dives</h3>
            <ul className={styles.weekList}>
              <li>Ideation Frameworks (Design Thinking)</li>
              <li>Using AI/Tech Tools</li>
              <li>Pitching Problems (Leadership Styles)</li>
              <li>Taking Initiative</li>
              <li>Communication Skills</li>
            </ul>
          </div>

          <div className={styles.weekCard}>
            <h3 className={styles.weekTitle}>Week 4: Pitch & Presentation</h3>
            <ul className={styles.weekList}>
              <li>Group investment proposal presentation</li>
              <li>
                Certificate of participation + Transcripts + Letter of
                recommendation
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.experienceGrid}>
          <div className={styles.experienceCard}>
            <h3 className={styles.experienceTitle}>Field Experience</h3>
            <p className={styles.experienceText}>
              Gainesville Land Tour Students explored a Landzille property in
              Cooke County, gaining hands-on exposure to: Land valuation,
              terrain assessment, and zoning Local attractions & value drivers
            </p>
          </div>

          <div className={styles.experienceCard}>
            <h3 className={styles.experienceTitle}>Bonus Stop</h3>
            <p className={styles.experienceText}>
              Gainesville Zoo visit for community immersion
              <br />
              All transportation, meals & safety logistics were covered
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
