"use client";
import React, { useState } from "react";
import styles from "./Step2Form.module.css";
import { Step2FormData } from "../../types/calculator";

interface Step2FormProps {
  onSubmit: (data: Step2FormData) => void;
}

const Step2Form: React.FC<Step2FormProps> = ({ onSubmit }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = "Full name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({ fullName, email });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.badge}>Almost there!</div>
      <h2 className={styles.title}>Unlock Your Full Land IQ Report</h2>
      <p className={styles.subtitle}>
        Get your personalized savings breakdown sent directly to your inbox
      </p>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            className={`${styles.input} ${
              errors.fullName ? styles.inputError : ""
            }`}
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {errors.fullName && (
            <span className={styles.error}>{errors.fullName}</span>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className={`${styles.input} ${
              errors.email ? styles.inputError : ""
            }`}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>

        <button type="submit" className={styles.submitBtn}>
          Show My Results →
        </button>

        <p className={styles.privacy}>
          🔒 We respect your privacy. Your information is secure and will never
          be shared.
        </p>
      </form>
    </div>
  );
};

export default Step2Form;
