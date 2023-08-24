import { CompanyDetails } from "../company-details.types.ts";
import {
  calculateDeveloperPrice,
  calculateExternalApplicationPrice,
  calculateKlocPrice,
  calculateMicroservicesPrice,
} from "./lib/price-calculators.ts";

export const calculateInsurancePrice = (
  companyDetails: CompanyDetails
): number => {
  const prices = [
    calculateExternalApplicationPrice(companyDetails),
    calculateMicroservicesPrice(companyDetails),
    calculateKlocPrice(companyDetails),
    calculateDeveloperPrice(companyDetails),
  ];

  return prices.reduce((total, price) => total + price, 0);
};
