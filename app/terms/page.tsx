import HeaderNew from "@/components/headerNew";
import styles from "./styles.module.css";
import Footer from "@/components/footer";

export default function TermsOfService() {
  return (
    <>
      <HeaderNew />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.updated}>
            <strong>Effective Date:</strong> January 31, 2026
            <br />
            <strong>Last Updated:</strong> January 31, 2026
          </p>

          <div className={styles.intro}>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to
              and use of the Landzille website and related services. By
              accessing or using the Website, you agree to be bound by these
              Terms.{" "}
              <b>If you do not agree, you must discontinue use immediately.</b>
            </p>
          </div>

          {/* Section 1 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Definitions</h2>
            <p>
              <b>
                &quot;Landzille,&quot; &quot;Company,&quot; &quot;we,&quot; or
                &quot;us&quot;
              </b>{" "}
              refers to Landzille and its affiliates.
            </p>
            <p>
              <strong>&quot;User&quot; or &quot;you&quot;</strong> refers to any
              individual or entity accessing the Website.
            </p>
          </section>

          {/* Section 2 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              2. Website Disclosure & Purpose
            </h2>
            <p>
              The Website is provided solely for informational and educational
              purposes related to land ownership and land marketing.{" "}
              <strong>
                Content does not constitute legal, tax, financial, or investment
                advice.
              </strong>
            </p>
          </section>

          {/* Section 3 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              3. Not Securities | No Investment Guarantees
            </h2>
            <div className={styles.warning}>
              <p>
                <strong>IMPORTANT:</strong> Landzille does not offer securities,
                investment contracts, REITs, pooled investments, or fractional
                ownership.
              </p>
              <p>
                Land values may increase, decrease, or remain stagnant. No
                guarantees of appreciation, income, zoning, utilities, access,
                financing, or development approvals are made.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. No Broker | No Fiduciary</h2>
            <p>
              Landzille is not acting as a real estate broker, lender, or
              fiduciary unless expressly stated in a separate written agreement.
            </p>
          </section>

          {/* Section 5 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              5. Due Diligence Responsibility
            </h2>
            <p>
              <strong>Buyer is solely responsible</strong> for verifying:
            </p>
            <ul className={styles.list}>
              <li>Zoning regulations and restrictions</li>
              <li>Property surveys and boundaries</li>
              <li>Soil conditions and environmental factors</li>
              <li>Utilities availability and connection costs</li>
              <li>Access rights and easements</li>
              <li>Flood zones and drainage</li>
              <li>Agricultural exemptions and tax implications</li>
              <li>All other property characteristics prior to purchase</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              6. Marketing, Projections & Anti-Reliance
            </h2>
            <p>
              All projections, illustrations, or infrastructure references are{" "}
              <strong>illustrative only</strong>. User acknowledges no reliance
              on statements outside executed written agreements.
            </p>
          </section>

          {/* Section 7 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              7. Transactions, Payments & Refunds
            </h2>
            <p>
              Fees, deposits, or option payments may be collected through
              third-party processors. Unless stated otherwise in writing,{" "}
              <strong>all payments are non-refundable</strong> and subject to
              applicable taxes.
            </p>
          </section>

          {/* Section 8 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Third-Party Services</h2>
            <p>
              Landzille is not responsible for third-party providers including:
            </p>
            <ul className={styles.list}>
              <li>Title companies and closing services</li>
              <li>Lenders and financing institutions</li>
              <li>Tax professionals and accountants</li>
              <li>Agricultural partners and consultants</li>
              <li>Surveyors and inspectors</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. User Conduct</h2>
            <p>Users may not:</p>
            <ul className={styles.list}>
              <li>Misuse the Website or its services</li>
              <li>Scrape, copy, or reproduce content without authorization</li>
              <li>Impersonate others or misrepresent affiliation</li>
              <li>Submit false or misleading information</li>
              <li>Interfere with Website operations or security</li>
              <li>
                Violate applicable laws, regulations, or third-party rights
              </li>
            </ul>
          </section>

          {/* Section 10 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              10. Disclaimer of Warranties
            </h2>
            <div className={styles.disclaimer}>
              <p>
                THE WEBSITE IS PROVIDED <strong>&quot;AS IS&quot;</strong> AND{" "}
                <strong>&quot;AS AVAILABLE&quot;</strong> WITHOUT WARRANTIES OF
                ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
                TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>11. Limitation of Liability</h2>
            <div className={styles.disclaimer}>
              <p>
                LANDZILLE&apos;S LIABILITY SHALL NOT EXCEED THE GREATER OF{" "}
                <strong>$100</strong> OR FEES PAID BY USER, EXCLUDING PROVEN
                GROSS NEGLIGENCE OR WILLFUL MISCONDUCT.
              </p>
              <p>
                IN NO EVENT SHALL LANDZILLE BE LIABLE FOR INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF
                PROFITS, DATA, OR GOODWILL.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>12. Indemnification</h2>
            <p>
              User agrees to indemnify, defend, and hold harmless Landzille and
              its affiliates, officers, directors, employees, and agents from
              and against any claims, liabilities, damages, losses, costs, or
              expenses (including reasonable attorneys&apos; fees) arising from:
            </p>
            <ul className={styles.list}>
              <li>Misuse of the Website</li>
              <li>Violation of these Terms</li>
              <li>Violation of any third-party rights</li>
              <li>Your use of any information obtained from the Website</li>
            </ul>
          </section>

          {/* Section 13 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              13. Arbitration & Class Waiver
            </h2>
            <p>
              Disputes shall be resolved by <strong>binding arbitration</strong>{" "}
              under American Arbitration Association (AAA) rules in{" "}
              <strong>Collin County, Texas</strong>.
            </p>
            <p>
              User waives the right to a jury trial and class actions. Claims
              must be brought in an individual capacity only.
            </p>
          </section>

          {/* Section 14 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>14. Force Majeure</h2>
            <p>
              Landzille is not liable for delays or failures caused by events
              beyond reasonable control, including but not limited to natural
              disasters, acts of God, government actions, labor disputes, or
              technical failures.
            </p>
          </section>

          {/* Section 15 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>15. AML / KYC Compliance</h2>
            <p>
              Users may be required to comply with identity verification,
              Anti-Money Laundering (AML), and Know Your Customer (KYC) laws.
              You agree to provide accurate and complete information when
              requested.
            </p>
          </section>

          {/* Section 16 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              16. Electronic Communications
            </h2>
            <p>
              By using the Website, you consent to receive electronic
              communications from us, including service notifications, updates,
              and marketing materials. You may opt out of marketing
              communications where required by law.
            </p>
          </section>

          {/* Section 17 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>17. Modifications</h2>
            <p>
              We reserve the right to modify these Terms at any time. Material
              changes will be communicated via email or Website notice and
              become effective <strong>30 days after posting</strong>. Your
              continued use after modifications constitutes acceptance.
            </p>
          </section>

          {/* Section 18 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>18. Governing Law & Venue</h2>
            <p>
              These Terms are governed by the laws of the{" "}
              <strong>State of Texas</strong>, United States, without regard to
              conflict of law provisions.
            </p>
            <p>
              Venue lies exclusively in <strong>Collin County, Texas</strong>.
            </p>
          </section>

          {/* Section 19 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              19. Severability & Entire Agreement
            </h2>
            <p>
              If any provision of these Terms is held to be invalid or
              unenforceable, the remaining provisions shall remain in full force
              and effect.
            </p>
            <p>
              These Terms, together with our Privacy Policy, constitute the
              entire agreement between you and Landzille regarding Website use
              and supersede all prior agreements.
            </p>
          </section>

          {/* Section 20 */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>20. Contact</h2>
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
              <strong>ACKNOWLEDGMENT:</strong> By using the Landzille Website,
              you acknowledge that you have read, understood, and agree to be
              bound by these Terms of Service. If you do not agree to these
              Terms, you must not access or use the Website.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
