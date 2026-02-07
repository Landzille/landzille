import styles from "./styles.module.css";

const GainesvilleHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Invest in Gainesville, TX – Prime Land Opportunities in Cooke
              County with Landzille
            </h1>
            <p>
              Landzille is excited to announce a new land acquisition project in
              Gainesville, Texas, the vibrant county seat of Cooke County. We
              invite investors to join us in securing prime land parcels in this
              rapidly growing North Texas market.
            </p>
            <div className={styles.videoCard}>
              <div className={styles.videoContainer}>
                <div className={styles.videoPlayer}>
                  <iframe
                    src="https://www.youtube.com/embed/zpyXrzvpjmk?=1&start=2"
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

export default GainesvilleHero;
