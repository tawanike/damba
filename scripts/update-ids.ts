// @ts-ignore: Allow regex flag 's' for ES2018+
import { v4 as uuidv4 } from 'uuid';
// Import the file content as a string to avoid TypeScript compilation issues
import { readFileSync } from 'fs';
import { join } from 'path';

// Read the products file as a string to avoid TypeScript compilation issues
const productsFile = readFileSync(join(process.cwd(), 'lib/data/products.ts'), 'utf-8');

// Extract the SAMPLE_PRODUCTS array using a simple regex
const productsMatch = productsFile.match(/export const SAMPLE_PRODUCTS = (\[[\s\S]*?\]);/);
if (!productsMatch) {
  console.error('Could not find SAMPLE_PRODUCTS in products.ts');
  process.exit(1);
}

// Use Function constructor to safely evaluate the array
const SAMPLE_PRODUCTS = new Function(`return ${productsMatch[1]}`)();
import { writeFileSync } from 'fs';

// Function to generate a new UUID
const generateId = () => uuidv4();

// Create a map to store old IDs to new UUIDs
const idMap = new Map<string, string>();

// Function to get or create a UUID for a given ID
const getOrCreateId = (oldId: string): string => {
  if (!idMap.has(oldId)) {
    idMap.set(oldId, generateId());
  }
  return idMap.get(oldId)!;
};

// Update product IDs and related IDs
const updatedProducts = SAMPLE_PRODUCTS.map((product: any) => {
  // Create a new product with a UUID
  const updatedProduct = {
    ...product,
    id: getOrCreateId(product.id),
    comments: product.comments.map((comment: any) => ({
      ...comment,
      id: getOrCreateId(comment.id),
      user: {
        ...comment.user,
        id: getOrCreateId(comment.user.name) // Using name as the key since we don't have user IDs
      }
    }))
  };

  return updatedProduct;
});

// Generate the TypeScript file content
const fileContent = `// This file is auto-generated. Do not edit manually.
// Run 'npm run update-ids' to regenerate this file.

export const SAMPLE_PRODUCTS = ${JSON.stringify(updatedProducts, null, 2)} as const;
`;

// Write the updated products to a new file
const outputPath = join(process.cwd(), 'lib/data/products.updated.ts');
writeFileSync(outputPath, fileContent, 'utf-8');

console.log(`✅ Successfully updated product IDs with UUIDs. Output written to: ${outputPath}`);
console.log('Please review the changes and rename the file to products.ts when ready.');
