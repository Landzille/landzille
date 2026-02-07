import Link from "next/link";
import styles from "./styles.module.css";
import InsightCard from "../insightCard";
import { prisma } from "@/lib/prisma";

async function getRecentPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
    select: {
      id: true,
      title: true,
      excerpt: true,
      coverImage: true,
      slug: true,
    },
  });
  return posts;
}

const InsightsSection = async () => {
  const posts = await getRecentPosts();

  return (
    <section className={styles.insightsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <p className={styles.label}>BLOG</p>
            <h2 className={styles.title}>Insights from Landzille</h2>
          </div>
          <Link href="/blog" className={styles.readMoreButton}>
            Read More Insights
          </Link>
        </div>

        <div className={styles.cardsGrid}>
          {posts.length > 0 ? (
            posts.map((post) => (
              <InsightCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt || ""}
                image={post.coverImage || "/assets/default-blog.jpg"}
                slug={post.slug}
              />
            ))
          ) : (
            <p className={styles.noPosts}>No blog posts available yet.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
