// Copy the finished newspaper image to the make.fun output directory.
// The image lives next to this script; the output directory comes from
// MAKEFUN_OUTPUT_DIR and falls back to "/output" when it is not set.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(scriptDir, "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
copyFileSync(sourceImage, join(outputDir, "entry.png"));
console.log(`Wrote entry.png to ${outputDir}`);
