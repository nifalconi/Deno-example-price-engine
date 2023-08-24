import { CompanyDetails } from "../company-details.types.ts";

const createPricingEngine =
  <Property extends keyof CompanyDetails>(property: Property) =>
  (pricing: Record<Property, number>) =>
  (input: Record<Property, number>): number =>
    pricing[property] * input[property];

  
export const pricingExternalApplicationsEngine = createPricingEngine("externalApplications")
export const pricingMicroservicesEngine = createPricingEngine("microservices")
export const pricingKlocEngine = createPricingEngine("Kloc")
export const pricingDevelopersEngine = createPricingEngine('developers')
