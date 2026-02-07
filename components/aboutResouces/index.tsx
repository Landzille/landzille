import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

const AboutResources = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.colOne}>
        <h2>Landzille E-Magazines</h2>
        <div className={styles.texts}>
          <p>
            Knowledge is the foundation of every smart land investment in Texas.
            The Landzille Resources hub features expert blogs, in-depth resource
            books, and our e-magazine, all rooted in real North Texas land
            investing experience. Designed for first-time and seasoned investors
            alike, our content helps you understand Texas land markets, evaluate
            opportunities with confidence, and make informed land investment
            decisions for long-term growth.
          </p>
        </div>
        <div className={styles.buttonContain}>
          <Link href="/e-magazines">Read Our Magazines</Link>
        </div>
      </div>
      <div className={styles.colTwo}>
        <Image
          src="/assets/eBookImg.png"
          width={646}
          height={420}
          alt="Image"
        />
      </div>
    </div>
  );
};

export default AboutResources;
