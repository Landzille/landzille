"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";
import styles from "../../new/styles.module.css";
import RichTextEditor from "@/components/textEditor";

export default function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const { status } = useSession();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [, setPublished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status === "authenticated") {
      fetchPost();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, id]);

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/posts/${id}`);
      const data = await response.json();

      if (response.ok) {
        setTitle(data.title);
        setSlug(data.slug);
        setExcerpt(data.excerpt || "");
        setContent(data.content);
        setCoverImage(data.coverImage || "");
        setPublished(data.published);
      } else {
        setError("Post not found");
      }
    } catch {
      setError("Failed to fetch post");
    } finally {
      setFetching(false);
    }
  };

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleSubmit = async (saveAs: "draft" | "publish") => {
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          slug,
          excerpt,
          content,
          coverImage,
          published: saveAs === "publish",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to update post");
      }

      router.push("/admin/dashboard");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading" || fetching) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Loading post...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Edit Post</h1>
        <button
          onClick={() => router.push("/admin/dashboard")}
          className={styles.backButton}
        >
          ← Back to Dashboard
        </button>
      </header>

      <form className={styles.form}>
        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Title *
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
            placeholder="Enter post title"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="slug" className={styles.label}>
            URL Slug *
          </label>
          <input
            type="text"
            id="slug"
            value={slug}
            onChange={(e) => setSlug(generateSlug(e.target.value))}
            className={styles.input}
            placeholder="url-friendly-slug"
            required
          />
          <small className={styles.hint}>
            URL: /blog/{slug || "your-post-slug"}
          </small>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="excerpt" className={styles.label}>
            Excerpt
          </label>
          <textarea
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className={styles.textarea}
            placeholder="Brief summary of the post"
            rows={3}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="coverImage" className={styles.label}>
            Cover Image URL
          </label>
          <input
            type="url"
            id="coverImage"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            className={styles.input}
            placeholder="https://example.com/image.jpg"
          />
          {coverImage && (
            <div className={styles.imagePreview}>
              <Image
                src={coverImage}
                alt="Cover preview"
                width={500}
                height={300}
              />
            </div>
          )}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Content *</label>
          <div className={styles.editorWrapper}>
            <RichTextEditor value={content} onChange={setContent} />
          </div>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            onClick={() => handleSubmit("draft")}
            className={styles.draftButton}
            disabled={loading || !title || !slug || !content}
          >
            {loading ? "Saving..." : "Save as Draft"}
          </button>
          <button
            type="button"
            onClick={() => handleSubmit("publish")}
            className={styles.publishButton}
            disabled={loading || !title || !slug || !content}
          >
            {loading ? "Publishing..." : "Publish Post"}
          </button>
        </div>
      </form>
    </div>
  );
}
