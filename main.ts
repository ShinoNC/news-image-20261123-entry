// news-image-20261123 entry: ship the front page for Monday 23 November 2026.
//
// The image itself is composed offline and stored in this repo as
// entry.png (a 1024x1024 front page: 25 stories, 9 regions, every one
// dated Monday 23 November 2026). This program does exactly one thing:
// copy that file byte-for-byte into the output directory, so every run
// produces identical bytes.
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  rmSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

if (!existsSync(source)) {
  throw new Error(`shipped image missing: ${source}`);
}

// Create the output directory when it does not exist yet, then clear
// only its contents. The directory itself is never removed.
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

copyFileSync(source, join(outDir, "entry.png"));
