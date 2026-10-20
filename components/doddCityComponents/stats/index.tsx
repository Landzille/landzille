"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

interface StatDef {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  subtitle: string;
}

const stats: StatDef[] = [
  {
    target: 1.6,
    decimals: 1,
    prefix: "$",
    suffix: "B",
    label: "Bois d'Arc Lake",
    subtitle: "Built beside Dodd City",
  },
  {
    target: 16641,
    label: "Acres of Lake Surface",
    subtitle: "Brand-new, built in 2021",
  },
  {
    target: 40,
    prefix: "$",
    suffix: "B",
    label: "Texas Instruments Campus",
    subtitle: "Sherman, 30 minutes away",
  },
  {
    target: 123557,
    label: "New DFW Residents",
    subtitle: "Added in a single Census year",
  },
];

const formatValue = (value: number, decimals: number) =>
  value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

const DoddCityStats = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (inView) return;
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView]);

  return (
    <section ref={sectionRef} className={styles.stats}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`${styles.statCard} ${inView ? styles.statCardIn : ""}`}
              style={{ transitionDelay: `${index * 110}ms` }}
            >
              <div className={styles.value}>
                <CountUp stat={stat} start={inView} />
              </div>
              <div className={styles.label}>{stat.label}</div>
              <div className={styles.subtitle}>{stat.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CountUp = ({ stat, start }: { stat: StatDef; start: boolean }) => {
  const [display, setDisplay] = useState(
    `${stat.prefix ?? ""}${formatValue(0, stat.decimals ?? 0)}${stat.suffix ?? ""}`
  );

  useEffect(() => {
    if (!start) return;

    const duration = 1800;
    let frame: number;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = stat.target * eased;
      setDisplay(
        `${stat.prefix ?? ""}${formatValue(current, stat.decimals ?? 0)}${stat.suffix ?? ""}`
      );
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [start, stat]);

  return <>{display}</>;
};

export default DoddCityStats;
