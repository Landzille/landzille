import HeaderNew from "@/components/headerNew";
import styles from "./styles.module.css";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <>
      <HeaderNew />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.updated}>
            <strong>Last Updated:</strong> January 31, 2026
          </p>

          <div className={styles.intro}>
            <p>
              Landzille (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;) respects your privacy and is committed to
              protecting the personal information you share with us through our
              website, digital platforms, communications, and related services
              (collectively, the &quot;Website&quot;). This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information in compliance with applicable Texas and United States
              laws.
            </p>
          </div>

          {/* Section 1 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Information We Collect</h2>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>
                a. Personal Information
              </h3>
              <p>
                We may collect personal information you voluntarily provide,
                including but not limited to:
              </p>
              <ul className={styles.list}>
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number (including SMS or WhatsApp contact)</li>
                <li>Mailing address</li>
                <li>Investor inquiries or preferences</li>
                <li>
                  Any information submitted through forms, consultations, or
                  communications
                </li>
              </ul>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>
                b. Automatically Collected Information
              </h3>
              <p>When you access the Website, we may automatically collect:</p>
              <ul className={styles.list}>
                <li>IP address</li>
                <li>Browser type and device information</li>
                <li>Pages viewed, time spent, and referring URLs</li>
                <li>Cookies, pixels, and analytics data</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              2. How We Use Your Information
            </h2>
            <p>Information may be used to:</p>
            <ul className={styles.list}>
              <li>Operate, maintain, and improve our Website and services</li>
              <li>Respond to inquiries and communicate opportunities</li>
              <li>
                Deliver educational, marketing, and promotional content (where
                permitted)
              </li>
              <li>Comply with legal, regulatory, and AML/KYC obligations</li>
              <li>Protect against fraud, misuse, or unauthorized access</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              3. Cookies, Analytics & Tracking
            </h2>
            <p>
              We use cookies and similar technologies to enhance functionality,
              analyze traffic, and support marketing efforts. You may disable
              cookies in your browser, though certain features may be limited.
            </p>
          </section>

          {/* Section 4 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              4. Disclosure of Information
            </h2>
            <p>
              We do not sell personal information. We may disclose information
              to:
            </p>
            <ul className={styles.list}>
              <li>Service providers and professional advisors</li>
              <li>Legal or regulatory authorities when required</li>
              <li>Business partners in connection with transactions</li>
              <li>Successors in the event of a merger or sale</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Data Security</h2>
            <p>
              We implement commercially reasonable safeguards; however, no
              system is completely secure and absolute protection cannot be
              guaranteed.
            </p>
          </section>

          {/* Section 6 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Third-Party Websites</h2>
            <p>
              Links to third-party websites are provided for convenience only.
              Landzille is not responsible for their privacy practices or
              content.
            </p>
          </section>

          {/* Section 7 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              7. Your Rights & Communications
            </h2>
            <p>
              You may request access, correction, deletion, or opt out of
              marketing communications in accordance with applicable law.
              Consent for email, SMS, and WhatsApp communications may be
              withdrawn where legally required.
            </p>
          </section>

          {/* Section 8 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              8. Children&apos;s Privacy (COPPA)
            </h2>
            <p>
              The Website is not intended for children under 13. We do not
              knowingly collect personal information from minors.
            </p>
          </section>

          {/* Section 9 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              9. Updates to This Privacy Policy
            </h2>
            <p>
              We may update this Policy periodically. Material changes will be
              posted on the Website and are effective upon posting.
            </p>
          </section>

          {/* Section 10 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Contact</h2>
            <div className={styles.contactBox}>
              <p>
                <strong>Landzille</strong>
              </p>
              <p>825 Watters Creek Blvd Building M, Suite 250</p>
              <p>Allen, TX 75013</p>
              <p>
                Email:{" "}
                <a href="mailto:info@landzille.com" className={styles.link}>
                  info@landzille.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+12146498495" className={styles.link}>
                  +1 (214) 649-8495
                </a>
              </p>
            </div>
          </section>

          {/* Footer Note */}
          <div className={styles.footer}>
            <p>
              By using our Website, you acknowledge that you have read and
              understood this Privacy Policy and agree to its terms.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
