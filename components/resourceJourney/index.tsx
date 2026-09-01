import styles from "./styles.module.css";
import { resourceStages } from "@/utils/resourceStages";
import CardSlider from "./CardSlider";

const TOTAL_STAGES = resourceStages.length;

const ResourceJourney: React.FC = () => {
  return (
    <>
      {resourceStages.map((stage) => (
        <section
          key={stage.stageNumber}
          id={`stage-${stage.stageNumber}`}
          className={styles.stageSection}
          data-alt={stage.stageNumber % 2 === 0}
        >
          <div className={styles.container}>
            <div className={styles.badgeRow}>
              <span className={styles.badge}>
                STAGE {stage.stageNumber} OF {TOTAL_STAGES}
              </span>
              <span className={styles.bundleName}>{stage.bundleName}</span>
            </div>
            <h2 className={styles.title}>{stage.title}</h2>
            <p className={styles.description}>{stage.description}</p>

            <CardSlider resources={stage.resources} />
          </div>
        </section>
      ))}
    </>
  );
};

export default ResourceJourney;
