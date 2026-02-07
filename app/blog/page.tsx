import Link from "next/link";
import { prisma } from "@/lib/prisma";
import styles from "./styles.module.css";
import Image from "next/image";
import Header from "@/components/header";
import OtherPageHero from "@/components/otherHero";
import Arrow from "@/svg/arrow";
import OtherHeroSection from "@/components/otherHeros";
import DownloadMagazine from "@/components/downloadMagazine";
import Footer from "@/components/footer";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImage: string | null;
  createdAt: Date;
  author: {
    name: string | null;
  };
};

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log("📚 Fetched posts:", posts.length); // Debug log
  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div>
      <Header />
      <OtherPageHero headerText="Blog" />
      <div className={styles.contain}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {posts.length === 0 ? (
              <div className={styles.empty}>
                <p>No posts published yet. Check back soon!</p>
              </div>
            ) : (
              posts.map((post: Post) => (
                <article key={post.id} className={styles.card}>
                  {post.coverImage && (
                    <Link
                      href={`/blog/${post.slug}`}
                      className={styles.imageLink}
                    >
                      <div className={styles.imageWrapper}>
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          className={styles.image}
                          width={500}
                          height={500}
                          loading="eager"
                        />
                      </div>
                    </Link>
                  )}

                  <div className={styles.content}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className={styles.titleLink}
                    >
                      <h2 className={styles.postTitle}>{post.title}</h2>
                    </Link>

                    {post.excerpt && (
                      <p className={styles.excerpt}>{post.excerpt}</p>
                    )}

                    <Link
                      href={`/blog/${post.slug}`}
                      className={styles.readMore}
                    >
                      View Full Insight <Arrow />
                    </Link>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
        <OtherHeroSection />
        <DownloadMagazine />
        <Footer />
      </div>
    </div>
  );
}
