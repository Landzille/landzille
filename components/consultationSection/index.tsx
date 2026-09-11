"use client";
import { useEffect } from "react";
import Script from "next/script";
import TrackedContactLink from "@/components/trackedContactLink";
import styles from "./styles.module.css";

const CALENDLY_URL =
  "https://calendly.com/landzille/discovery-call?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=2f6a50";

const discussionPoints = [
  "Available opportunities",
  "Location preferences",
  "Investment goals",
  "Questions about the process",
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path
      d="M4 10.5l3.5 3.5L16 5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ConsultationSection: React.FC = () => {
  useEffect(() => {
    window.gtag?.("event", "consultation_page_visit", {});
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <p className={styles.label}>BOOK A CONSULTATION</p>
        <h1 className={styles.heading}>Let&apos;s Talk About Your Land Goals.</h1>
        <p className={styles.body}>
          Speak with the Landzille team about available North Texas
          opportunities and what may fit your objectives.
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div className={styles.reassurance}>
            <h3 className={styles.reassuranceTitle}>What we&apos;ll discuss</h3>
            <ul className={styles.reassuranceList}>
              {discussionPoints.map((point) => (
                <li key={point}>
                  <span className={styles.checkIcon}>
                    <CheckIcon />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.directContact}>
            <h3 className={styles.directContactTitle}>
              Prefer to reach us directly?
            </h3>
            <TrackedContactLink
              href="tel:+12146498495"
              eventName="phone_click"
              value="+12146498495"
              location="consultation_page"
              className={styles.directContactLink}
            >
              +1 (214) 649 - 8495
            </TrackedContactLink>
            <TrackedContactLink
              href="mailto:info@landzille.com"
              eventName="email_click"
              value="info@landzille.com"
              location="consultation_page"
              className={styles.directContactLink}
            >
              info@landzille.com
            </TrackedContactLink>
          </div>
        </div>

        <div className={styles.calendlyCard}>
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </section>
  );
};

export default ConsultationSection;
