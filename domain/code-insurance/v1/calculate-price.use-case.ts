import { CompanyDetails } from "../company-details.types.ts";
import {
  calculateDeveloperPrice,
  calculateExternalApplicationPrice,
  calculateKlocPrice,
  calculateMicroservicesPrice,
} from "./lib/price-calculators.ts";

export const calculateInsurancePrice = (
  companyDetails: CompanyDetails,
): number => {
  const prices = [
    calculateExternalApplicationPrice(companyDetails),
    calculateMicroservicesPrice(companyDetails),
    calculateKlocPrice(companyDetails),
    calculateDeveloperPrice(companyDetails),
  ];

  return prices.reduce((total, price) => total + price, 0);
};

const input = {
  "externalApplications": 5,
  "microservices": 10,
  "Kloc": 110,
  "developers": 5,
};

const testX = calculateInsurancePrice(input);

console.log({testX})
