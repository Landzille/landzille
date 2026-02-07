import styles from "./styles.module.css";

const HoneygrooveHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Invest in Honeygroove, TX — High-Growth Land Opportunities in
              Fannin County with Landzille
            </h1>
            <p>
              Landzille proudly introduces Honeygroove, a premier land
              acquisition project in the “Sweetest Town in Texas.” This project
              unfolds in two exclusive phases. Phase 1 sold out almost
              instantly, as smart investors recognized the once-in-a-generation
              potential of this special location. Now, Phase 2 is open, but
              quietly filling up at record speed. Word-of-mouth and early
              success stories are drawing a new wave of interest, making this
              your rare chance to reserve a plot before public demand erupts.
              This is your exclusive chance to invest in well-located parcels in
              one of North Texas’s hottest emerging markets
            </p>
            <div className={styles.videoCard}>
              <div className={styles.videoContainer}>
                <div className={styles.videoPlayer}>
                  <iframe
                    src="https://www.youtube.com/embed/9miAzF01PPk?=1&start=2"
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

export default HoneygrooveHero;
