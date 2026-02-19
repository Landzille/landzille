import React from "react";
import styles from "./Results.module.css";
import { CalculationResult } from "../../types/calculator";
import { formatCurrency } from "../../utils/calculations";
import Link from "next/link";

interface ResultsProps {
  result: CalculationResult;
  county: string;
  acres: number;
  onReset: () => void;
}

const Results: React.FC<ResultsProps> = ({
  result,
  county,
  acres,
  onReset,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerRow}>
        <div>
          <h2 className={styles.title}>Your Land IQ Score</h2>
          <p className={styles.subtitle}>
            {acres} acres in {county} County
          </p>
        </div>
      </div>

      <h3 className={styles.sectionTitle}>Purchase Details</h3>
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Total Price</span>
          <span className={styles.statValue}>
            {formatCurrency(result.totalPrice)}
          </span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>
            Down Payment (
            {result.totalPrice > 0
              ? Math.round((result.downPayment / result.totalPrice) * 100)
              : 0}
            %)
          </span>
          <span className={styles.statValue}>
            {formatCurrency(result.downPayment)}
          </span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Estimated Closing Costs (3%)</span>
          <span className={styles.statValue}>
            {formatCurrency(result.closingCosts)}
          </span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Loan Amount</span>
          <span className={styles.statValue}>
            {formatCurrency(result.loanAmount)}
          </span>
        </div>
      </div>

      <div className={styles.monthlyCard}>
        <span className={styles.monthlyLabel}>Estimated Monthly Payment</span>
        <span className={styles.monthlyValue}>
          {formatCurrency(result.monthlyPayment)}/mo
        </span>
        <span className={styles.monthlyMeta}>
          at {result.interestRate}% APR for {result.loanTermYears} years
        </span>
      </div>

      <div className={styles.closingCard}>
        <span className={styles.closingLabel}>Total Due at Closing</span>
        <span className={styles.closingValue}>
          {formatCurrency(result.totalDueAtClosing)}
        </span>
      </div>

      {/* <div className={styles.breakdownSection}>
        <h3 className={styles.sectionTitle}>Savings Breakdown</h3>
        <div className={styles.breakdownGrid}>
          <div className={styles.breakdownItem}>
            <span className={styles.breakdownLabel}>Nutrient Deduction</span>
            <span className={styles.breakdownValue}>
              {formatCurrency(result.nutrientDeduction)}
            </span>
            <span className={styles.breakdownNote}>Fixed annual deduction</span>
          </div>
          <div className={styles.breakdownItem}>
            <span className={styles.breakdownLabel}>
              Est. Property Tax (10%)
            </span>
            <span className={styles.breakdownValue}>
              {formatCurrency(result.propertyTaxEstimate)}
            </span>
            <span className={styles.breakdownNote}>Annual estimate</span>
          </div>
        </div>
      </div> */}

      <div className={styles.savingsCard}>
        <span className={styles.savingsLabel}>
          Estimated Total Savings with Landzille
        </span>
        <span className={styles.savingsValue}>
          {formatCurrency(result.estimatedSavings)}
        </span>
      </div>

      <div className={styles.ctaSection}>
        <Link className={styles.primaryCta} href="/#land-listings">
          🔍 See Available Land That Fits Your Budget
        </Link>
        <Link className={styles.secondaryCta} href="/contact">
          📞 Book a Free Land Strategy Call
        </Link>
        <button className={styles.resetBtn} onClick={onReset}>
          ↩ Calculate Again
        </button>
      </div>
    </div>
  );
};

export default Results;
