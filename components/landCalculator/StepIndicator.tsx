import React from "react";
import styles from "./StepIndicator.module.css";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>
        {currentStep} of {totalSteps} steps
      </p>
      <div className={styles.track}>
        {Array.from({ length: totalSteps }, (_, i) => {
          const step = i + 1;
          const isCompleted = step < currentStep;
          const isActive = step === currentStep;
          return (
            <React.Fragment key={step}>
              <div
                className={`${styles.circle} ${
                  isCompleted ? styles.completed : ""
                } ${isActive ? styles.active : ""}`}
              >
                {step}
              </div>
              {step < totalSteps && (
                <div
                  className={`${styles.line} ${
                    isCompleted ? styles.lineCompleted : ""
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;
