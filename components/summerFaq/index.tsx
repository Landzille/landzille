"use client";
import { useState } from "react";
import { summerFaqs } from "@/utils/data";
import styles from "./styles.module.css";

export default function SummerFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Answering the Questions You Haven&apos;t Asked Yet</h2>

        <div className={styles.list}>
          {summerFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.id} className={styles.item}>
                <button
                  type="button"
                  className={styles.question}
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className={styles.icon}>{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <p className={styles.answer}>{faq.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
