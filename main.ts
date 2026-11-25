// honest-appliance-error-20261125 — the funniest honest appliance error.
// A rice cooker reports exactly what happened, in its own flat voice.
// Craft: dry wit, one pattern. Setup = error code + duration (14 hours).
// Tension = "Your rice is now a brick" (the consequence, visual, specific).
// Release = the machine reframes the disaster as faithful execution:
// it kept the rice warm; that was the deal. Success is the failure.
// 87 chars. Deterministic: no input, no randomness, no clock.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Error: keep-warm 14 hours. Your rice is now a brick. I kept it warm. That was the deal.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
