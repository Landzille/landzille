import React, { useState } from "react";
import styles from "./Step1Form.module.css";
import { Step1FormData } from "../../types/calculator";
import {
  NORTH_TEXAS_COUNTIES,
  INTEREST_RATE_OPTIONS,
  DOWN_PAYMENT_OPTIONS,
  LOAN_TERM_OPTIONS,
} from "../../constants/data";

interface Step1FormProps {
  onSubmit: (data: Step1FormData) => void;
}

const Step1Form: React.FC<Step1FormProps> = ({ onSubmit }) => {
  const [acres, setAcres] = useState<string>("");
  const [county, setCounty] = useState<string>("");
  const [interestRate, setInterestRate] = useState<number>(7.5);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(25);
  const [loanTermYears, setLoanTermYears] = useState<number>(15);
  const [isFirstPurchase, setIsFirstPurchase] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleAcresChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAcres(e.target.value);
  };

  const handleAcresBlur = () => {
    if (acres === "") return;
    const parsed = parseFloat(acres);
    if (!isNaN(parsed) && parsed < 10) {
      setAcres("10");
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!acres || parseFloat(acres) < 10) {
      newErrors.acres = "Minimum of 10 acres required";
    }
    if (!county) {
      newErrors.county = "Please select a county";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({
      acres: parseFloat(acres),
      county,
      interestRate,
      downPaymentPercent,
      loanTermYears,
      isFirstPurchase,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h2 className={styles.title}>Tell Us About Your Land Investment</h2>

      <div className={styles.fieldFull}>
        <label className={styles.label} htmlFor="acres">
          Acres
        </label>
        <input
          id="acres"
          type="number"
          min="10"
          step="0.01"
          className={`${styles.input} ${errors.acres ? styles.inputError : ""}`}
          placeholder="Enter number of acres (min. 10)"
          value={acres}
          onChange={handleAcresChange}
          onBlur={handleAcresBlur}
        />
        {errors.acres && <span className={styles.error}>{errors.acres}</span>}
      </div>

      <div className={styles.fieldFull}>
        <label className={styles.label} htmlFor="county">
          County
        </label>
        <div className={styles.selectWrapper}>
          <select
            id="county"
            className={`${styles.select} ${
              errors.county ? styles.inputError : ""
            }`}
            value={county}
            onChange={(e) => setCounty(e.target.value)}
          >
            <option value="">Select a county</option>
            {NORTH_TEXAS_COUNTIES.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name} County — ${c.avgPricePerAcre.toLocaleString()}/acre avg
              </option>
            ))}
          </select>
          <span className={styles.chevron}>▾</span>
        </div>
        {errors.county && <span className={styles.error}>{errors.county}</span>}
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="interestRate">
            Interest Rate
          </label>
          <div className={styles.selectWrapper}>
            <select
              id="interestRate"
              className={styles.select}
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value))}
            >
              {INTEREST_RATE_OPTIONS.map((rate) => (
                <option key={rate} value={rate}>
                  {rate}%
                </option>
              ))}
            </select>
            <span className={styles.chevron}>▾</span>
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="downPayment">
            Down Payment
          </label>
          <div className={styles.selectWrapper}>
            <select
              id="downPayment"
              className={styles.select}
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(parseInt(e.target.value))}
            >
              {DOWN_PAYMENT_OPTIONS.map((pct) => (
                <option key={pct} value={pct}>
                  {pct}%
                </option>
              ))}
            </select>
            <span className={styles.chevron}>▾</span>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="loanTerm">
            Loan Term
          </label>
          <div className={styles.selectWrapper}>
            <select
              id="loanTerm"
              className={styles.select}
              value={loanTermYears}
              onChange={(e) => setLoanTermYears(parseInt(e.target.value))}
            >
              {LOAN_TERM_OPTIONS.map((term) => (
                <option key={term} value={term}>
                  {term} years
                </option>
              ))}
            </select>
            <span className={styles.chevron}>▾</span>
          </div>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Closing Cost</label>
          <div className={styles.fixedBadge}>3% (Fixed)</div>
        </div>
      </div>

      <div className={styles.checkboxRow}>
        <input
          type="checkbox"
          id="firstPurchase"
          className={styles.checkbox}
          checked={isFirstPurchase}
          onChange={(e) => setIsFirstPurchase(e.target.checked)}
        />
        <label htmlFor="firstPurchase" className={styles.checkboxLabel}>
          This is my first land purchase
        </label>
      </div>

      <button type="submit" className={styles.submitBtn}>
        Calculate My Savings →
      </button>
    </form>
  );
};

export default Step1Form;
