import styles from "./styles.module.css";

const PinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M10 18s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const proximityPoints = [
  {
    minutes: "5",
    place: "Bonham",
    description: "Groceries, Walmart, pharmacies, restaurants, Starbucks",
  },
  {
    minutes: "8",
    place: "Bois d'Arc Lake",
    description: "Public boat ramp",
  },
  {
    minutes: "4",
    place: "Legacy Ridge Country Club",
    description: "From tracts near Bonham",
  },
  {
    minutes: "30",
    place: "Sherman",
    description: "Texas Instruments & GlobalWafers",
  },
  {
    minutes: "45",
    place: "McKinney",
    description: "Collin County's growth corridor",
  },
];

const DoddCityWhyInvest = () => {
  return (
    <section id="why-invest" className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>WHY INVEST?</p>
        <h2 className={styles.heading}>Minutes from everything that matters</h2>

        <div className={styles.grid}>
          {proximityPoints.map((point) => (
            <div key={point.place} className={styles.card}>
              <div className={styles.minutesRow}>
                <span className={styles.minutesBadge}>{point.minutes} min</span>
                <span className={styles.pinIcon}>
                  <PinIcon />
                </span>
              </div>
              <h3 className={styles.place}>{point.place}</h3>
              <p className={styles.description}>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoddCityWhyInvest;
