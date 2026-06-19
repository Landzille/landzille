import { parentTestimonials } from "@/utils/data";
import styles from "./styles.module.css";

export default function SummerTestimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Parents Are Saying Yes</h2>
        <p className={styles.description}>
          Don&apos;t take our word for it — here&apos;s what last year&apos;s
          class walked away with.
        </p>

        <div className={styles.grid}>
          {parentTestimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.card}>
              <div className={styles.header}>
                <div className={styles.avatar}>
                  {testimonial.name.charAt(0)}
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>
                    {testimonial.name}, {testimonial.age}
                  </h3>
                  <p className={styles.title}>{testimonial.track}</p>
                </div>
              </div>
              <blockquote className={styles.quote}>
                &quot;{testimonial.quote}&quot;
              </blockquote>
            </div>
          ))}
        </div>

        <p className={styles.stat}>
          100% of Summer 1.0 participants completed the program and earned a
          certificate.
        </p>
      </div>
    </section>
  );
}
