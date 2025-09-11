"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/data/products"
import { formatPrice } from "@/lib/data/products"

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative">
        <Link href={`/products/${product.id}`}>
          <div className="relative aspect-[4/3]">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform group-hover:scale-105"
              priority={false}
            />
          </div>
        </Link>
        {product.onSale && (
          <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
            Sale
          </Badge>
        )}
      </div>
      <CardHeader className="pb-0">
        <CardTitle className="text-base leading-tight line-clamp-2">
          <Link href={`/products/${product.id}`} className="hover:underline">
            {product.name}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="py-4 space-y-3">
        <div className="text-sm text-muted-foreground">
          Sold by {product.seller?.name || 'Unknown Seller'}
        </div>
        <div className="flex items-baseline gap-2">
          {product.onSale ? (
            <>
              <span className="text-lg font-semibold text-red-500">
                {formatPrice(product.salePriceCents, product.currency)}
              </span>
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.priceCents, product.currency)}
              </span>
            </>
          ) : (
            <span className="text-lg font-semibold">
              {formatPrice(product.priceCents, product.currency)}
            </span>
          )}
        </div>
        <Button size="sm" className="w-full mt-2" asChild>
          <Link href={`/products/${product.id}`}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
