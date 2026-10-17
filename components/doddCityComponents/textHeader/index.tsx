import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

const DoddCityTextHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <Image
            src="/assets/logo.png"
            alt="Landzille"
            width={150}
            height={50}
          />
        </Link>
        <span className={styles.tag}>Limited &middot; Strategic Offering</span>
      </div>
    </header>
  );
};

export default DoddCityTextHeader;
