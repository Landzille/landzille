import Link from "next/link";
import styles from "./styles.module.css";

export default function NotFoundSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.code}>404</p>
        <h1 className={styles.heading}>This Plot Doesn&apos;t Exist</h1>
        <p className={styles.description}>
          The page you&apos;re looking for may have been moved, renamed, or
          never staked out. Let&apos;s get you back on solid ground.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.primaryButton}>
            Back to Home
          </Link>
          <Link href="/#land-listings" className={styles.secondaryButton}>
            Browse Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
