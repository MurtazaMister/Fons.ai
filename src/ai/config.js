import { openai } from "./adapters/openai.js";

export const configuration = {
    "ideator": {
        "client": openai,
        "model": "gpt-5.2"
    },
    "normalizer": {
        "client": openai,
        "model": "gpt-5-mini"
    },
    "verifier": {
        "client": openai,
        "model": "o3"
    }
};