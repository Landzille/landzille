"use client";
import { useState } from "react";
import styles from "./styles.module.css";

const SchoolIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M10 3l8 4-8 4-8-4 8-4z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M5 9v4c0 1.1 2.2 2 5 2s5-.9 5-2V9"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const WavesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M2 8c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0M2 13c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const StoreIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M3 8l1-4h12l1 4M3 8v8h14V8M3 8h14M8 16v-4h4v4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RoadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M7 3L3 17M13 3l4 14M10 6v2M10 11v2"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M10 2l7 3v5c0 4.5-3 7.5-7 8-4-.5-7-3.5-7-8V5l7-3z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const BoltIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M11 2L4 12h5l-1 6 8-10h-5l1-6z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const amenities = [
  {
    icon: <SchoolIcon />,
    title: "Schools with heart",
    description:
      "Dodd City ISD is a close-knit district of about 319 students, and it plays like a giant. The Hornets brought home 2021 Class 1A state titles in girls' basketball and softball.",
  },
  {
    icon: <WavesIcon />,
    title: "A lake at your doorstep",
    description:
      "Bois d'Arc Lake is Texas's newest, with public boat ramps and a stocked bass fishery. Bonham State Park, trails and hunting land are all close by, so every weekend is a good one.",
  },
  {
    icon: <StoreIcon />,
    title: "Everyday life, minutes away",
    description:
      "Bonham is about 8 minutes down the road, with Walmart, groceries, pharmacies, restaurants and your morning coffee. New retail is on its way.",
  },
  {
    icon: <RoadIcon />,
    title: "Roads that keep you connected",
    description:
      "State Highway 56 runs right through town, and US 82 and SH 121 are only minutes away. SH 121 is planned as a four-lane corridor, so the Metroplex gets easier to reach as growth arrives.",
  },
  {
    icon: <ShieldIcon />,
    title: "Support close at hand",
    description:
      "The Fannin County Sheriff's Office and emergency management serve the area, with joint training for lake-area response.",
  },
  {
    icon: <BoltIcon />,
    title: "Water and power for the long haul",
    description:
      "The new reservoir expanded the region's water infrastructure, built to support the growth coming its way.",
  },
];

const DoddCityAmenities = () => {
  const [active, setActive] = useState(0);
  const current = amenities[active];
  const progress = (active / (amenities.length - 1)) * 100;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>AMENITIES &amp; PUBLIC SERVICES</p>
        <h2 className={styles.heading}>Everything a town needs</h2>

        {/* Feature stage */}
        <div key={active} className={styles.stage}>
          <div className={styles.copy}>
            <span className={styles.counter}>
              {String(active + 1).padStart(2, "0")}
              <span className={styles.total}>
                {" "}
                / {String(amenities.length).padStart(2, "0")}
              </span>
            </span>
            <h3 className={styles.title}>{current.title}</h3>
            <p className={styles.description}>{current.description}</p>
          </div>

          <div className={styles.emblem} aria-hidden="true">
            <span className={styles.ring} />
            <span className={styles.bigIcon}>{current.icon}</span>
          </div>
        </div>

        {/* Route */}
        <div className={styles.route} role="tablist">
          <div className={styles.track}>
            <div
              className={styles.trackFill}
              style={{ width: `${progress}%` }}
            />
          </div>

          {amenities.map((item, i) => (
            <button
              key={item.title}
              role="tab"
              aria-selected={i === active}
              className={`${styles.stop} ${i === active ? styles.stopActive : ""} ${
                i < active ? styles.stopPassed : ""
              }`}
              onClick={() => setActive(i)}
            >
              <span className={styles.stopDot}>{item.icon}</span>
              <span className={styles.stopLabel}>{item.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoddCityAmenities;
