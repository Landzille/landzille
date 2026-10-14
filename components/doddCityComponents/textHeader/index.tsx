import Link from "next/link";
import styles from "./styles.module.css";

const DoddCityTextHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          LANDZILLE
        </Link>
        <span className={styles.tag}>Limited &middot; Strategic Offering</span>
      </div>
    </header>
  );
};

export default DoddCityTextHeader;
