import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type CategoryProps = {
  categoriesWithImages: any;
  expandedCategories: Set<string>;
  toggleCategory: (categorySlug: string) => void;
};

export const Categories = ({ categoriesWithImages, expandedCategories, toggleCategory }: CategoryProps) => {
  return  <div className="w-full">
              {/* Left: vertical categories */}
              <aside className="md:col-span-3">
                <div className="border rounded-lg h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  <div className="p-2 divide-y pb-4">
                    {categoriesWithImages.map((category: any) => ( // Todo create a Type for Category
                    <div key={category.slug}>
                      <div
                        onClick={() => toggleCategory(category.slug)}
                        className="flex items-center justify-between px-3 py-2 text-sm hover:bg-accent rounded-md cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          {/* {category.image && (
                            <Image
                              src={category.image}
                              alt={category.title}
                              width={20}
                              height={20}
                              className="rounded"
                            />
                          )} */}
                          <span>{category.title}</span>
                        </div>
                        {category.subcategories && category.subcategories.length > 0 ? (
                          expandedCategories.has(category.slug) ? (
                            <ChevronDown className="size-4 text-muted-foreground" />
                          ) : (
                            <ChevronRight className="size-4 text-muted-foreground" />
                          )
                        ) : (
                          <ChevronRight className="size-4 text-muted-foreground" />
                        )}
                      </div>
                      {expandedCategories.has(category.slug) && category.subcategories && (
                        <div className="ml-4 mt-1 space-y-1">
                          {category.subcategories.map((subcategory) => (
                            <Link
                              key={subcategory.slug}
                              href={subcategory.href || `/categories/${category.slug}/${subcategory.slug}`}
                              className="flex items-center gap-2 px-3 py-1 text-xs text-muted-foreground hover:bg-accent rounded-md"
                            >
                              {/* {'image' in subcategory && subcategory.image && (
                                <Image
                                  src={subcategory.image}
                                  alt={subcategory.title}
                                  width={16}
                                  height={16}
                                  className="rounded"
                                />
                              )} */}
                              <span>{subcategory.title}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  </div>
                </div>
              </aside>
          </div>
}