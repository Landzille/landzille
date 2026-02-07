import React from "react";
import styles from "./styles.module.css";
import { landMatters } from "@/utils/data";

const LandMatters = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <h2>Why Land Matters?</h2>
        <p>
          At Landzille, we believe land is more than property, it’s a
          possibility. We help you see its worth, unlock its promise, and turn
          acres into lasting impact
        </p>
        <div className={styles.gridContainer}>
          {landMatters.map((items, index) => {
            return (
              <div className={styles.grid} key={index}>
                <h3>{items.title}</h3>
                <p>{items.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandMatters;
