import React from "react";
import styles from "./styles.module.css";

const Quote = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <h2>A Word From Our Founder</h2>
        <h5 className={styles.quote}>“</h5>
        <p>
          At Landzille, our journey has always been about more than selling
          land. It’s about education, empowerment, and building a legacy of
          trust and opportunity. What began with a passion for land and research
          has grown into a mission to help families and investors see the true
          value of ownership. Every acre tells a story. I’m honoured that
          Landzille gets to be part of yours.
        </p>

        <div className={styles.authorDetails}>
          <h4>Akingbade Akinfenwa</h4>
          <p>Founder & CEO</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
