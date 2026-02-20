import { openai } from "./adapters/openai.js";

export const configuration = {
    "ideator": {
        "client": openai,
        "model": "gpt-5.2"
    }
};