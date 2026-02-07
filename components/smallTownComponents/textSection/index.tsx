import React from "react";
import styles from "./styles.module.css";

const SmallTownText = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.textBox}>
          <h5>Amenities & Lifestyle</h5>
          <p>
            <ul className={styles.list}>
              <li>
                Local & Recreational Assets: Wolfe City is located at the
                crossroads of Highways 34 & 11, about 17 miles north of
                Greenville.
              </li>
              <li>
                Nearby amenities like Webb Hill Country Club (18-hole course,
                pool, pro-shop) provide upscale recreation.
              </li>
              <li>
                Outdoor attractions: Bonham State Park (65-acre lake, trails,
                campsites) is accessible; Ladonia Fossil Park adds unique appeal
                for families and weekend visitors.
              </li>
              <li>
                Education: Wolfe City ISD (Pre-K through 12) maintains smaller
                schools and local identity.
              </li>
            </ul>
          </p>
        </div>
        <div className={styles.textBox}>
          <h5>Projected ROI & Risks</h5>
          <p>
            <ul className={styles.list}>
              <li>
                ROI Projections: Builders or investors acquiring small lots
                (0.1-0.4 acres) in good neighbourhoods could expect short-term
                gains of 20-50%+ if flipping, depending on purchase price,
                infrastructure costs, and market timing. Over 3-5 years,
                appreciation in existing homes might average 5-10% annually,
                especially with steady demand.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmallTownText;
