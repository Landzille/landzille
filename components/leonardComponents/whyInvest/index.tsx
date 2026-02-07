import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const WhyInvest = () => {
  return (
    <div className={styles.container}>
      <div className={styles.colOne}>
        <h2>Why Invest?</h2>
        <p>
          Imagine a place where quiet landscapes meet unstoppable momentum, a
          town shaped by heritage, yet on the brink of a modern breakthrough.
          Less than an hour from the booming Dallas–Fort Worth metroplex, you
          stand at the edge of open, investment-ready land with the unmistakable
          signs of early transformation rising around it.
          <br />
          <br />
          This is Leonard, Texas, where every acre is perfectly placed between
          the 1.25 million-strong northward expansion of Dallas/Collin County
          and the $40B industrial boom erupting out of Sherman. Here, stillness
          isn’t stagnation. It is positioning, the kind discerning investors
          recognize before the headlines catch up. New residents are gravitating
          toward Leonard for affordable land, commuter convenience, and quality
          of life, and Developers are steadily shifting their focus toward towns
          exactly like this: strategically located, uncongested, and ready for
          the next growth cycle
        </p>
      </div>
      <div className={styles.colTwo}>
        <Image
          src="/assets/leonard-new.jpg"
          width={646}
          height={425}
          alt="Gainesville"
        />
      </div>
    </div>
  );
};

export default WhyInvest;
