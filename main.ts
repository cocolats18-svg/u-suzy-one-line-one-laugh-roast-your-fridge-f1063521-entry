import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Laugh: Roast Your Fridge
// Single-line fridge roast, 182 characters, written to /output/entry.txt.
const LINE =
  "My fridge hums all night like it's auditioning for a band, hoards leftovers older than my passwords, and still lets the ice cream melt — the only thing it keeps cold is its attitude.";

// The gate allows 1–200 characters; refuse to write an invalid entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, "utf8");
