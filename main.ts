// One Letter for Your Day — entry program.
//
// Writes exactly one character, the letter U, to /output/entry.txt.
// No newline, no word, no punctuation: one byte, as the gate requires.
import { mkdirSync, writeFileSync } from "node:fs";

const LETTER = "U";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");
