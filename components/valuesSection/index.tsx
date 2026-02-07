import { values } from "@/utils/data";
import styles from "./styles.module.css";

const ValuesSection: React.FC = () => {
  return (
    <section className={styles.valuesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.leftColumn}>
            <h2 className={styles.title}>Our Values in Action</h2>
            <p className={styles.description}>
              At Landzille, our values are more than guiding words; they are the
              heartbeat of everything we do. They shape how we research, how we
              serve, and how we help families and investors turn land into
              legacy.
            </p>
          </div>
          <div className={styles.rightColumn}>
            <p className={styles.supportText}>
              Supporting these pillars are two principles that define our unique
              approach. We are Customer-Centric, always putting the needs and
              goals of our clients first. For us, success is measured not by the
              number of acres sold, but by the satisfaction and growth of the
              families and investors we serve. We also embrace Innovation,
              leveraging technology, data, and creative strategies to uncover
              opportunities that others might overlook. This allows us to offer
              superior service and keep our investors ahead of the curve.
            </p>
            <p className={styles.commitment}>
              These commitments reflect our promise: to{" "}
              <span className={styles.highlight}>
                educate, empower, and deliver
              </span>{" "}
              land investments that stand the test of time.
            </p>
          </div>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((value) => (
            <div key={value.id} className={styles.valueCard}>
              <div className={styles.iconWrapper}>{value.icon}</div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
