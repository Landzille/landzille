"use client";
import { useState, FormEvent } from "react";
import styles from "./styles.module.css";

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
    <path
      d="M4 10h12M11 5l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const JoinCommunity: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/subscribe-community", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setStatusMessage(data.message || "You're in. We'll be in touch soon.");
        setFormData(initialForm);
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Failed to submit. Please try again.");
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.contentRow}>
          <div className={styles.textColumn}>
            <h1 className={styles.heading}>
              Land isn&apos;t just soil. It&apos;s a story you&apos;re
              writing for yourself.
            </h1>
            <p className={styles.subtext}>Maybe it&apos;s time to start.</p>

            <div className={styles.roomBlock}>
              <h2 className={styles.subheading}>
                The best land deals are never the ones you find last.
              </h2>
              <p className={styles.roomBody}>
                Early infrastructure data, new land drops, and exclusive
                discounts before anyone else sees them. This is that room.
              </p>
              <a
                href="https://chat.whatsapp.com/IrWv8O1iGxJ1e0I0SMsKIN?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryButton}
              >
                Join the community
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className={styles.formColumn}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.nameRow}>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  required
                  disabled={status === "loading"}
                  className={styles.input}
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  required
                  disabled={status === "loading"}
                  className={styles.input}
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                disabled={status === "loading"}
                className={styles.input}
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                required
                disabled={status === "loading"}
                className={styles.input}
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                disabled={status === "loading"}
                className={styles.textarea}
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className={styles.submitButton}
              >
                {status === "loading" ? "Sending..." : "Begin here"}
              </button>

              {statusMessage && (
                <p
                  className={
                    status === "error"
                      ? styles.errorMessage
                      : styles.successMessage
                  }
                >
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
