import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const WhyInvest = () => {
  return (
    <div className={styles.container}>
      <div className={styles.colOne}>
        <h2>Why Invest in Gainesville and Cooke County?</h2>
        <span>Strategic Location & Accessibility</span>
        <p>
          Gainesville is located just 71 miles north of Dallas along Interstate
          35 (I-35) and U.S. Highway 82, offering easy access to the Dallas-Fort
          Worth metroplex. This proximity combines small-town charm with
          metropolitan convenience, making it ideal for investors seeking growth
          near a major urban center.
          <br />
          <br />
          Cooke County borders several counties, including:
          <ul className={styles.listings}>
            <li> Love County, Oklahoma (~18 miles north)</li>
            <li> Grayson County (~29 miles east)</li>
            <li> Denton County (~34 miles south)</li>
            <li>Wise County (southwest)</li> <li>Montague County (west)</li>
          </ul>
          <br />
          Nearby towns such as Lake Kiowa (5 miles), Lindsay (7 miles),
          Callisburg (9 miles), and Muenster (12 miles) enrich the regional
          community.
        </p>
      </div>
      <div className={styles.colTwo}>
        <Image
          src="/assets/gainsvilleImg.jpg"
          width={646}
          height={425}
          alt="Gainesville"
        />
      </div>
    </div>
  );
};

export default WhyInvest;
