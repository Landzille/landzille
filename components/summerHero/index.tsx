"use client";
import React, { useState, FormEvent } from "react";
import styles from "./styles.module.css";
import formStyles from "../waitlist/styles.module.css";

export const SummerHero: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe-summer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "Successfully joined the waitlist!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        });
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setMessage("Failed to join waitlist. Please try again.");
    }
  };

  return (
    <section className={styles.hero} id="waitlist">
      <div className={styles.backgroundImage}>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Hero Content */}
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Annual Summer
              <br />
              Internship Program
            </h1>

            <p className={styles.subtitle}>
              EMPOWERING TOMORROW&apos;S INVESTORS, TODAY.
            </p>

            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span className={styles.label}>
                  In Partnership with Skillweed
                </span>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.label}>Duration: 4 Weeks</span>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.label}>
                  Audience: High School Students (Ages 14–18)
                </span>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.label}>Location: Virtual</span>
              </div>
            </div>
          </div>

          {/* Waitlist Form */}
          <div className={styles.formCard}>
            <h2 className={formStyles.title}>
              Ready to Join Next Year&apos;s Cohort?
            </h2>
            <p className={formStyles.description}>
              If you&apos;re a student, parent, or educator and want to be
              notified about Summer 2026, sign up here:
            </p>

            <form onSubmit={handleSubmit} className={formStyles.form}>
              <div className={formStyles.nameRow}>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  disabled={status === "loading"}
                  className={formStyles.input}
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  disabled={status === "loading"}
                  className={formStyles.input}
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email Address"
                required
                disabled={status === "loading"}
                className={formStyles.input}
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="123 - 456 - 78890"
                disabled={status === "loading"}
                className={formStyles.input}
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className={formStyles.submitButton}
              >
                {status === "loading" ? "Joining..." : "Join Waitlist"}
              </button>
            </form>

            {message && (
              <p
                className={
                  status === "error"
                    ? formStyles.errorMessage
                    : formStyles.successMessage
                }
              >
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
