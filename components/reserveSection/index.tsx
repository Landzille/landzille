import Link from "next/link";
import styles from "./styles.module.css";

const ReserveSection: React.FC = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.heading}>
                        Reserve Your Child’s Place Today
                    </h1>
                    <p className={styles.description}>
                        It only takes two minutes to register your child’s interest. There’s no commitment until you’ve reviewed all the details. With limited seats filling on a rolling basis, don’t wait until summer is closer than you think.
                    </p>
                </div>
                <div className={styles.ctaWrapper}>
                    <Link href="#waitlist" className={styles.secondaryButton}>
                        Register Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ReserveSection;
