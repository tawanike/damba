"use client";

import Link from "next/link";
import Image from "next/image";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/marketplace/product-grid";
import { SAMPLE_PRODUCTS } from "@/lib/data/products";
import { hasEnvVars } from "@/lib/utils";
import { ShoppingCart, User, Search, ChevronRight, ChevronDown } from "lucide-react";
import categoriesData from "@/categories.json";
import { useState } from "react";

export default function Home() {
  const featured = SAMPLE_PRODUCTS.slice(0, 8)
  const all = SAMPLE_PRODUCTS

  // State for expandable categories
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set())
  const [categoriesWithImages] = useState(categoriesData.categories)

  const toggleCategory = (categorySlug: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(categorySlug)) {
      newExpanded.delete(categorySlug)
    } else {
      newExpanded.add(categorySlug)
    }
    setExpandedCategories(newExpanded)
  }

  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-background">
      {/* Sticky top header (Alibaba-style) */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto w-full max-w-screen-2xl px-4">
          <div className="flex h-16 items-center gap-4">
            <Link href="/" className="text-2xl font-extrabold tracking-tight">
              Commace
            </Link>
            <form action="/search" className="ml-4 hidden md:flex flex-1 items-center gap-2">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input name="q" placeholder="Search products, suppliers and more" className="pl-10" />
              </div>
              <Button type="submit" className="whitespace-nowrap">Search</Button>
            </form>
            <div className="ml-auto flex items-center gap-3 text-sm">
              {hasEnvVars ? (
                <AuthButton />
              ) : (
                <Link href="/auth/signin" className="inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent">
                  <User className="size-4" />
                  Sign in
                </Link>
              )}
              <Link href="/products" className="inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent">
                <ShoppingCart className="size-4" />
                Cart
              </Link>
              <ThemeSwitcher />
            </div>
          </div>
          {/* Secondary nav */}
          <div className="hidden md:flex h-10 items-center gap-6 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">All Categories</span>
            <Link href="/products" className="hover:text-foreground">Products</Link>
            <Link href="/search" className="hover:text-foreground">Search</Link>
            <Link href="/protected" className="hover:text-foreground">Account</Link>
          </div>
        </div>
      </header>

      {/* Hero area */}
      <section className="mx-auto w-full max-w-screen-2xl px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Left: vertical categories */}
          <aside className="md:col-span-3">
            <div className="border rounded-lg p-2 divide-y">
              {categoriesWithImages.map((category) => (
                <div key={category.slug}>
                  <div
                    onClick={() => toggleCategory(category.slug)}
                    className="flex items-center justify-between px-3 py-2 text-sm hover:bg-accent rounded-md cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      {category.image && (
                        <Image
                          src={category.image}
                          alt={category.title}
                          width={20}
                          height={20}
                          className="rounded"
                        />
                      )}
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
                          {'image' in subcategory && subcategory.image && (
                            <Image
                              src={subcategory.image}
                              alt={subcategory.title}
                              width={16}
                              height={16}
                              className="rounded"
                            />
                          )}
                          <span>{subcategory.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </aside>
          {/* Center: big banner */}
          <div className="md:col-span-6">
            <div className="relative aspect-[16/7] w-full overflow-hidden rounded-lg">
              <Image
                src="https://picsum.photos/seed/alibaba-hero/1600/700"
                alt="Global trade made easy"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute left-6 top-6 text-white max-w-md">
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">Source products from trusted sellers worldwide</h2>
                <p className="mt-2 text-sm md:text-base text-white/90">Discover millions of items across categories with competitive pricing.</p>
                <div className="mt-4 hidden md:flex gap-2">
                  <Link href="/products" className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium">Explore Now</Link>
                  <Link href="/search" className="bg-white/20 backdrop-blur px-4 py-2 rounded-md text-sm font-medium">Start searching</Link>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="relative aspect-[16/7] overflow-hidden rounded-lg">
                <Image
                  src="https://picsum.photos/seed/alibaba-deal-1/1200/525"
                  alt="Seasonal deals"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
              <div className="relative aspect-[16/7] overflow-hidden rounded-lg">
                <Image
                  src="https://picsum.photos/seed/alibaba-deal-2/1200/525"
                  alt="New arrivals"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>
          </div>
          {/* Right: sign-in widget and small promos */}
          <aside className="md:col-span-3 flex flex-col gap-4">
            <div className="border rounded-lg p-4">
              <div className="text-sm text-muted-foreground">Welcome to</div>
              <div className="text-lg font-semibold">Commace</div>
              <div className="mt-3">
                {hasEnvVars ? (
                  <AuthButton />
                ) : (
                  <div className="flex gap-2">
                    <Link href="/auth/signup" className="flex-1 text-center bg-foreground text-background rounded-md py-2 text-sm font-medium">Join for free</Link>
                    <Link href="/auth/signin" className="flex-1 text-center border rounded-md py-2 text-sm font-medium">Sign in</Link>
                  </div>
                )}
              </div>
            </div>
            <div className="relative aspect-[16/12] overflow-hidden rounded-lg">
              <Image
                src="https://picsum.photos/seed/alibaba-right/1200/900"
                alt="Supplier showcase"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </aside>
        </div>
      </section>

      {/* Deals section */}
      <section className="mx-auto w-full max-w-screen-2xl px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Deals of the day</h3>
          <Link href="/products" className="text-sm text-muted-foreground hover:underline">View all</Link>
        </div>
        <ProductGrid products={featured.length ? featured : SAMPLE_PRODUCTS.slice(0,8)} hideControls />
      </section>

      {/* For you section */}
      <section className="mx-auto w-full max-w-screen-2xl px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Just for you</h3>
          <Link href="/products" className="text-sm text-muted-foreground hover:underline">See more</Link>
        </div>
        <ProductGrid products={all.length ? all : SAMPLE_PRODUCTS} hideControls />
      </section>

      <footer className="border-t">
        <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Commace.</span>
            <span>All rights reserved.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
