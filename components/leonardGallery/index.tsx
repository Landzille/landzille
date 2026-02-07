import Image from "next/image";
import styles from "../gallery/styles.module.css";
import { leonardGalleryItems } from "@/utils/data";

const LeonardGallery: React.FC = () => {
  return (
    <section className={styles.gallerySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Gallery</h2>
          <p className={styles.subtitle}>Check out the lands for sale</p>
        </div>

        <div className={styles.grid}>
          {leonardGalleryItems.map((item) => (
            <div key={item.id} className={styles.imageCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={styles.image}
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

export default LeonardGallery;
