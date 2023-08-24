import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { calculateInsurancePrice as calculateInsurancePriceV2 } from "../domain/code-insurance/v2/calculate-price.use-case.ts";
import { calculateInsurancePrice as calculateInsurancePriceV1 } from "../domain/code-insurance/v1/calculate-price.use-case.ts";

// This are not proper tests, but just a way to show how to use the code
Deno.test("[V1]: calculateInsurancePrice should return correct price", () => {
  const input = {
    externalApplications: 5,
    microservices: 10,
    Kloc: 110,
    developers: 5,
  };

  const result = calculateInsurancePriceV1(input);

  const expectedValue = 2050;

  assertEquals(
    result,
    expectedValue,
    `Expected ${expectedValue} but got ${result}`
  );
});

Deno.test("[V2]: calculateInsurancePrice should return correct price", () => {
  const input = {
    externalApplications: 5,
    microservices: 10,
    Kloc: 110,
    developers: 5,
  };

  const result = calculateInsurancePriceV2(input);

  const expectedValue = 2640;
  assertEquals(
    result,
    expectedValue,
    `Expected ${expectedValue} but got ${result}`
  );
});
