import { Step1FormData, CalculationResult } from '../types/calculator';
import {
  CLOSING_COST_PERCENT,
  NUTRIENT_DEDUCTION_FIXED,
  PROPERTY_TAX_PERCENT,
  SAVINGS_PERCENT,
  NORTH_TEXAS_COUNTIES,
} from '../constants/data';

export function calculateResults(formData: Step1FormData): CalculationResult {
  const county = NORTH_TEXAS_COUNTIES.find((c) => c.name === formData.county);
  const pricePerAcre = county?.avgPricePerAcre ?? 0;

  const totalPrice = formData.acres * pricePerAcre;
  const downPayment = totalPrice * (formData.downPaymentPercent / 100);
  const closingCosts = totalPrice * CLOSING_COST_PERCENT;
  const loanAmount = totalPrice - downPayment;
  const monthlyPayment = calculateMonthlyPayment(
    loanAmount,
    formData.interestRate / 100,
    formData.loanTermYears
  );
  const totalDueAtClosing = downPayment + closingCosts;
  const nutrientDeduction = NUTRIENT_DEDUCTION_FIXED;
  const propertyTaxEstimate = totalPrice * PROPERTY_TAX_PERCENT;
  const estimatedSavings = Math.round(totalPrice * SAVINGS_PERCENT);

  return {
    totalPrice,
    downPayment,
    closingCosts,
    loanAmount,
    monthlyPayment,
    totalDueAtClosing,
    estimatedSavings,
    nutrientDeduction,
    propertyTaxEstimate,
    interestRate: formData.interestRate,
    loanTermYears: formData.loanTermYears,
  };
}

function calculateMonthlyPayment(
  principal: number,
  annualRate: number,
  years: number
): number {
  const monthlyRate = annualRate / 12;
  const numPayments = years * 12;
  if (monthlyRate === 0) return principal / numPayments;
  const payment =
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
    (Math.pow(1 + monthlyRate, numPayments) - 1);
  return Math.round(payment);
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}
