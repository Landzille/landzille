import styles from "./styles.module.css";

const SproutIcon = () => (
  <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
    <path
      d="M10 18V9M10 9c0-3-2-5-5-5 0 3 2 5 5 5zm0 0c0-3 2-5 5-5 0 3-2 5-5 5z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HomeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
    <path
      d="M3 10l7-6 7 6M5 9v8h10V9"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChipIcon = () => (
  <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
    <rect x="5" y="5" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M8 2v3M12 2v3M8 15v3M12 15v3M2 8h3M2 12h3M15 8h3M15 12h3"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const BoatIcon = () => (
  <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
    <path
      d="M3 13h14l-2 4H5l-2-4zM6 13V5h5l2 8M10 2v3"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LegacyIcon = () => (
  <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
    <circle cx="7" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="14" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M3 17c0-2.8 1.8-5 4-5s4 2.2 4 5M10 17c0-2.8 1.8-5 4-5s4 2.2 4 5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const opportunities = [
  {
    icon: <SproutIcon />,
    title: "Buy early, hold smart",
    description:
      "Get in ahead of the housing wave while land near the lake is still priced well below the shoreline. Ag-exempt options may apply.",
  },
  {
    icon: <HomeIcon />,
    title: "Build your lake life",
    description:
      "A weekend retreat or forever home, with the Metroplex within reach.",
  },
  {
    icon: <ChipIcon />,
    title: "House the chip boom",
    description:
      "Up to 3,000 direct fab jobs are 30 minutes away, in a region already short on homes.",
  },
  {
    icon: <BoatIcon />,
    title: "Tap the weekend economy",
    description:
      "Boaters, anglers and lake-lifestyle stays, with hotel tax from visitors projected at about $183K a year.",
  },
  {
    icon: <LegacyIcon />,
    title: "Pass down an acre",
    description:
      "Land near water and opportunity is something your family can keep for generations.",
  },
];

const DoddCityOpportunities = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>INVESTMENT OPPORTUNITIES</p>
        <h2 className={styles.heading}>Five ways to make this land work for you</h2>

        <div className={styles.grid}>
          {opportunities.map((item) => (
            <div key={item.title} className={styles.card}>
              <span className={styles.icon}>{item.icon}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoddCityOpportunities;
