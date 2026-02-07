import styles from "./styles.module.css";

const LeonardHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Leonard, Texas — The CONVERGENCE POINT OF NORTH TEXAS GROWTH.
            </h1>
            <p>
              Landzille is super excited to announce this limited, strategic,
              and high-value land investment project in Leonard! With the Collin
              County suburban wave pushing north and the $40 billion Sherman
              tech corridor accelerating from the east, there has never been a
              more perfect moment to secure land in a town sitting at the exact
              intersection of both forces.
            </p>
            <div className={styles.videoCard}>
              <div className={styles.videoContainer}>
                <div className={styles.videoPlayer}>
                  <iframe
                    src="https://www.youtube.com/embed/t4HJDVLMY4o"
                    title="YouTube video player"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeonardHero;
