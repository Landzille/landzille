"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import styles from "./styles.module.css";
import RichTextEditor from "@/components/textEditor";
import ImageUpload from "@/components/imageUpload";

export default function NewPostPage() {
  const router = useRouter();
  const { status } = useSession();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (status === "unauthenticated") {
    router.push("/admin/login");
    return null;
  }

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!slug) {
      setSlug(generateSlug(value));
    }
  };

  const handleSubmit = async (
    e: React.FormEvent,
    saveAs: "draft" | "publish"
  ) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
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
        throw new Error(data.error || "Failed to create post");
      }

      router.push("/admin/dashboard");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Create New Post</h1>
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
            onChange={(e) => handleTitleChange(e.target.value)}
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
          <ImageUpload
            value={coverImage}
            onChange={setCoverImage}
            label="Cover Image"
          />
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
            onClick={(e) => handleSubmit(e, "draft")}
            className={styles.draftButton}
            disabled={loading || !title || !slug || !content}
          >
            {loading ? "Saving..." : "Save as Draft"}
          </button>
          <button
            type="button"
            onClick={(e) => handleSubmit(e, "publish")}
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
