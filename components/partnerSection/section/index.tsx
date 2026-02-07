import PartnerLogo from "../module";
import styles from "./styles.module.css";

import { partnersData } from "../../../utils/data";

const PartnersSection: React.FC = () => {
  const duplicatedLogos = [...partnersData, ...partnersData];

  return (
    <section className={styles.partnersSection}>
      <div className={styles.container}>
        <div className={styles.sliderWrapper}>
          <div className={styles.logoSlider}>
            {duplicatedLogos.map((partner, index) => (
              <PartnerLogo
                key={`${partner.id}-${index}`}
                name={partner.name}
                logo={partner.logo}
                url={partner.url}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
