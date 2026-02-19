import styles from "./styles.module.css";

const RoxtonHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              ROXTON, TEXAS — THE NEXUS OF NORTH TEXAS GROWTH.
            </h1>
            <p>
              Where a $50 Billion Tech Boom meets the Region’s First New
              Reservoirs in 30 Years.
            </p>
            <p>
              Landzille is proud to announce an exclusive, strategic land
              investment opportunity in Roxton. Positioned as the &quot;Hole in
              the Donut,&quot; Roxton sits at the exact collision point of
              Sherman’s industrial explosion and the massive recreational surge
              of the new North Texas lakes. This is a calculated seat at the
              table of the largest economic shift in Texas history. <br />
              <br />
              Come along with us to invest in Roxton!
            </p>
          </div>
        </div>
        <div className={styles.videoCard}>
          <div className={styles.videoContainer}>
            <div className={styles.videoPlayer}>
              <iframe
                src="https://www.youtube.com/embed/ErG-7b66Z8U?si=r5zgkNs-ZvaI2_W2"
                title="YouTube video player"
                allow="autoplay; encrypted-media"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoxtonHero;
