import styles from "./styles.module.css";

const reasons = [
  {
    number: "01",
    title: "The lake is open. The shoreline is selling.",
    description:
      "In 2018 it was a creek valley. Now it's 16,641 acres of water, Texas's first major new lake in about 30 years. The build added about $500M to the county, and about 350 lake lots sold by the first summer. The shoreline is going fast, and the land around it is next.",
  },
  {
    number: "02",
    title: "$40 billion in chips is 30 minutes away. The homes aren't built yet.",
    description:
      "Texas Instruments is investing up to $40B in Sherman, with up to 3,000 direct jobs, and Bonham's leaders say the area is already short on housing. Thousands of workers will soon be house-hunting, and Dodd City is in range.",
  },
  {
    number: "03",
    title: "Same town, two prices.",
    description:
      "Inland acreage lists near $27K an acre and private shoreline near $53K. Gated lake lots start at $94K. DFW added 123,557 people in one year. Gaps like this close once the crowd arrives, and early buyers get the old price.",
  },
];

const DoddCityWhyDoddCity = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>WHY DODD CITY?</p>

        <div className={styles.reasons}>
          {reasons.map((reason) => (
            <div key={reason.number} className={styles.reason}>
              <span className={styles.number}>{reason.number}</span>
              <div className={styles.reasonContent}>
                <h3 className={styles.title}>{reason.title}</h3>
                <p className={styles.description}>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoddCityWhyDoddCity;
