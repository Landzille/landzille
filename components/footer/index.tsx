"use client";
import Link from "next/link";
import { useState, FormEvent } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Thanks for subscribing!");
        setEmail(""); // Clear the input
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setMessage("Failed to subscribe. Please try again.");
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <Image
                src="/assets/logo.png"
                width={250}
                height={80}
                alt="Footer Logo"
              />
            </div>
            <p className={styles.tagline}>
              Premium land investment opportunities in North Texas. Verified,
              secure, and built for growth.
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://www.youtube.com/@LandzilleProjects"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M23 9.71a8.5 8.5 0 0 0-.91-4.13 2.92 2.92 0 0 0-1.72-1A78.36 78.36 0 0 0 12 4.27a78.45 78.45 0 0 0-8.34.3 2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 0 0 0 6.48 9.55 9.55 0 0 0 .3 2 3.14 3.14 0 0 0 .71 1.36 2.86 2.86 0 0 0 1.49.78 45.18 45.18 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 0 0 1.53-.78 2.49 2.49 0 0 0 .61-1 10.58 10.58 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54ZM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/landzille/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="18" cy="6" r="1" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@landzille3?_r=1&_t=ZS-93g534Iiqe8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/landzille"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Section */}
          <div className={styles.navSection}>
            <h3 className={styles.sectionTitle}>NAVIGATION</h3>
            <nav className={styles.navLinks}>
              <Link href="/#land-listings">Summer Programs</Link>
              <Link href="/#land-listings">Projects</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/calculator">Calculator</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
            </nav>
          </div>

          {/* Contact Section */}
          <div className={styles.contactSection}>
            <h3 className={styles.sectionTitle}>CONTACT</h3>
            <div className={styles.contactInfo}>
              <p className={styles.address}>
                825 Watters Creek Blvd Building M, Suite 250, Allen, TX 75013
              </p>
              <a href="mailto:info@landzille.com" className={styles.email}>
                info@landzille.com
              </a>
              <a href="tel:+12146498495" className={styles.phone}>
                +1 (214) 649 - 8495
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className={styles.newsletterSection}>
            <h3 className={styles.sectionTitle}>STAY UPDATED</h3>
            <p className={styles.newsletterText}>
              Get market insights and new land opportunities straight to your
              inbox.
            </p>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                required
                disabled={status === "loading"}
                className={styles.input}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className={styles.subscribeButton}
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            {message && (
              <p
                className={
                  status === "error"
                    ? styles.errorMessage
                    : styles.successMessage
                }
              >
                {message}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Landzille Investments. All rights
            Reserved
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
