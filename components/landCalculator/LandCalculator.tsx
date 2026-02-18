"use client";
import React, { useState } from "react";
import styles from "./LandCalculator.module.css";
import StepIndicator from "./StepIndicator";
import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";
import Results from "./Results";
import {
  Step1FormData,
  Step2FormData,
  CalculationResult,
} from "../../types/calculator";
import { calculateResults } from "../../utils/calculations";

const LandCalculator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [step1Data, setStep1Data] = useState<Step1FormData | null>(null);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleStep1Submit = (data: Step1FormData) => {
    setStep1Data(data);
    setCurrentStep(2);
  };

  const handleStep2Submit = (_data: Step2FormData) => {
    if (step1Data) {
      const calcResult = calculateResults(step1Data);
      setResult(calcResult);
      setCurrentStep(3);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setStep1Data(null);
    setResult(null);
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.heading}>What&apos;s Your Land IQ?</h1>
        <p className={styles.tagline}>
          See how much smarter your land investment could be with Landzille
        </p>
      </div>

      <div className={styles.card}>
        <StepIndicator currentStep={currentStep} totalSteps={3} />

        <div className={styles.content}>
          {currentStep === 1 && <Step1Form onSubmit={handleStep1Submit} />}
          {currentStep === 2 && <Step2Form onSubmit={handleStep2Submit} />}
          {currentStep === 3 && result && step1Data && (
            <Results
              result={result}
              county={step1Data.county}
              acres={step1Data.acres}
              onReset={handleReset}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LandCalculator;
