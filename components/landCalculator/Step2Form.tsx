"use client";
import React, { useState } from "react";
import styles from "./Step2Form.module.css";
import { Step2FormData } from "../../types/calculator";

interface Step2FormProps {
  onSubmit: (data: Step2FormData) => void;
}

const Step2Form: React.FC<Step2FormProps> = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!phone.trim()) newErrors.phone = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError("");
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/subscribe-calculator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, phone }),
      });

      const data = await response.json();

      if (!response.ok) {
        setApiError(data.error || "Something went wrong. Please try again.");
        setIsSubmitting(false);
        return;
      }

      onSubmit({ firstName, lastName, email, phone });
    } catch {
      setApiError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.badge}>Almost there!</div>
      <h2 className={styles.title}>Unlock Your Full Land IQ Report</h2>
      <p className={styles.subtitle}>
        Get your personalized savings breakdown sent directly to your inbox
      </p>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.row}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              className={`${styles.input} ${
                errors.firstName ? styles.inputError : ""
              }`}
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && (
              <span className={styles.error}>{errors.firstName}</span>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              className={`${styles.input} ${
                errors.lastName ? styles.inputError : ""
              }`}
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && (
              <span className={styles.error}>{errors.lastName}</span>
            )}
          </div>
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

        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            className={`${styles.input} ${
              errors.phone ? styles.inputError : ""
            }`}
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <span className={styles.error}>{errors.phone}</span>}
        </div>

        {apiError && <p className={styles.apiError}>{apiError}</p>}

        <button
          type="submit"
          className={styles.submitBtn}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Show My Results →"}
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
