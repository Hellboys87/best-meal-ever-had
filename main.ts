import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence = "The rendang my grandmother simmered for hours — beef dark as coffee, smelling of toasted coconut — tasted best eaten by hand on her kitchen floor, and no restaurant has come close since.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
