import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const CommunityImpact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.colOne}>
          <h2>Community Impact</h2>
          <p>
            At Landzille, we believe true impact goes beyond acres and
            transactions; it’s about people, education, and community growth.
            Over time, we have had the privilege of serving 40+ families and
            counting and guiding investments beyond 600+ acres of North Texas
            land. Each milestone reflects lives empowered and futures secured.
            <br />
            <br />
            Our commitment to the next gen is clear in our Summer Internship
            Program, an annual 4-week immersive experience that equips young
            leaders with real-world knowledge in land investment, real estate,
            and financial literacy.
            <br />
            <br />
            We also host quarterly educational webinars, including Land, Wealth
            & North Texas and the Gainesville Info Session. These sessions bring
            together both new and seasoned investors, creating space to learn,
            connect, and explore opportunities in a growing market.
            <br />
            <br />
            At Landzille, we measure success not only in land sold but in the
            knowledge shared and communities strengthened. This is because when
            people grow, communities thrive.
          </p>
        </div>
        <div className={styles.colTwo}>
          <Image
            src="/assets/commmunity.jpg"
            width={646}
            height={420}
            alt="community"
          />
        </div>
      </div>
    </div>
  );
};

export default CommunityImpact;
