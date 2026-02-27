import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const clientDir = path.join(rootDir, 'src', 'client');
const outputDir = path.join(rootDir, 'extension-player');

function simpleBundle(entryFile, outputFile) {
  console.log(`Bundling ${entryFile} -> ${outputFile}`);
  
  const code = fs.readFileSync(entryFile, 'utf-8');
  
  const wrappedCode = `(function(){
  'use strict';
  ${code}
})();`;
  
  fs.writeFileSync(outputFile, wrappedCode, 'utf-8');
  console.log(`✓ Bundled: ${outputFile}`);
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

simpleBundle(
  path.join(clientDir, 'playerscript.js'),
  path.join(outputDir, 'playerscript.bundle.js')
);

simpleBundle(
  path.join(clientDir, 'radar.js'),
  path.join(outputDir, 'radar.bundle.js')
);

console.log('\n✓ Build completado!');
