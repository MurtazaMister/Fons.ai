import { configuration } from "../../../ai/config.js";
import { SYSTEM_PROMPT } from "../prompts/ideator.js";

const client = configuration.ideator.client;
const model = configuration.ideator.model;

export const buildIdeatorInput = ({ imageB64, patchInstructions }) => {
    return {
        image_b64: imageB64,
        instructions: {
            apply_patch_instructions: !!(patchInstructions && patchInstructions.ops?.length),
            patch_instructions: patchInstructions || { ops: [] }
        }
    };
};

export async function ideator(prompt) {
    const response = await client.responses.create({
        model,
        instructions: SYSTEM_PROMPT,
        input: prompt
    });

    return response.output_text;
}