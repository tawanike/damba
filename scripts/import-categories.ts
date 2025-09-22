import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Function to generate slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim()
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

// Read the categories.json file
const categoriesPath = join(process.cwd(), 'categories.json');
const categoriesJson = readFileSync(categoriesPath, 'utf-8');

// Parse the JSON data
const categoriesData = JSON.parse(categoriesJson);

// Process categories and subcategories, keeping image fields and generating new slugs from titles
const processedData = {
  ...categoriesData,
  categories: categoriesData.categories.map((category: any) => {
    const processedCategory: any = {
      title: category.title,
      slug: generateSlug(category.title), // Generate slug from title
      subcategories: category.subcategories.map((sub: any) => {
        const processedSub: any = {
          title: sub.title,
          slug: generateSlug(sub.title), // Generate slug from title
          // href field is intentionally excluded
        };
        // Only include image if it exists
        if (sub.image) {
          processedSub.image = sub.image;
        }
        return processedSub;
      })
    };
    // Only include image if it exists
    if (category.image) {
      processedCategory.image = category.image;
    }
    return processedCategory;
  })
};

// Define types for better type safety
type Subcategory = {
  title: string;
  slug: string;
  image?: string;
};

type Category = {
  title: string;
  slug: string;
  image?: string;
  subcategories: Subcategory[];
};

type CategoriesData = {
  scrapedAt: string;
  categories: Category[];
};

// Generate the TypeScript file content
const fileContent = `// This file is auto-generated from categories.json
// Run 'npm run import-categories' to regenerate this file.
// Generated on: ${new Date().toISOString()}

export type Subcategory = {
  title: string;
  slug: string;
  image?: string;
};

export type Category = {
  title: string;
  slug: string;
  image?: string;
  subcategories: Subcategory[];
};

export type CategoriesData = {
  scrapedAt: string;
  categories: Category[];
};

export const CATEGORIES_DATA: CategoriesData = ${JSON.stringify(processedData, null, 2)};

// Helper functions for working with categories
export function getAllCategories(): Category[] {
  return CATEGORIES_DATA.categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES_DATA.categories.find(category => category.slug === slug);
}

export function getSubcategoryBySlug(categorySlug: string, subcategorySlug: string): Subcategory | undefined {
  const category = getCategoryBySlug(categorySlug);
  return category?.subcategories.find(sub => sub.slug === subcategorySlug);
}

export function getAllSubcategories(): Subcategory[] {
  return CATEGORIES_DATA.categories.flatMap(category => category.subcategories);
}

export function getSubcategoriesByCategory(categorySlug: string): Subcategory[] {
  const category = getCategoryBySlug(categorySlug);
  return category?.subcategories || [];
}

// Get all unique category slugs
export function getCategorySlugs(): string[] {
  return CATEGORIES_DATA.categories.map(category => category.slug);
}

// Get all unique subcategory slugs
export function getSubcategorySlugs(): string[] {
  return getAllSubcategories().map(sub => sub.slug);
}

// Search categories and subcategories by title
export function searchCategories(query: string): (Category | Subcategory)[] {
  const lowerQuery = query.toLowerCase();
  const results: (Category | Subcategory)[] = [];

  CATEGORIES_DATA.categories.forEach(category => {
    if (category.title.toLowerCase().includes(lowerQuery)) {
      results.push(category);
    }
    category.subcategories.forEach(subcategory => {
      if (subcategory.title.toLowerCase().includes(lowerQuery)) {
        results.push(subcategory);
      }
    });
  });

  return results;
}

// Get category hierarchy for navigation
export function getCategoryHierarchy(): Array<{
  category: Category;
  subcategories: Subcategory[];
}> {
  return CATEGORIES_DATA.categories.map(category => ({
    category,
    subcategories: category.subcategories
  }));
}

// Get flattened list of all category and subcategory combinations
export function getAllCategoryCombinations(): Array<{
  categoryTitle: string;
  categorySlug: string;
  subcategoryTitle: string;
  subcategorySlug: string;
}> {
  const combinations: Array<{
    categoryTitle: string;
    categorySlug: string;
    subcategoryTitle: string;
    subcategorySlug: string;
  }> = [];

  CATEGORIES_DATA.categories.forEach(category => {
    category.subcategories.forEach(subcategory => {
      combinations.push({
        categoryTitle: category.title,
        categorySlug: category.slug,
        subcategoryTitle: subcategory.title,
        subcategorySlug: subcategory.slug
      });
    });
  });

  return combinations;
}
`;

// Write the categories.ts file
const outputPath = join(process.cwd(), 'lib/data/categories.ts');
writeFileSync(outputPath, fileContent, 'utf-8');

console.log(`✅ Successfully imported categories from categories.json`);
console.log(`📁 Output written to: ${outputPath}`);
console.log(`📊 Imported ${(processedData as CategoriesData).categories.length} categories`);
console.log(`📈 Total subcategories: ${(processedData as CategoriesData).categories.reduce((total: number, cat: Category) => total + cat.subcategories.length, 0)}`);
console.log(`📅 Scraped at: ${(processedData as CategoriesData).scrapedAt}`);