import { configuration } from "../../../ai/config.js";
import { SYSTEM_PROMPT } from "../prompts/verifier.js";

const client = configuration.verifier.client;
const model = configuration.verifier.model;

export async function verifier(prompt) {
    const response = await client.responses.create({
        model,
        instructions: SYSTEM_PROMPT,
        input: prompt
    });

    return response.output_text;
}