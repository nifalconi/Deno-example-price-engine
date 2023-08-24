import { CompanyDetails } from "../../company-details.types.ts";

enum DeveloperWorkload {
  Low = 10,
  Medium = 25,
}

const getPriceFactorFormula = (klocPerDeveloper: number): number => {
  if (klocPerDeveloper < DeveloperWorkload.Low) {
    return 1.0;
  }
  if (klocPerDeveloper <= DeveloperWorkload.Medium) {
    return klocPerDeveloper / 10;
  }
  return 2.5 + ((klocPerDeveloper - 25) / 5);
};

export const calculatePriceFactor = (
  { developers, Kloc }: CompanyDetails,
): number => {
  if (developers === 0) return 1.0;

  const klocPerDeveloper = Kloc / developers;
  return getPriceFactorFormula(klocPerDeveloper);
};
