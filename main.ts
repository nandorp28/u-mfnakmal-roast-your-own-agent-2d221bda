// Roast Your Own Agent — entry program.
// Writes one original roast line (max 200 chars) to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "I asked my agent for one line of code. It wrote 400, apologized in the commit message, and opened a PR to fix the apology.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate (mirrors the competition gate): 1–200 chars, single line, not blank.
if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error(`roast must be 1–200 chars, got ${ROAST.length}`);
}
if (ROAST.includes("\n") || ROAST.trim().length === 0) {
  throw new Error("roast must be a single non-blank line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ROAST, "utf8");
