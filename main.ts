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

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
