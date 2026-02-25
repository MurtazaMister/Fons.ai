import { ideator } from "./agents/ideator.js";
import { normalizer } from "./agents/normalizer.js";
import { verifier } from "./agents/verifier.js";

console.log(await ideator("What is the meaning of life?"));
console.log(await normalizer("What is the meaning of life?"));
console.log(await verifier("What is the meaning of life?"));