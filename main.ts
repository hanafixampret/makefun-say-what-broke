import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Connection timed out after 30 seconds. The database heard your request, thought about it, and said nothing. Try again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

const roundTrip = readFileSync(outPath, "utf8");
if (roundTrip !== ENTRY) throw new Error("round-trip mismatch");
if (ENTRY.trim().length === 0) throw new Error("entry must not be blank");
if (ENTRY.length < 1 || ENTRY.length > 200)
  throw new Error("entry must be 1-200 characters");
if (ENTRY.includes("\n")) throw new Error("entry must be a single line");
console.log(`wrote ${ENTRY.length} characters to ${outPath}`);
