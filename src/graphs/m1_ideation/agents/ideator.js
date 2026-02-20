import { configuration } from "../../../ai/config.js";
import { SYSTEM_PROMPT } from "../prompts/ideator.js";

const client = configuration.ideator.client;
const model = configuration.ideator.model;

export async function ideator(prompt) {
    const response = await client.responses.create({
        model,
        instructions: SYSTEM_PROMPT,
        input: prompt
    });

    return response.output_text;
}