import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SAMPLE_PRODUCTS, formatPrice } from "@/lib/data/products"
import { ThreeColumnShell } from "@/components/marketplace/layout-controls"

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = SAMPLE_PRODUCTS.find(p => p.id === id)
  if (!product) return notFound()

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
        </div>
      }
      center={
        <div className="w-full max-w-full p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3] rounded-md overflow-hidden">
            <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <div className="text-muted-foreground text-sm">Sold by {product.seller} · {product.category}</div>
            <div className="text-3xl font-semibold">{formatPrice(product.priceCents, product.currency)}</div>
            <p className="text-sm leading-6">{product.description}</p>
            <div className="flex gap-3 pt-2">
              <Button disabled>Add to Cart</Button>
              <Button variant="outline" asChild>
                <Link href="/products">Back to Products</Link>
              </Button>
            </div>
          </div>
        </div>
      }
      right={
        <div className="sticky top-20 space-y-4">
          <h2 className="text-sm font-semibold">AI Shopping Assistant</h2>
          <div className="border rounded-md p-3 text-sm text-muted-foreground">Chat UI coming soon.</div>
          <div>
            <h3 className="text-sm font-semibold mb-2">You may also like</h3>
            <div className="grid grid-cols-2 gap-3">
              {SAMPLE_PRODUCTS.filter(p => p.id !== product.id).slice(0, 4).map(p => (
                <Card key={p.id}>
                  <Link href={`/products/${p.id}`}>
                    <div className="relative aspect-[4/3] rounded-t-md overflow-hidden">
                      <Image src={p.imageUrl} alt={p.name} fill className="object-cover" />
                    </div>
                  </Link>
                  <CardContent className="p-2 text-xs">
                    <div className="font-medium line-clamp-1">{p.name}</div>
                    <div className="text-muted-foreground">{formatPrice(p.priceCents, p.currency)}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      }
    />
  )
}
