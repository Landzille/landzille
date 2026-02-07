"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./styles.module.css";

interface Post {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  createdAt: string;
  author: {
    name: string;
  };
}

export default function DashboardPage() {
  const { status } = useSession();
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status === "authenticated") {
      fetchPosts();
    }
  }, [status]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setPosts(posts.filter((post) => post.id !== id));
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return null;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Blog Dashboard</h1>
        <Link href="/admin/posts/new" className={styles.createButton}>
          + Create New Post
        </Link>
      </header>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <h3>Total Posts</h3>
          <p className={styles.statNumber}>{posts.length}</p>
        </div>
        <div className={styles.statCard}>
          <h3>Published</h3>
          <p className={styles.statNumber}>
            {posts.filter((p) => p.published).length}
          </p>
        </div>
        <div className={styles.statCard}>
          <h3>Drafts</h3>
          <p className={styles.statNumber}>
            {posts.filter((p) => !p.published).length}
          </p>
        </div>
      </div>

      <div className={styles.postsSection}>
        <h2 className={styles.sectionTitle}>All Posts</h2>

        {posts.length === 0 ? (
          <div className={styles.empty}>
            <p>No posts yet. Create your first post to get started!</p>
          </div>
        ) : (
          <div className={styles.postsTable}>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td>
                      <div className={styles.postTitle}>{post.title}</div>
                      <div className={styles.postSlug}>/{post.slug}</div>
                    </td>
                    <td>
                      <span
                        className={`${styles.badge} ${
                          post.published
                            ? styles.badgePublished
                            : styles.badgeDraft
                        }`}
                      >
                        {post.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td>{new Date(post.createdAt).toLocaleDateString()}</td>
                    <td>
                      <div className={styles.actions}>
                        <Link
                          href={`/admin/posts/edit/${post.id}`}
                          className={styles.editButton}
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className={styles.deleteButton}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
