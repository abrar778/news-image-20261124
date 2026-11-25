// Copies entry.png to MAKEFUN_OUTPUT_DIR (default /output) and writes .makefun/owner.json to repo root
import { copyFileSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const entrySrc = join(import.meta.dirname, 'entry.png');
const entryDst = join(outputDir, 'entry.png');

mkdirSync(outputDir, { recursive: true });
copyFileSync(entrySrc, entryDst);

const repoRoot = import.meta.dirname;
const makefunDir = join(repoRoot, '.makefun');
mkdirSync(makefunDir, { recursive: true });
writeFileSync(join(makefunDir, 'owner.json'), '{"wallet": "HLjqMvPWuKdRESPj6fFAp6yjGruoagxL7p5QvM75cVWZ"}');