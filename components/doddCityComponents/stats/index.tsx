import styles from "./styles.module.css";

const stats = [
  {
    value: "$1.6B",
    label: "Bois d'Arc Lake",
    subtitle: "Built beside Dodd City",
  },
  {
    value: "16,641",
    label: "Acres of Lake Surface",
    subtitle: "Brand-new, built in 2021",
  },
  {
    value: "$40B",
    label: "Texas Instruments Campus",
    subtitle: "Sherman, 30 minutes away",
  },
  {
    value: "123,557",
    label: "New DFW Residents",
    subtitle: "Added in a single Census year",
  },
];

const DoddCityStats = () => {
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
};

export default DoddCityStats;
