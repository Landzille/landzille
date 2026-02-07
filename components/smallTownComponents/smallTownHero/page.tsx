import styles from "./styles.module.css";

const SmallTownHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              WOLFE CITY, TEXAS – Small Town Charm & Rising Opportunity
            </h1>
            <h4>A Heritage Town, Poised for Growth</h4>
            <p>
              Discover the small-town charm of Wolfe City, where friendly faces
              and welcoming communities await. Once centered around small farms,
              local commerce, and an active civic life, Wolfe City is now seeing
              subtle but meaningful growth in property demand, development
              interest, and investor attention. From quaint Main Street
              storefronts to emerging residential lot opportunities, it’s a
              place where heritage meets potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallTownHero;
