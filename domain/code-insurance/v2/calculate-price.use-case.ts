import { CompanyDetails } from "../company-details.types.ts";
import { calculatePriceFactor } from "./lib/calculate-price-factor.ts";
import {
  calculateExternalApplicationPrice,
  calculateMicroservicesPrice,
} from "./lib/price-calculators.ts";

export const calculateInsurancePrice = (
  companyDetails: CompanyDetails
): number => {
  const prices = [
    calculateExternalApplicationPrice(companyDetails),
    calculateMicroservicesPrice(companyDetails),
  ];

  const fixedPrice = prices.reduce((total, price) => total + price, 0);

  const priceFactor = calculatePriceFactor(companyDetails);

  return fixedPrice * priceFactor;
};
