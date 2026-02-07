import styles from "./styles.module.css";
import Image from "next/image";

const HoneyWhyInvest = () => {
  return (
    <div className={styles.container}>
      <div className={styles.colOne}>
        <h2>Why Invest in Honeygroove and Fannin County?</h2>
        <span>Strategic Location & Accessibility</span>
        <ul className={styles.listings}>
          <li>
            Proximity to the new Bois d’Arc Lake: Honeygroove is just 8 miles
            from the $1.6-billion Bois d’Arc Lake, North Texas’s first major
            reservoir in 30 years, fueling rapid regional growth and recreation
            demand.
          </li>
          <li>
            Easy Metroplex Access: Honeygroove is located 89 miles from Dallas
            and under 1.5 hours from North Dallas suburbs via US-82 and State
            Highway 56.
          </li>
          <li>
            Regional Development: Major highways, a revitalizing downtown, and
            infrastructure investment make Honeygroove perfectly positioned for
            both lifestyle and long-term real estate growth.
          </li>
        </ul>
      </div>
      <div className={styles.colTwo}>
        <Image
          src="/assets/honeygroove.webp"
          width={646}
          height={425}
          alt="Gainesville"
        />
      </div>
    </div>
  );
};

export default HoneyWhyInvest;
