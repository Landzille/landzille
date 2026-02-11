"use client";
import React from "react";
import styles from "./styles.module.css";
import WaitlistForm from "../waitlistForm";

const VIPWaitlist = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Hero Content */}
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Welcome to Landzille’s VIP Waitlist: Secure your slice of North
              Texas.
            </h1>
            <p>
              Imagine being among the first to unlock exclusive land
              opportunities across the thriving landscapes of North Texas. At
              Landzille, we don’t just offer plots of land, we help dreamers,
              investors, and families like yours secure life-changing
              opportunities in one of America’s fastest-growing regions. The
              Dallas–Fort Worth area is booming, and this is your moment to
              secure a piece of it before everyone else catches on.
            </p>
          </div>

          {/* Form Container */}
          <div className={styles.formContainer}>
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VIPWaitlist;
