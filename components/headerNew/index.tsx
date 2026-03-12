"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import { newNavItems } from "@/utils/data";

export default function HeaderNew() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/assets/logo-2.jpeg"
            alt="LandZille"
            width={200}
            height={70}
            className={styles.logoImage}
            priority
          />
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {newNavItems.map((item) => (
              <li key={item.label} className={styles.navItem}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/contact" className={styles.ctaButton}>
          Book a Consultation
        </Link>

        <button
          className={styles.mobileMenuToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger}></span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavList}>
            {newNavItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={styles.mobileNavLink}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className={styles.mobileCtaButton}>
                Book a Consultation
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
