"use client";
import React from "react";
import styles from "./styles.module.css";

export const OverviewSection: React.FC = () => {
  return (
    <section className={styles.overview}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Overview</h2>
        <p className={styles.description}>
          The Skillweed x Landzille Summer Internship is a one-month immersive program designed to equip future leaders with real-world knowledge in land investment, financial literacy, soft skills, and data privacy.
          <br /><br />
          It's not just an internship, it's a launchpad into leadership, college applications, and economic empowerment.
        </p>

        <div className={styles.weeksGrid}>
          <div className={styles.weekCard}>
            <h3 className={styles.weekTitle}>
              Week 1: Identity & Awareness
            </h3>
            <ul className={styles.weekList}>
              <li>SMART Goals & Personal Vision</li>
              <li>Digital Footprint & Personal Branding</li>
              <li>Land Investment 101 — the original hard asset</li>
              <li>Intro to Cybersecurity — what defense looks like day-to-day</li>
              <li>Communication 101 — speaking with confidence</li>
            </ul>
          </div>

          <div className={styles.weekCard}>
            <h3 className={styles.weekTitle}>Week 2: Strategy & Defense</h3>
            <ul className={styles.weekList}>
              <li>Ideation & Design Thinking frameworks</li>
              <li>Sales & the art of persuasion</li>
              <li>Social engineering — how hackers use psychology, not just code</li>
              <li>Phishing, scams & digital self-defense</li>
              <li>Negotiation role-play — land deal with a cyber-risk twist</li>
              <li>AI & tech tools in the real world</li>
              <li>Leadership styles & taking initiative</li>
            </ul>
          </div>

          <div className={styles.weekCard}>
            <h3 className={styles.weekTitle}>Week 3: Money & Security</h3>
            <ul className={styles.weekList}>
              <li>Personal finance for teens — assets vs. liabilities</li>
              <li>
                Sneakers vs. land — relatable wealth-building examples
              </li>
              <li>Passwords & property deeds — why security ties them together</li>
              <li>Data privacy & personal brand security</li>
              <li>AI in the real world — joint Geotela class</li>
              <li>The "Zille-Weed" challenge — find a rising investment area near you.</li>
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
          <div className={styles.weekCard}>
            <h3 className={styles.weekTitle}>Field Experience</h3>
            <p className={styles.otherTexts}> Leonard Land Tour Students will explore a Landzille property in Fannin County, gaining hands-on exposure to: Land valuation, terrain assessment, and zoning Local attractions & value drivers</p>
          </div>
        </div>
        {/* 
        <div className={styles.experienceGrid}>
          <div className={styles.experienceCard}>
            <h3 className={styles.experienceTitle}>Field Experience</h3>
            <p className={styles.experienceText}>
              Leonard Land Tour Students will explore a Landzille property in Fannin County, gaining hands-on exposure to: Land valuation, terrain assessment, and zoning Local attractions & value drivers
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
        </div> */}
      </div>
    </section>
  );
};
