"use client"

import { useState } from "react"
import { ThreeColumnShell } from "@/components/marketplace/layout-controls"
import { ProductGrid } from "@/components/marketplace/product-grid"
import { Input } from "@/components/ui/input"
import { SAMPLE_PRODUCTS } from "@/lib/data/products"

export default function SearchPage() {
  const [query, setQuery] = useState("")

  return (
    <ThreeColumnShell
      left={
        <div className="sticky top-20 space-y-4">
          <h2 className="text-sm font-semibold">Filters</h2>
          <div className="space-y-2 text-sm text-muted-foreground">
            <label className="flex items-center gap-2"><input type="checkbox" /> In stock</label>
            <label className="flex items-center gap-2"><input type="checkbox" /> Free shipping</label>
            <label className="flex items-center gap-2"><input type="checkbox" /> On sale</label>
          </div>
        </div>
      }
      center={
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <Input placeholder="Search products..." value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
          <ProductGrid products={SAMPLE_PRODUCTS} query={query} onQueryChange={setQuery} hideControls />
        </div>
      }
      right={
        <div className="sticky top-20 space-y-4">
          <h2 className="text-sm font-semibold">AI Shopping Assistant</h2>
          <div className="border rounded-md p-3 text-sm text-muted-foreground">Chat UI coming soon.</div>
        </div>
      }
    />
  )
}
