import styles from "./styles.module.css";
import Image from "next/image";

const BonhamWhyInvest = () => {
  return (
    <div className={styles.container}>
      <div className={styles.colOne}>
        <h2>Why Invest in Bonham?</h2>
        <p>
          Bonham has seen steady growth, with median home prices rising nearly
          18% year-over-year and strong demand fueled by new infrastructure and
          regional economic expansion. Investors can expect attractive returns,
          with projected residential appreciation of 5-8% annually over the next
          3-5 years and even higher upside in premium developments.
        </p>
      </div>
      <div className={styles.colTwo}>
        <Image src="/assets/bonham.jpg" width={646} height={425} alt="Bonham" />
      </div>
    </div>
  );
};

export default BonhamWhyInvest;
