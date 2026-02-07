import Link from "next/link";
import styles from "./styles.module.css";
import { featuresColumn1, featuresColumn2 } from "@/utils/data";

export default function WhyInvest() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>OUR PROMISE</p>
          <h2 className={styles.heading}>Why Invest with Landzille?</h2>
          <p className={styles.description}>
            We don&apos;t just sell land; we provide the clarity and confidence
            you need to make the best decision for your future.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Start Your Investment Journey
          </Link>
        </div>

        <div className={styles.featuresWrapper}>
          <div className={styles.columnOne}>
            {featuresColumn1.map((feature, index) => (
              <div key={index} className={styles.card}>
                <span className={styles.icon}>{feature.icon}</span>
                <h3 className={styles.title}>{feature.title}</h3>
                <p className={styles.cardDescription}>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.columnTwo}>
            {featuresColumn2.map((feature, index) => (
              <div key={index} className={styles.card}>
                <span className={styles.icon}>{feature.icon}</span>
                <h3 className={styles.title}>{feature.title}</h3>
                <p className={styles.cardDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
