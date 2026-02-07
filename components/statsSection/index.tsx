import { stats } from "@/utils/data";
import styles from "./styles.module.css";

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.value}>{stat.value}</div>
              <div className={styles.label}>{stat.label}</div>
              <div className={styles.subtitle}>{stat.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
