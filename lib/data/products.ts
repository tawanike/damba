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
      "https://picsum.photos/seed/p-wood-chair/1200/900",
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
      "https://picsum.photos/seed/p-linen-sofa/1200/900",
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
      "https://picsum.photos/seed/p-desk-lamp/1200/900",
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
      "https://picsum.photos/seed/p-coffee-grinder/1200/900",
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
      "https://picsum.photos/seed/p-wireless-headphones/1200/900",
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
      "https://picsum.photos/seed/p-running-shoes/1200/900",
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
      "https://picsum.photos/seed/p-cast-iron-skillet/1200/900",
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
      "https://picsum.photos/seed/p-plant-bundle/1200/900",
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
