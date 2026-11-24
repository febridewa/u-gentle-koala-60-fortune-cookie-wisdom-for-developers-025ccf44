// Fortune Cookie Wisdom for Developers — u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44
// Writes one original fortune-cookie line for a software developer to /output/entry.txt.
// The line: deleting code is the clearest writing — the dead code you cut today
// is the cleanest statement your codebase will ever make, and the quiet twist
// is that the best code you write is the code that no longer exists.
// Deterministic: the same fixed string on every run.
// One sentence, 67 characters — inside the gate's 1–120 character window.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The code you delete today is the clearest code you will ever write.";

// The gate only accepts 1–120 characters of non-whitespace UTF-8 text in a
// single line, so fail loudly instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 120 || LINE.trim() !== LINE || LINE.includes("\n")) {
  throw new Error(`Entry line is invalid (${LINE.length} chars): ${JSON.stringify(LINE)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
