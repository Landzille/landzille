"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import { filters, properties } from "@/utils/data";
import Arrow from "@/svg/arrow";

export default function Holdings() {
  const [activeFilter, setActiveFilter] = useState("View All");

  const filteredProperties = properties.filter((property) => {
    if (activeFilter === "View All") return true;

    const countyMap: { [key: string]: string } = {
      "Fannin County": "FANNIN COUNTY",
      "Hunt County": "HUNT COUNTY",
      "Cooke County": "COOKE COUNTY",
    };

    return property.county === countyMap[activeFilter];
  });

  return (
    <section className={styles.section} id="land-listings">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <p className={styles.eyebrow}>CURATED OPPORTUNITIES</p>
            <h2 className={styles.heading}>Explore North Texas Holdings</h2>
            <p className={styles.description}>
              Explore the unique charm and promising opportunities of Bonham,
              Honey Grove, Wolfe City, Greenville, Celeste, and the pristine
              lakes of Bois d&apos;Arc, Lake Ralph, Lake Bonham, and Lake Moss.
              Dive deeper into each location and uncover the wealth of
              possibilities that await you.
            </p>
          </div>

          <div className={styles.filters}>
            {filters.map((filter) => (
              <button
                key={filter}
                className={`${styles.filterButton} ${
                  activeFilter === filter ? styles.active : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <div key={property.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    width={405}
                    height={256}
                    src={property.image}
                    alt={property.title}
                    className={styles.image}
                  />
                  <span className={styles.badge}>{property.county}</span>
                </div>

                <div className={styles.content}>
                  <h3 className={styles.title}>{property.title}</h3>
                  <p className={styles.propertyDescription}>
                    {property.description}
                  </p>

                  <div className={styles.tags}>
                    <span className={styles.tag}>{property.location}</span>
                    <span className={styles.tag}>{property.acres}</span>
                    {property.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className={styles.actions}>
                    <Link className={styles.inquireButton} href="/contact">
                      {property.actions.map((action) => (
                        <span className={styles.inquireButton} key={action}>
                          {action}
                        </span>
                      ))}
                    </Link>
                    <Link href={property.link} className={styles.detailsLink}>
                      View Property Details
                      <span className={styles.arrow}>
                        <Arrow />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noResults}>
              <p>No properties found for {activeFilter}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
