"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import ShareFacebook from "@/svg/shareFacebook";
import ShareLinkedIn from "@/svg/shareLinkedln";
import ShareThrends from "@/svg/shareThrends";
import Twitter from "@/svg/twitter";
import Pinterest from "@/svg/pinterest";

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [currentUrl] = useState(() =>
    typeof window !== "undefined" ? window.location.href : ""
  );

  if (!currentUrl) return null;

  return (
    <div className={styles.shareSection}>
      <h3 className={styles.sidebarTitle}>Share</h3>
      <div className={styles.shareButtons}>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            currentUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareFacebook}
          aria-label="Share on Facebook"
        >
          <ShareFacebook />
        </a>

        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            currentUrl
          )}&text=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareTwitter}
          aria-label="Share on X (Twitter)"
        >
          <Twitter />
        </a>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            currentUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareLinkedIn}
          aria-label="Share on LinkedIn"
        >
          <ShareLinkedIn />
        </a>

        <a
          href={`https://threads.net/intent/post?text=${encodeURIComponent(
            title + " " + currentUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareThrends}
          aria-label="Share on Threads"
        >
          <ShareThrends />
        </a>

        <a
          href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
            currentUrl
          )}&description=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.sharePinterest}
          aria-label="Share on Pinterest"
        >
          <Pinterest />
        </a>
      </div>
    </div>
  );
}
