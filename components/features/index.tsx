import { features } from "@/utils/data";
import styles from "./styles.module.css";

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{feature.icon}</span>
                <h3 className={styles.title}>{feature.title}</h3>
              </div>
              <p className={styles.description}>
                {feature.description}{" "}
                {feature.highlight && (
                  <strong className={styles.highlight}>
                    {feature.highlight}
                  </strong>
                )}
                {index === 2 && (
                  <span className={styles.secondary}>
                    {" "}
                    for real estate investment by Urban Land Institute/PwC.
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
