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
import { Categories } from "@/components/layout/Sidebar/Categories";

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
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
            <Link href="/dashboard" className="hover:text-foreground">Dashboard</Link>
          </div>
        </div>
      </header>

      {/* Hero area */}
      <section className="flex w-screen mx-auto px-8 py-4  min-h-screen">
        {/* Categories Sidebar */}
        <div className="w-80 flex-shrink-0">
          <Categories
            categoriesWithImages={categoriesWithImages}
            expandedCategories={expandedCategories}
            toggleCategory={toggleCategory} />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 ml-6">
          {/* Main Banner */}
          <div className="w-full h-80 mb-6 flex flex-col items-center justify-center gap-4 relative">
            <div className="w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1926&q=80"
                alt="Global marketplace"
                layout="fill"
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <div className="w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent rounded-lg" />
              <div className="absolute left-6 bottom-6 right-6 text-white">
                <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-2">
                  Discover Amazing Products
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-4 max-w-lg">
                  Connect with trusted suppliers worldwide and find exactly what you need
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/products" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                    Shop Now
                    <ChevronRight className="ml-2 size-4" />
                  </Link>
                  <Link href="/search" className="bg-white/10 backdrop-blur border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors inline-flex items-center justify-center">
                    Browse Categories
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Stats and Second Banner Row */}
          <div className="grid grid-cols-2 gap-6">
            {/* Stats Section */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Stats</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Total Products:</span>
                  <span className="font-semibold">1,234,567</span>
                </div>
                <div className="flex justify-between">
                  <span>Active Suppliers:</span>
                  <span className="font-semibold">89,012</span>
                </div>
                <div className="flex justify-between">
                  <span>Countries:</span>
                  <span className="font-semibold">195</span>
                </div>
              </div>
            </div>

            {/* Second Banner */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Premium Services</h3>
                <p className="text-blue-100 mb-4">Get verified supplier status and premium placement</p>
                <Link href="/premium" className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center">
                  Learn More
                  <ChevronRight className="ml-2 size-4" />
                </Link>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 translate-x-12"></div>
            </div>
          </div>
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
