import {
  pricingExternalApplicationsEngine,
  pricingMicroservicesEngine,
} from "../../pricing-engine/pricing-engines.ts";

export const prices = {
  externalApplications: 120,
  microservices: 60,
  Kloc: 0,
  developers: 0,
};

// I'm aware this is exactly the same than the v1 version
// but as changes would be expected in the future, I'm replicating it
// as a different price engine could be implemented
const calculateMicroservicesPrice = pricingMicroservicesEngine(prices);
const calculateExternalApplicationPrice = pricingExternalApplicationsEngine(
  prices,
);

export { calculateExternalApplicationPrice, calculateMicroservicesPrice };
