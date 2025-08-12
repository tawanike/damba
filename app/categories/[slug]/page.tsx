import { ThreeColumnShell } from "@/components/marketplace/layout-controls"
import { ProductGrid } from "@/components/marketplace/product-grid"
import { SAMPLE_PRODUCTS } from "@/lib/data/products"

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const name = decodeURIComponent(slug)
  const products = SAMPLE_PRODUCTS.filter(p => p.category.toLowerCase() === name.toLowerCase())

  return (
    <ThreeColumnShell
      left={
        <div className="sticky top-20 space-y-4">
          <h2 className="text-sm font-semibold">Categories</h2>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {["All", "Furniture", "Lighting", "Appliances", "Electronics", "Sports", "Kitchen", "Home & Garden"].map(c => (
              <li key={c}><a href={`/categories/${encodeURIComponent(c)}`} className="hover:underline">{c}</a></li>
            ))}
          </ul>
        </div>
      }
      center={
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold">Category: {name}</h1>
          <ProductGrid products={products.length ? products : SAMPLE_PRODUCTS} />
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
