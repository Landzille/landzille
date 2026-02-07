import styles from "./styles.module.css";

type HeaderProps = {
  headerText?: string;
};

const OtherPageHero = ({ headerText }: HeaderProps) => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>{headerText}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherPageHero;
