import styles from "./styles.module.css";

const BonhamHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              BONHAM, TEXAS – The Bonham Renaissance
            </h1>
            <h4>
              BONHAM, TEXAS – The Bonham Renaissance A Historic City, Reimagined
            </h4>
            <p>
              The Bonham Renaissance is a transformative initiative designed to
              preserve the city’s historic charm while ushering in new waves of
              growth and prosperity. Just over an hour from Dallas, Bonham is
              becoming one of North Texas’ most exciting destinations for
              families, businesses, and investors.
            </p>
            {/* <div className={styles.videoCard}>
              <div className={styles.videoContainer}>
                <div className={styles.videoPlayer}>
                  <iframe
                    src="https://www.youtube.com/embed/9miAzF01PPk?=1&start=2"
                    title="YouTube video player"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonhamHero;
