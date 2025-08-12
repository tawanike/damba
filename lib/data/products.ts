export type Product = {
  id: string
  name: string
  description: string
  priceCents: number
  currency: string
  imageUrl: string
  category: string
  seller: string
}

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "p-wood-chair",
    name: "Solid Oak Chair",
    description:
      "Handcrafted solid oak dining chair with ergonomic backrest and durable finish.",
    priceCents: 12900,
    currency: "USD",
    imageUrl:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
    category: "Furniture",
    seller: "NordWood Studio",
  },
  {
    id: "p-linen-sofa",
    name: "Linen 3-Seater Sofa",
    description:
      "Minimalist 3-seater sofa with removable, washable linen covers and deep cushions.",
    priceCents: 89900,
    currency: "USD",
    imageUrl:
      "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1200&auto=format&fit=crop",
    category: "Furniture",
    seller: "Casa Verde",
  },
  {
    id: "p-desk-lamp",
    name: "Adjustable Desk Lamp",
    description:
      "Matte black aluminum task lamp with dimmable LED and articulated arm.",
    priceCents: 6900,
    currency: "USD",
    imageUrl:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
    category: "Lighting",
    seller: "Lightform",
  },
  {
    id: "p-coffee-grinder",
    name: "Burr Coffee Grinder",
    description:
      "Precision stainless steel burr grinder with 40 grind settings and timed dosing.",
    priceCents: 11900,
    currency: "USD",
    imageUrl:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
    category: "Appliances",
    seller: "Brewsmith",
  },
  {
    id: "p-wireless-headphones",
    name: "Wireless Noise-Canceling Headphones",
    description:
      "Over-ear ANC headphones with 30-hour battery life and low-latency mode.",
    priceCents: 17900,
    currency: "USD",
    imageUrl:
      "https://images.unsplash.com/photo-1518444006665-68bbe828ecd1?q=80&w=1200&auto=format&fit=crop",
    category: "Electronics",
    seller: "SonicWave",
  },
  {
    id: "p-running-shoes",
    name: "Carbon Plate Running Shoes",
    description:
      "Lightweight daily trainers with a responsive carbon plate and breathable mesh.",
    priceCents: 12900,
    currency: "USD",
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    category: "Sports",
    seller: "FleetFoot",
  },
  {
    id: "p-cast-iron-skillet",
    name: "Cast Iron Skillet 12\"",
    description:
      "Pre-seasoned cast iron skillet with helper handle for oven-to-table cooking.",
    priceCents: 5900,
    currency: "USD",
    imageUrl:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    category: "Kitchen",
    seller: "Forge & Flame",
  },
  {
    id: "p-plant-bundle",
    name: "Indoor Plant Bundle",
    description:
      "Set of 3 easy-care indoor plants with ceramic pots for bright, modern spaces.",
    priceCents: 7900,
    currency: "USD",
    imageUrl:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
    category: "Home & Garden",
    seller: "Green & Co.",
  },
]

export function formatPrice(priceCents: number, currency: string = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(priceCents / 100)
}
