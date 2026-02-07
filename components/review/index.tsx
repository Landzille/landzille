import { reviews } from "@/utils/data";
import styles from "./styles.module.css";
import Image from "next/image";

export default function Reviews() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Trusted by Investors</h2>
        <p className={styles.description}>
          Join a community of forward-thinking investors who are building wealth
          through verified land opportunities.
        </p>

        <div className={styles.grid}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.card}>
              <div className={styles.header}>
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={40}
                  height={40}
                  className={styles.avatar}
                />
                <div className={styles.info}>
                  <h3 className={styles.name}>{review.name}</h3>
                  <p className={styles.title}>{review.title}</p>
                </div>
              </div>
              <blockquote className={styles.quote}>{review.quote}</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
