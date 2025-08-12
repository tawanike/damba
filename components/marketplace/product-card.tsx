"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/data/products"
import { formatPrice } from "@/lib/data/products"

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[4/3]">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={false}
          />
        </div>
      </Link>
      <CardHeader className="pb-0">
        <CardTitle className="text-base leading-tight line-clamp-2">
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between gap-2 py-4">
        <div>
          <div className="text-lg font-semibold">{formatPrice(product.priceCents, product.currency)}</div>
          <div className="text-xs text-muted-foreground">{product.seller}</div>
        </div>
        <Button size="sm" asChild>
          <Link href={`/products/${product.id}`}>View</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
