import Coins from "@/svg/coins";
import styles from "./styles.module.css";

const FeaturesSection: React.FC = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>What to Expect</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Coins />
            </div>
            <h3 className={styles.cardTitle}>Mentorship & Access</h3>
            <p className={styles.cardSubtitle}>
              Throughout the internship, students had:
            </p>
            <ul className={styles.bulletList}>
              <li>Weekly check-ins with Landzille coaches</li>
              <li>Live Q&As with Landzille investment experts</li>
              <li>
                Access to a digital LMS platform with resources, handbooks, and
                class recordings
              </li>
              <li>Active team collaboration via WhatsApp.</li>
              <li>Active knowledge quiz and gift prizes</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Coins />
            </div>
            <h3 className={styles.cardTitle}>Final Deliverables</h3>
            <ul className={styles.bulletList}>
              <li>Group Research Projects (Published on our website)</li>
              <li>Certificates of Participation</li>
              <li>Transcripts</li>
              <li>Letter of Recommendation</li>
              <li>Featured presentations during the closing ceremony</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Coins />
            </div>
            <h3 className={styles.cardTitle}>Parental Engagement</h3>
            <p className={styles.cardSubtitle}>We invited parents to:</p>
            <ul className={styles.bulletList}>
              <li>Join exclusive webinars on land investment</li>
              <li>Attend the field trip & closing graduation</li>
              <li>Stay informed with progress reports and updates</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Coins />
            </div>
            <h3 className={styles.cardTitle}>Field Trip</h3>
            <p className={styles.cardDescription}>
              The program wrapped up on July 20th, 2025, with a field trip to
              Cooke County, Gainesville TX; where students connected with the
              land in a tangible, unforgettable way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
