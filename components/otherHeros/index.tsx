import Link from "next/link";
import styles from "./styles.module.css";

const OtherHeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.tagline}>INVEST WHERE GROWTH IS GUARANTEED</p>
          <h1 className={styles.heading}>
            The Clock is Ticking on Prime Acreage.
          </h1>
          <p className={styles.description}>
            Demand for North Texas land is unprecedented. Review our portfolio
            of strategic investment opportunities near major infrastructure
            projects and seize your premium asset before the next wave of
            development.
          </p>
        </div>

        <div className={styles.ctaWrapper}>
          <Link href="/#land-listings" className={styles.primaryButton}>
            Explore North Texas Opportunities
          </Link>
          <Link href="/contact" className={styles.secondaryButton}>
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OtherHeroSection;
