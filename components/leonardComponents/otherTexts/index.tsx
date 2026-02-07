import React from "react";
import styles from "./styles.module.css";

const LeonardTexts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.textBox}>
          <h3>WHY LEONARD?</h3>
          <br />
          <h5>Fast-Rising Land Value</h5>
          <p>
            The property market is showing signs of rapid acceleration, marked
            by a +25.3% Year-Over-Year growth in median sale price. This
            appreciation is driven by increasing commuter demand due to
            Leonard&apos;s strategic proximity to major employment and growth
            centers, including the Sherman Tech Hub (30 miles away) and the DFW
            expansion pushing north from areas like Melissa (20-22 miles away).
          </p>
          <br />
          <h5>Emerging Economic Strength</h5>
          <p>
            Leonard benefits from strong linkage to the Sherman-Denison
            industrial corridor, easy access to Collin County job markets and a
            growing influx of residents seeking lower entry-point land and
            housing options. Its positioning within North Texas’s rising
            development belt makes it a natural beneficiary of future commercial
            and residential growth.
          </p>
          <br />
          <h5>Strategic Infrastructure Proximity</h5>
          <p>
            It sits within reach of rapidly evolving infrastructure nodes
            through expansion zones around McKinney, Anna, Melissa, with major
            road networks connecting to Sherman, Bonham, and Greenville and
            northern DFW commuter routes supporting population spillover. The
            town is increasingly becoming a quiet commuter haven with rising
            desirability.
          </p>
        </div>
        <div className={styles.textBox}>
          <h5>AMENITIES & PUBLIC SERVICES</h5>
          <p>
            <ul>
              <li>
                Education: Served by Leonard Independent School District,
                offering quality public education and a strong community school
                system.
              </li>
              <li>
                Healthcare: Residents enjoy convenient access to nearby regional
                medical centers in Bonham, McKinney, and Sherman, ensuring
                round-the-clock care within reasonable driving distance.
              </li>
              <li>
                Recreation & Community Life: Offers classic North Texas
                small-town living: parks, green open spaces, athletic fields,
                community gatherings, and easy proximity to lakes and outdoor
                attractions across Fannin County and surrounding areas.
              </li>
              <li>
                Utilities & Public Works: Ongoing improvements across Fannin
                County including road enhancements, utility expansion, and new
                housing activity that support long-term growth potential.
              </li>
              <li>
                Local Financial Services: Regional banks and lenders across
                Leonard, Bonham, and McKinney support land purchases,
                agricultural loans, and small business financing, helping
                mobilize capital for investors and residents.
              </li>
            </ul>
          </p>
        </div>
        <div className={styles.textBox}>
          <h5>Investment Opportunities</h5>
          <p>
            With two economic engines driving future expansion, Leonard offers
            high-potential investment avenues:
            <br />
            <br />
            <ul>
              <li>
                Residential development for the rising commuter population
              </li>
              <li>
                Commercial and service-based projects benefiting from the
                Sherman tech boom
              </li>
              <li>
                Buy-and-hold land strategies positioned for long-term
                appreciation
              </li>
              <li>
                Small-acre hobby farms and rural estates, increasingly in demand
                by Collin County out-movers
              </li>
            </ul>
            Leonard is not just another town. It is a convergence point for the
            next chapter of North Texas growth. Join the movement. Invest in
            Leonard today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeonardTexts;
