import styles from "./styles.module.css";
import Image from "next/image";

const SmallTownWhyInvest = () => {
  return (
    <div className={styles.container}>
      <div className={styles.colOne}>
        <h2>Why Invest?</h2>
        <ul className={styles.listings}>
          <li>
            Housing Market Trends: In the past 12 months, Wolfe City has seen
            ~62 residential properties sold, with a median single-family home
            price around $226,100.
          </li>
          <li>
            Price Growth: From October 2023 to October 2024, median listed home
            prices increased to approximately $267,450, with a rise of over $158
            per square foot, representing a more than 40% increase.
          </li>
          <li>
            Cost of Living & Affordability: Wolfe City remains significantly
            more affordable than many metro areas. Housing, utilities, groceries
            often run well below national averages.
          </li>
        </ul>
        <p>
          Given these, investors might expect annual appreciation in the range
          of 5-10% in established or well-located lots/homes over 3-5 years,
          particularly where new infrastructure or desirable amenities are
          nearby. Land/lots in development zones or near major highways could
          yield more on shorter timeframes if supply is tight and demand rises.
        </p>
      </div>
      <div className={styles.colTwo}>
        <Image
          src="/assets/smallTown.jpg"
          width={646}
          height={425}
          alt="Small Town"
        />
      </div>
    </div>
  );
};

export default SmallTownWhyInvest;
