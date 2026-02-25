import { configuration } from "../../../ai/config.js";
import { SYSTEM_PROMPT } from "../prompts/normalizer.js";

const client = configuration.normalizer.client;
const model = configuration.normalizer.model;

export async function normalizer(prompt) {
    const response = await client.responses.create({
        model,
        instructions: SYSTEM_PROMPT,
        input: prompt
    });

    return response.output_text;
}