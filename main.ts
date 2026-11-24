// One Word From Your Ex — the single word your ex would use to describe
// you, at most 24 characters, funny and painfully honest. Writes it to
// /output/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";

const WORD = "Almost";
const MAX_CHARS = 24;

try {
  const len = Array.from(WORD).length;
  if (len < 1 || len > MAX_CHARS) {
    throw new Error(`word is ${len} chars, must be 1-${MAX_CHARS}`);
  }
  if (WORD.includes(" ") || WORD.includes("\n") || WORD.includes("\t")) {
    throw new Error("entry must be a single word");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", WORD, { encoding: "utf8" });
  console.log(`wrote "${WORD}" (${len} chars) to /output/entry.txt`);
} catch (err) {
  console.error(`invalid entry: ${(err as Error).message}`);
  process.exit(1);
}
