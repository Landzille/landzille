import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DoddCityHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage} />
      <div className={styles.overlay} />

      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.brand}>
            <Image
              src="/assets/logo.png"
              alt="Landzille"
              width={150}
              height={50}
            />
          </Link>
          <Link href="/consultation" className={styles.primaryButton}>
            Reserve Your Position
            <ArrowIcon />
          </Link>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.copy}>
            <h1 className={styles.heading}>
              <span className={styles.highlight}>Dodd City, Texas</span>
              <br />
              The Next Shoreline of North Texas Growth.
            </h1>
            <p className={styles.subtext}>
              A $1.6B lake at its edge. A $40B chip campus 30 minutes out.
              DFW&rsquo;s growth wave rolling in. This is a limited, strategic
              land offering right in the crosshairs, front-row positioning for
              early buyers, before the boom.
            </p>
            <div className={styles.actions}>
              <a href="#why-invest" className={styles.secondaryButton}>
                See Why Invest
              </a>
            </div>
          </div>

          <div className={styles.videoCol}>
            <div className={styles.videoLabel}>
              <span className={styles.liveDot} />
              Watch the overview
            </div>
            <div className={styles.videoWrap}>
              <div className={styles.videoFrame}>
                <iframe
                  src="https://www.youtube.com/embed/YgII99XPh1Y?rel=0&modestbranding=1"
                  title="Dodd City overview video"
                  allow="encrypted-media; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.locationDisplay}>
        <span className={styles.currentLocation}>Dodd City</span>
        <div className={styles.currentLocationLine} />
      </div>
    </section>
  );
};

export default DoddCityHero;
