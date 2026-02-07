import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import Arrow from "@/svg/arrow";

interface InsightCardProps {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

const InsightCard: React.FC<InsightCardProps> = ({
  title,
  excerpt,
  image,
  slug,
}) => {
  return (
    <article className={styles.card}>
      <Link href={`/blog/${slug}`} className={styles.imageLink}>
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt={title}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>

      <div className={styles.content}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>

        <Link href={`/blog/${slug}`} className={styles.readMoreLink}>
          View Full Insight
          <Arrow />
        </Link>
      </div>
    </article>
  );
};

export default InsightCard;
