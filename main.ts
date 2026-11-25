// main.ts — news-image-20261125 entry runner.
//
// Copies the pre-rendered front-page image (entry.png, rendered offline
// with PIL by gen_image.py, which is kept out of this repo) into the
// make.fun output directory so the harness can score it. Node 22,
// standard library only.
//
// Usage:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The output directory defaults to /output when MAKEFUN_OUTPUT_DIR is unset.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
console.log(`Copied entry.png to ${join(outDir, "entry.png")}`);
