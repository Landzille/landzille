import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import { benefits, holdingCards } from "@/utils/data";

export default function WhyTexas() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column - Content */}
          <div className={styles.content}>
            <p className={styles.eyebrow}>THE REGION</p>
            <h2 className={styles.heading}>Why Choose North Texas?</h2>
            <p className={styles.description}>
              Situated in the heart of Texas, North Texas offers strategic
              proximity to major cities and transportation hubs, making it an
              ideal location for both residential and commercial development.
            </p>

            <div className={styles.benefits}>
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefit}>
                  <div className={styles.iconCircle}>
                    <span className={styles.icon}>{benefit.icon}</span>
                  </div>
                  <div>
                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                    <p className={styles.benefitDescription}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image with Cards */}
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <Image
                src="/assets/texas-land.jpg"
                width={646}
                height={420}
                alt="North Texas landscape"
                className={styles.image}
              />

              <div className={styles.cardsOverlay}>
                {holdingCards.map((card, index) => (
                  <div key={index} className={styles.card}>
                    <p className={styles.county}>{card.county}</p>
                    <p className={styles.cardValue}>{card.value}</p>
                    <p className={styles.cardLabel}>{card.label}</p>
                  </div>
                ))}

                <Link href="#" className={styles.exploreButton}>
                  Explore Holdings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
