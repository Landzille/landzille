"use client";
import { useState, FormEvent } from "react";
import YouTube from "@/svg/youTube";
import styles from "./styles.module.css";
import Instagram from "@/svg/instagram";
import Link from "next/link";
import Tiktok from "@/svg/tiktok";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Thank you! We'll get back to you soon.");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactGrid}>
        <div className={styles.contactInfo}>
          <h1 className={styles.heading}>
            We are always ready to help you and answer your questions
          </h1>

          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <h4>Phone Number</h4>
              <Link href="tel:+12146498495">+1 (214) 649 - 8495</Link>
            </div>

            <div className={styles.infoCard}>
              <h4>Location</h4>
              <p>
                825 Watters Creek Blvd Building M, Suite 250, Allen, TX 75013
              </p>
            </div>

            <div className={styles.infoCard}>
              <h4>Email</h4>
              <Link href="mailto:info@landzille.com">info@landzille.com</Link>
            </div>

            <div className={styles.infoCard}>
              <h4>Socials</h4>
              <div className={styles.socialIcons}>
                <Link
                  href="https://www.youtube.com/@LandzilleProjects"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTube />
                </Link>
                <Link
                  href="https://www.instagram.com/landzille/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </Link>
                <Link
                  href="https://www.tiktok.com/@landzille3?_r=1&_t=ZS-93g534Iiqe8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Tiktok />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.formWrapper}>
          <h3>Get in Touch</h3>
          <p className={styles.subtitle}>Let us know how we can help you</p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                disabled={status === "loading"}
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                disabled={status === "loading"}
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
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              disabled={status === "loading"}
            />

            <button type="submit" disabled={status === "loading"}>
              {status === "loading"
                ? "Sending..."
                : "Explore North Texas Opportunity"}
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

      {/* MAP */}
      <div className={styles.mapContainer}>
        <iframe
          src="https://maps.google.com/maps?q=Allen%20Texas&t=&z=13&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        />
      </div>
    </section>
  );
}
