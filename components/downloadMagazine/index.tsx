"use client";
import { useState, FormEvent } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const DownloadMagazine: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
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

  const handleDownload = (downloadUrl: string) => {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "i-am-land-13.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe-magazine", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "Download started!");

        if (data.downloadUrl) {
          setTimeout(() => {
            handleDownload(data.downloadUrl);
          }, 500);
        }
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
        });
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setMessage("Failed to process request. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.colOne}>
        <Image
          src="/assets/i-am-land-13.png"
          width={646}
          height={762}
          alt="download"
        />
      </div>
      <div className={styles.colTwo}>
        <h2>Download Landzille&apos;s e - Magazine (April Edition)</h2>
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

          <button
            type="submit"
            disabled={status === "loading"}
            className={styles.submitButton}
          >
            {status === "loading" ? "Processing..." : "Download Magazine"}
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
  );
};

export default DownloadMagazine;
