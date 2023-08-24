interface PricingVariables {
  externalApplications: number;
  microservices: number;
  Kloc: number;
  developers: number;
}

const PricingMatch = {
  externalApplications: 100,
  microservices: 50,
  Kloc: 5,
  developers: 100,
};

const PricingMatch2 = {
  externalApplications: 120,
  microservices: 60,
  Kloc: 0,
  developers: 0,
};

type PricingMatch = typeof PricingMatch;

const createCalculationFunction =
  <Property extends keyof PricingMatch>(property: Property) =>
  (pricing: Record<Property, number>) =>
  (input: Record<Property, number>): number =>
    pricing[property] * input[property];

const calculateExternalApplication = createCalculationFunction("externalApplications")
const calculateMicroservices = createCalculationFunction("microservices")
const calculateKloc = createCalculationFunction("Kloc")
const calculateDeveloper = createCalculationFunction('developers')

const calculateCodingPriceEngine = (
  pricingVariables: PricingVariables,
): number => {
  const externalApplicationsPrice = calculateExternalApplication(PricingMatch)(
    pricingVariables,
  );
  const microservicesPrice = calculateMicroservices(PricingMatch)(
    pricingVariables,
  );
  const KlocPrice = calculateKloc(PricingMatch)(pricingVariables);
  const developersPrice = calculateDeveloper(PricingMatch)(pricingVariables)

  return externalApplicationsPrice + microservicesPrice + KlocPrice +
    developersPrice;
};

const calculatePriceFactor = (
  { developers, Kloc }: PricingVariables,
): number => {
  if (developers === 0) return 1.0;

  const KlocPerDeveloper = Kloc / developers;

  if (KlocPerDeveloper < 10) return 1.0;
  if (KlocPerDeveloper <= 25) return KlocPerDeveloper / 10;

  return 2.5 + ((KlocPerDeveloper - 25) / 5);
};

const calculateCodingPriceEngineV2 = (
  pricingVariables: PricingVariables,
): number => {
  const externalApplicationsPrice = calculateExternalApplication(PricingMatch2)(
    pricingVariables,
  );
  const microservicesPrice = calculateMicroservices(PricingMatch2)(
    pricingVariables,
  );

  const fixedPrice = externalApplicationsPrice + microservicesPrice;

  const priceFactor = calculatePriceFactor(pricingVariables);

  return fixedPrice * priceFactor;
};

const input: PricingVariables = {
  "externalApplications": 5,
  "microservices": 10,
  "Kloc": 110,
  "developers": 5,
};

const version1 = calculateCodingPriceEngine(input);
const version2 = calculateCodingPriceEngineV2(input);

console.log({version1})
console.log({version2})

