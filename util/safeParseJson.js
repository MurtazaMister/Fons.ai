export const safeParseJson = (maybeJsonText) => {
  try {
    return JSON.parse(maybeJsonText);
  } catch (e) {
    // Try to extract the first {...} block
    const start = maybeJsonText.indexOf("{");
    const end = maybeJsonText.lastIndexOf("}");
    if (start !== -1 && end !== -1 && end > start) {
      const sliced = maybeJsonText.slice(start, end + 1);
      try {
        return JSON.parse(sliced);
      } catch (e) {
        // Fall through
      }
    }
  }
  throw new Error("Failed to parse model output as JSON");
}