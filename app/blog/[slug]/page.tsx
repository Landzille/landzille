import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/shareButton";
import OtherHeroSection from "@/components/otherHeros";
import DownloadMagazine from "@/components/downloadMagazine";
import Footer from "@/components/footer";
import HeaderNew from "@/components/headerNew";

async function getPost(slug: string) {
  const post = await prisma.post.findFirst({
    where: {
      slug: slug,
      published: true,
    },
    include: {
      author: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
  return post;
}

async function getAdjacentPosts(currentPostDate: Date) {
  // Get previous post (older)
  const previousPost = await prisma.post.findFirst({
    where: {
      published: true,
      createdAt: {
        lt: currentPostDate,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      slug: true,
    },
  });

  // Get next post (newer)
  const nextPost = await prisma.post.findFirst({
    where: {
      published: true,
      createdAt: {
        gt: currentPostDate,
      },
    },
    orderBy: {
      createdAt: "asc",
    },
    select: {
      id: true,
      title: true,
      slug: true,
    },
  });

  return { previousPost, nextPost };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const { previousPost, nextPost } = await getAdjacentPosts(post.createdAt);

  return (
    <>
      <HeaderNew />
      <div className={styles.container}>
        <div className={styles.pageWrapper}>
          <div className={styles.contentWrapper}>
            {/* Header - centered, full width */}
            <header className={styles.header}>
              <h1 className={styles.title}>{post.title}</h1>
              {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
            </header>

            {/* Cover Image - centered, full width */}
            {post.coverImage && (
              <div className={styles.coverImage}>
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={1000}
                  height={600}
                  priority
                />
              </div>
            )}

            {/* Content Grid - sidebar starts here */}
            <div className={styles.contentGrid}>
              {/* Left Sidebar */}
              <aside className={styles.sidebar}>
                <div className={styles.dateSection}>
                  <div className={styles.dateLabel}>DATE</div>
                  <div className={styles.dateValue}>
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </div>

                <div className={styles.lengthSection}>
                  <div className={styles.lengthLabel}>LENGTH</div>
                  <div className={styles.lengthValue}>
                    {Math.ceil(post.content.split(/\s+/).length / 200)} min read
                  </div>
                </div>

                <div>
                  <ShareButtons title={post.title} />
                </div>
              </aside>

              {/* Main Content */}
              <article className={styles.mainContent}>
                <div
                  className={styles.content}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <footer className={styles.footer}>
                  {previousPost ? (
                    <Link
                      href={`/blog/${previousPost.slug}`}
                      className={styles.navCard}
                    >
                      <div className={styles.navIcon}></div>
                      <div className={styles.navContent}>
                        <div className={styles.navLabel}>← Previous Post</div>
                        <div className={styles.navTitle}>
                          {previousPost.title}
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className={styles.navCardDisabled}></div>
                  )}

                  {nextPost ? (
                    <Link
                      href={`/blog/${nextPost.slug}`}
                      className={styles.navCard}
                    >
                      <div className={styles.navContent}>
                        <div className={styles.navLabel}>Next Post →</div>
                        <div className={styles.navTitle}>{nextPost.title}</div>
                      </div>
                      <div className={styles.navIcon}></div>
                    </Link>
                  ) : (
                    <div className={styles.navCardDisabled}></div>
                  )}
                </footer>
              </article>
            </div>
          </div>
        </div>
        <OtherHeroSection />
        <DownloadMagazine />
        <Footer />
      </div>
    </>
  );
}
