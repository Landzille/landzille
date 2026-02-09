import Image from "next/image";
import styles from "./styles.module.css";
import { roxtonGallery } from "@/utils/data";

const RoxtonGallerySection: React.FC = () => {
  return (
    <section className={styles.gallerySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Gallery</h2>
        </div>

        <div className={styles.grid}>
          {roxtonGallery.map((item) => (
            <div key={item.id} className={styles.imageCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={styles.image}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoxtonGallerySection;
