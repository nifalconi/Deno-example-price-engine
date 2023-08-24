import {
  pricingDevelopersEngine,
  pricingExternalApplicationsEngine,
  pricingKlocEngine,
  pricingMicroservicesEngine,
} from "../../pricing-engine/pricing-engines.ts";

const prices = {
  externalApplications: 100,
  microservices: 50,
  Kloc: 5,
  developers: 100,
};

const calculateMicroservicesPrice = pricingMicroservicesEngine(prices);
const calculateKlocPrice = pricingKlocEngine(prices);
const calculateDeveloperPrice = pricingDevelopersEngine(prices);
const calculateExternalApplicationPrice = pricingExternalApplicationsEngine(
  prices,
);

export {
  calculateDeveloperPrice,
  calculateExternalApplicationPrice,
  calculateKlocPrice,
  calculateMicroservicesPrice,
};
