// Last Text at One Percent — make.fun bounty u-azazex-last-text-at-one-percent-ba9fc876
// The last text a phone sends at 1% battery, in the dying phone's own voice.
// One line, 158 chars, valid UTF-8. Writes the text to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Battery 1%. I kept your boarding pass, your 6 a.m. alarm, and 4,000 photos you swore you'd back up — and I'm dying in a taxi with all of them still inside me.";

// Gate: the entry must be exactly one line of 1–200 UTF-8 characters.
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1–200 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
