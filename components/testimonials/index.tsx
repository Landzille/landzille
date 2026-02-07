import { testimonials } from "@/utils/data";
import styles from "./styles.module.css";

export default function Testimonials() {
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split("youtu.be/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}?=1`;
  };
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>REAL STORIES</p>
        <h2 className={styles.heading}>Hear From Our Investors</h2>
        <p className={styles.description}>
          See how Landzille helps investors and families secure their future
          through strategic land acquisition.
        </p>

        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.card}>
              <div className={styles.videoWrapper}>
                <iframe
                  src={getYouTubeEmbedUrl(testimonial.video)}
                  title="YouTube video player"
                  allow="autoplay; encrypted-media"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>{testimonial.title}</h3>
                <p className={styles.name}>{testimonial.name}</p>
                <p className={styles.role}>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
