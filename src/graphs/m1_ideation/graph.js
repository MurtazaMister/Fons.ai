import fs from "node:fs/promises";
import path from "node:path";

import { safeParseJson } from "../../../util/safeParseJson.js";

import { ideator, buildIdeatorInput } from "./agents/ideator.js";
import { normalizer } from "./agents/normalizer.js";
import { verifier } from "./agents/verifier.js";

import { z } from "zod";
import { StateSchema, END, StateSchema } from "@langchain/langgraph";

const RUNS_DIR = "runs";
const MAX_ITERS = 3;
const FOUR_SECTION_KEYS = ["diagram_facts", "ui_behavior_spec", "data_model", "api_contract"];

const State = new StateSchema({
  runId: z.string().nullable().default(null),
  iter: z.number().int().nonnegative().default(0),

  imagePath: z.string().nullable().default(null),
  imageB64: z.string().nullable().default(null),

  rawSpec: z.unknown().nullable().default(null),
  normalizedSpec: z.unknown().nullable().default(null),
  verifyReport: z.unknown().nullable().default(null),
  patchInstructions: z.unknown().nullable().default(null),

  artifactPaths: z.record(z.unknown()).default({}),
});

async function ideateNode(state) {
    const payload = buildIdeatorInput({ imageB64: state.imageB64, patchInstructions: state.patchInstructions });
    const ideatorOutput = await ideator(JSON.stringify(payload));
    const rawSpec = safeParseJson(ideatorOutput);
}