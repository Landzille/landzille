import styles from "./styles.module.css";
import Image from "next/image";

const RoxtonWhyInvest = () => {
  return (
    <div className={styles.container}>
      <div className={styles.colOne}>
        <h2>Why Invest in Roxton Texas?</h2>
        <p>
          Imagine a landscape where quiet, golden prairies meet the unstoppable
          gravity of global capital. Less than an hour from the high-tech
          &quot;Silicon Prairie&quot; and minutes from the state’s newest
          blue-gold reservoirs, you stand on ground that is being redefined in
          real-time.
          <br />
          <br />
          This is Roxton,Texas. Here, every acre is caught in a
          &quot;billion-dollar squeeze.&quot; To your West, a $50B+ industrial
          engine is erupting out of Sherman. To your East, a $1.6B recreational
          economy is rising from the waters of Bois d’Arc Lake and Lake Ralph
          Hall. Roxton is the strategic center, the undervalued
          &quot;Nexus&quot; where industry meets leisure. Discerning investors
          are not waiting for the headlines; they are securing the ground before
          the 2026 water delivery begins.
        </p>
      </div>
      <div className={styles.colTwo}>
        <Image
          src="/assets/roxton-2.jpeg"
          width={646}
          height={425}
          alt="Gainesville"
        />
      </div>
    </div>
  );
};

export default RoxtonWhyInvest;
