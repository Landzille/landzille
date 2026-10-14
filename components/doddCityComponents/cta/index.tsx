import Link from "next/link";
import TrackedContactLink from "@/components/trackedContactLink";
import styles from "./styles.module.css";

const steps = [
  {
    number: "1",
    title: "Show your interest",
    description: "Email, call or text us.",
  },
  {
    number: "2",
    title: "Get pre-qualified",
    description: "Fill out the short pre-qualification form.",
  },
  {
    number: "3",
    title: "Walk the land and reserve",
    description: "Tour your tract with the Landzille team, then secure it.",
  },
];

const DoddCityCta = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          The shoreline is being claimed.
          <br />
          <span className={styles.highlight}>Claim yours first.</span>
        </h2>

        <div className={styles.steps}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>

        <Link href="/consultation" className={styles.cta}>
          Reserve Your Position
        </Link>

        <div className={styles.contact}>
          <TrackedContactLink
            href="tel:+12146498495"
            eventName="phone_click"
            value="+12146498495"
            location="dodd_city_page"
            className={styles.contactLink}
          >
            +1 (214) 649 - 8495
          </TrackedContactLink>
          <span className={styles.divider}>&middot;</span>
          <TrackedContactLink
            href="mailto:info@landzille.com"
            eventName="email_click"
            value="info@landzille.com"
            location="dodd_city_page"
            className={styles.contactLink}
          >
            info@landzille.com
          </TrackedContactLink>
        </div>
      </div>
    </section>
  );
};

export default DoddCityCta;
