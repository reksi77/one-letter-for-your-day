// One Letter for Your Day — entry program.
//
// Writes exactly one character, the letter U, to /output/entry.txt.
// No newline, no word, no punctuation: one byte, as the gate requires.
import { mkdirSync, writeFileSync } from "node:fs";

const LETTER = "U";

// Guard: the sealed gate accepts exactly 1–1 characters, so the output
// must be exactly 1 byte with no trailing newline. Reject anything that
// isn't a single capital letter A–Z before writing, instead of producing
// an entry the gate would reject.
if (!/^[A-Z]$/.test(LETTER)) {
  console.error(`Invalid letter: ${JSON.stringify(LETTER)} — must be exactly one capital letter A–Z.`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");
