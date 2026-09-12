import Image from "next/image";
import styles from "./styles.module.css";

const WHATSAPP_URL = "https://chat.whatsapp.com/IrWv8O1iGxJ1e0I0SMsKIN?mode=gi_t";

const TrendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
    <path
      d="M3 13l5-5 3 3 6-6M17 5h-4v4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChatIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
    <path
      d="M3 10c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.06 0-2.06-.23-2.96-.66L3 17l1.15-3.68A6.96 6.96 0 013 10z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SparkleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
    <path
      d="M10 3l1.3 4.2L15.5 8.5l-4.2 1.3L10 14l-1.3-4.2L4.5 8.5l4.2-1.3L10 3z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
    <path
      d="M4 10h12M11 5l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const points = [
  { icon: <TrendIcon />, label: "Land & Market Updates" },
  { icon: <ChatIcon />, label: "North Texas Conversations" },
  { icon: <SparkleIcon />, label: "New Opportunities" },
];

const CommunitySection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textColumn}>
          <p className={styles.label}>COMMUNITY</p>
          <h2 className={styles.title}>Join the Landzille Community</h2>
          <p className={styles.body}>
            Connect with people interested in land, growth and opportunities
            across North Texas. Stay close to conversations, updates and what
            we&apos;re seeing on the ground.
          </p>

          <div className={styles.points}>
            {points.map((point) => (
              <div key={point.label} className={styles.point}>
                <span className={styles.pointIcon}>{point.icon}</span>
                <span>{point.label}</span>
              </div>
            ))}
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Join Our WhatsApp Community
            <ArrowIcon />
          </a>
        </div>

        <div className={styles.visualColumn}>
          <div className={styles.photoCard}>
            <Image
              src="/assets/community-app.png"
              alt="Landzille Community chat preview"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className={styles.photo}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
