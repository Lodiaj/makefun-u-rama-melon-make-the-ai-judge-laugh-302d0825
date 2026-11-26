// Make the AI Judge Laugh — make.fun entry
// Writes one office-life joke to /output/entry.txt.
// The joke: the office printer only ever jams on urgent documents,
// so the punchline blames the printer for reading the file names.
// True observation (printers jam at the worst moment), surprising turn
// (the machine knows what is urgent), tight single line, original angle.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "Our printer only jams on urgent documents — I'm convinced it reads the file names.";

function validateLine(line: string): void {
  if (line.length < 1 || line.length > 199) {
    throw new Error(`entry must be 1-199 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line !== line.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validateLine(LINE);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, LINE, "utf8");
  console.log(`wrote ${LINE.length} characters to ${outPath}`);
}

main();
