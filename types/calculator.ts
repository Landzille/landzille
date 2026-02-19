export interface CountyData {
  name: string;
  avgPricePerAcre: number;
}

export interface Step1FormData {
  acres: number;
  county: string;
  interestRate: number;
  downPaymentPercent: number;
  loanTermYears: number;
  isFirstPurchase: boolean;
}

export interface Step2FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface CalculationResult {
  totalPrice: number;
  downPayment: number;
  closingCosts: number;
  loanAmount: number;
  monthlyPayment: number;
  totalDueAtClosing: number;
  estimatedSavings: number;
  nutrientDeduction: number;
  propertyTaxEstimate: number;
  interestRate: number;
  loanTermYears: number;
}
