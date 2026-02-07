import Image from "next/image";
import styles from "./styles.module.css";
import { galleryItems } from "@/utils/data";

const GallerySection: React.FC = () => {
  return (
    <section className={styles.gallerySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Gallery</h2>
        </div>

        <div className={styles.grid}>
          {galleryItems.slice(0, 3).map((item) => (
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
        <div className={styles.videoSection}>
          <iframe
            src="https://www.youtube.com/embed/S6_90d98zR0?si=yoGUA44Jov0dWG0"
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
            loading="lazy"
            className={styles.videoIframe}
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
