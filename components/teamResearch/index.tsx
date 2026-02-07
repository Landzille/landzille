import Link from "next/link";
import styles from "./styles.module.css";
import { teams } from "@/utils/data";
import Coins from "@/svg/coins";
import Arrow from "@/svg/arrow";

const TeamResearchSection: React.FC = () => {
  return (
    <section className={styles.researchSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Projects</h2>
        </div>

        <div className={styles.grid}>
          {teams.map((team) => (
            <div key={team.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Coins />
              </div>
              <h3 className={styles.cardTitle}>{team.name}</h3>
              <p className={styles.cardDescription}>{team.description}</p>
              <Link
                href={team.pdfUrl}
                className={styles.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                download={true}
              >
                Download PDF
                <Arrow />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamResearchSection;
