import { CountyData } from '../types/calculator';

export const NORTH_TEXAS_COUNTIES: CountyData[] = [
  { name: 'Tarrant', avgPricePerAcre: 243608 },
  { name: 'Collin', avgPricePerAcre: 177500 },
  { name: 'Rockwall', avgPricePerAcre: 125408 },
  { name: 'Denton', avgPricePerAcre: 107998 },
  { name: 'Ellis', avgPricePerAcre: 105112 },
  { name: 'Dallas', avgPricePerAcre: 57588 },
  { name: 'Cooke', avgPricePerAcre: 41724 },
  { name: 'Johnson', avgPricePerAcre: 80420 },
  { name: 'Grayson', avgPricePerAcre: 31356 },
  { name: 'Hood', avgPricePerAcre: 27987 },
  { name: 'Wise', avgPricePerAcre: 27955 },
  { name: 'Hunt', avgPricePerAcre: 27000 },
  { name: 'Kaufman', avgPricePerAcre: 25600 },
  { name: 'Fannin', avgPricePerAcre: 24768 },
  { name: 'Parker', avgPricePerAcre: 17918 },
];

export const INTEREST_RATE_OPTIONS = [7.5, 8.0, 8.5, 9.0];

export const DOWN_PAYMENT_OPTIONS = [10, 15, 20, 25];

export const LOAN_TERM_OPTIONS = [10, 15, 20, 30];

export const CLOSING_COST_PERCENT = 0.03;
export const NUTRIENT_DEDUCTION_FIXED = 1500;
export const PROPERTY_TAX_PERCENT = 0.10;

// Estimated savings = nutrient deduction + property tax savings representation
export const SAVINGS_PERCENT = 0.14; // ~14% of total price as estimated savings with Landzille
