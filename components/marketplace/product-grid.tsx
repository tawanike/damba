"use client"

import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { ProductCard } from "./product-card"
import type { Product } from "@/lib/data/products"

type ProductGridProps = {
  products: Product[]
  query?: string
  category?: string
  onQueryChange?: (value: string) => void
  onCategoryChange?: (value: string) => void
  hideControls?: boolean
}

export function ProductGrid({ products, query: controlledQuery, category: controlledCategory, onQueryChange, onCategoryChange, hideControls = false }: ProductGridProps) {
  const [uncontrolledQuery, setUncontrolledQuery] = useState("")
  const [uncontrolledCategory, setUncontrolledCategory] = useState("All")

  const query = controlledQuery ?? uncontrolledQuery
  const category = controlledCategory ?? uncontrolledCategory

  const setQuery = onQueryChange ?? setUncontrolledQuery
  const setCategory = onCategoryChange ?? setUncontrolledCategory

  const categories = useMemo(() => ["All", ...Array.from(new Set(products.map(p => p.category)))], [products])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter(p => {
      const matchesQuery = !q || `${p.name} ${p.description} ${p.seller}`.toLowerCase().includes(q)
      const matchesCategory = category === "All" || p.category === category
      return matchesQuery && matchesCategory
    })
  }, [products, query, category])

  return (
    <div className="flex flex-col gap-4">
      {!hideControls && (
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <Input
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            className="border rounded-md h-9 px-3 bg-background"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((p, index) => (
          <ProductCard key={`${p.id}-${index}`} product={p} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-sm text-muted-foreground">No products found.</div>
        )}
      </div>
    </div>
  )
}
