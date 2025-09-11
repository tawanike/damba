import { v4 as uuidv4 } from 'uuid';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Read the products file
const productsPath = join(process.cwd(), 'lib/data/products.ts');
let productsContent = readFileSync(productsPath, 'utf-8');

// Function to generate a new UUID
const generateId = () => `'${uuidv4()}'`;

// Replace all product IDs (e.g., "p1") with UUIDs
productsContent = productsContent.replace(/id: "(p\d+)"/g, (match, p1) => {
  return `id: ${generateId()}`;
});

// Replace all comment IDs (e.g., "c1") with UUIDs
productsContent = productsContent.replace(/id: "(c\d+)"/g, (match, p1) => {
  return `id: ${generateId()}`;
});

// Write the updated content to a new file
const outputPath = join(process.cwd(), 'lib/data/products.updated.ts');
writeFileSync(outputPath, productsContent, 'utf-8');

console.log(`✅ Successfully updated product IDs with UUIDs. Output written to: ${outputPath}`);
console.log('Please review the changes and rename the file to products.ts when ready.');
