"use client";
import Image from "next/image";
import { useState, FormEvent } from "react";
import styles from "./styles.module.css";

const SummerWaitlistSection: React.FC = () => {
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
    <section className={styles.waitlistSection} id="join-next-cohort">
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/waitlist.jpg"
            alt="Students walking on pathway"
            className={styles.image}
            width={646}
            height={472}
          />
        </div>

        <div className={styles.formWrapper}>
          <h2 className={styles.title}>
            Ready to Join Next Year&apos;s Cohort?
          </h2>
          <p className={styles.description}>
            If you&apos;re a student, parent, or educator and want to be
            notified about Summer 2026, sign up here:
          </p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.nameRow}>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                disabled={status === "loading"}
                className={styles.input}
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
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
              placeholder="Your Email Address"
              required
              disabled={status === "loading"}
              className={styles.input}
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="123 - 456 - 78890"
              disabled={status === "loading"}
              className={styles.input}
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className={styles.submitButton}
            >
              {status === "loading" ? "Joining..." : "Join Waitlist"}
            </button>
          </form>

          {message && (
            <p
              className={
                status === "error" ? styles.errorMessage : styles.successMessage
              }
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SummerWaitlistSection;
