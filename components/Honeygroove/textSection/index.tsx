import React from "react";
import styles from "./styles.module.css";

const HoneygrooveTexts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.textBox}>
          <h5>Population & Growth Trends</h5>
          <p>
            <ul className={styles.list}>
              <p>
                <b>Population Surge:</b>
              </p>
              <li>
                Honey Grove population (2024): ~1,950 (up 18% since 2020,
                according to the U.S. Census Bureau).
              </li>
              <li> Fannin County population: ~36,000 (U.S. Census, 2024).</li>
              <li>
                Expected to increase another 12% by 2030 (NCTCOG projection).
              </li>
              <br />
              <p>
                <b>Growth Drivers:</b>
              </p>
              <li>Massive housing demand from Dallas-Fort Worth spillover.</li>
              <li>
                Recreational surge at Bois d’Arc Lake: Over 450,000 annual
                visitors projected (NTMWD, 2024).
              </li>
              <li>
                Major employers are expanding nearby in Bonham, Sherman, and
                Paris.
              </li>
            </ul>
          </p>
        </div>
        <div className={styles.textBox}>
          <h5>Amenities & Public Services</h5>
          <p>
            <ul className={styles.list}>
              <p>
                <b>Recreation & Lifestyle:</b>
              </p>
              <li>
                Bois d’Arc Lake: 16,641-acre reservoir for boating, fishing, and
                outdoor recreation.
              </li>
              <li>
                New parks and campgrounds; growing vacation rental market.
              </li>
              <li>
                Charming historic downtown Honey Grove, cafes, and community
                events.
              </li>
              <br />
              <p>
                <b>Education & Healthcare:</b>
              </p>
              <li>
                Highly-rated Honey Grove ISD schools and nearby Paris Junior
                College.
              </li>
              <li>
                Modern medical facilities in Bonham, Paris, and Sherman (all 35
                minutes away).
              </li>
            </ul>
          </p>
        </div>
        <div className={styles.textBox}>
          <h5>Economic Development & Infrastructure</h5>
          <p>
            <ul className={styles.list}>
              <li>
                Infrastructure Boom: $380+ million invested in roads and
                utilities in Fannin County since 2022 (TxDOT). High-speed
                internet rollouts and new housing subdivisions are underway.
              </li>
              <li>
                Housing Demand: Fannin County median home price: up 16% in 2024
                ($228,000 to $265,000, MLS data). Residential lot prices have
                surged by 22% since 2023 as buyers flock to the lakeside market.
              </li>
            </ul>
          </p>
        </div>
        <div className={styles.textBox}>
          <h5>Projected ROI</h5>
          <p>
            <ul className={styles.list}>
              <li>
                Land appreciation in Fannin County: Averaged 10–15% annual
                increase the past three years (Texas A&M Real Estate Center,
                2024). With the Bois d’Arc Lake effect, early investors have
                seen 18%+ yearly appreciation.
              </li>
              <li>
                Rental Potential: Airbnbs and short-term rentals near Bois d’Arc
                Lake report 80%+ summer occupancy (AirDNA, 2024). New vacation
                rentals are entering the market each month.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HoneygrooveTexts;
