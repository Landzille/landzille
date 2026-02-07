import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const AboutAuthor = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.colOne}>
          <h2>Meet Akingbade Akinfenwa</h2>
          <h4>Founder & CEO, Landzille LLC</h4>
          <p>
            Akingbade Akinfenwa is the founder and CEO of Landzille LLC, based
            in South Central McKinney, Texas. He lives in Texas with his
            beautiful family, and when he isn’t researching new land
            opportunities, he enjoys traveling, playing classical piano and
            exploring global cuisines.
            <br />
            <br />
            Akingbade’s journey into real estate began with a background in Land
            Surveying and Geomatics, which gave him a deep understanding of land
            itself, how it’s measured, valued, and projected for future growth.
            After years of working in OT and cybersecurity at a high level, he
            noticed a gap in the real estate investment world: families and
            communities often lacked the right knowledge to make confident land
            investment decisions.
            <br />
            <br />
            What started as his personal passion for land ownership turned into
            Landzille, a company built not just to sell land but to educate,
            empower, and guide people toward generational wealth. With nearly
            half a decade of business experience in real estate and over 20
            years of technical and financial expertise, Akingbade combines
            research, strategy, and integrity to deliver land opportunities that
            stand the test of time.
            <br />
            <br />
            He holds a Bachelor’s degree in Land Surveying, a Master’s in
            Geomatics, and a Certificate in Cybersecurity from Harvard
            University. Today, he continues to lead Landzille with the same
            vision he started with: making land ownership a reality for everyone
            and helping investors see the bigger picture of growth, opportunity,
            and legacy.
          </p>
        </div>
        <div className={styles.colTwo}>
          <Image
            src="/assets/author.jpg"
            width={646}
            height={647}
            alt="author"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutAuthor;
