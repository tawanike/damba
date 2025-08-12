import { ProductGrid } from "@/components/marketplace/product-grid"
import { SAMPLE_PRODUCTS } from "@/lib/data/products"
import { ThreeColumnShell } from "@/components/marketplace/layout-controls"

export default function ProductsPage() {
  return (
    <ThreeColumnShell
      left={
        <div className="sticky top-20 space-y-4">
          <h2 className="text-sm font-semibold">Categories</h2>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {["All", "Furniture", "Lighting", "Appliances", "Electronics", "Sports", "Kitchen", "Home & Garden"].map(c => (
              <li key={c}><button className="hover:underline">{c}</button></li>
            ))}
          </ul>
          <h2 className="text-sm font-semibold pt-4">Filters</h2>
          <div className="space-y-2 text-sm text-muted-foreground">
            <label className="flex items-center gap-2"><input type="checkbox" /> In stock</label>
            <label className="flex items-center gap-2"><input type="checkbox" /> Free shipping</label>
            <label className="flex items-center gap-2"><input type="checkbox" /> On sale</label>
          </div>
        </div>
      }
      center={
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold">Discover Products</h1>
          <ProductGrid products={SAMPLE_PRODUCTS} />
        </div>
      }
      right={
        <div className="sticky top-20 space-y-4">
          <h2 className="text-sm font-semibold">AI Shopping Assistant</h2>
          <p className="text-sm text-muted-foreground">Ask for recommendations, comparisons, or help finding the right product.</p>
          <div className="border rounded-md p-3 text-sm text-muted-foreground">Chat UI coming soon.</div>
        </div>
      }
    />
  )
}
