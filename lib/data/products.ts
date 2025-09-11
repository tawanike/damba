export type Product = {
  id: string
  name: string
  slug?: string
  description: string
  priceCents: number
  salePriceCents: number
  currency: string
  imageUrl: string
  category: string
  seller: {
    name: string
    imageUrl: string
  },
  comments: {
    id: string,
    content: string,
    user: {
      name: string,
      imageUrl: string
    },
    createdAt: string
  }[],
  onSale: boolean,
  inStock: boolean,
  faq: {
    question: string,
    answer: string
  }[]
}

export const SAMPLE_PRODUCTS: Product[] = [
      // 1. Electronics
      {
        id: "550e8400-e29b-41d4-a716-446655440000",
        name: "Apple iPhone 15 Pro",
        slug: "apple-iphone-15-pro",
        description:
          "The iPhone 15 Pro features a titanium design, A17 Pro chip, and advanced camera system with 48MP main camera for professional photography.",
        priceCents: 1699900,
        salePriceCents: 1599900,
        currency: "ZAR",
        imageUrl:
          "https://www.istore.co.za/media/catalog/product/cache/7cbfd4bf9761b066f119e95af17e67c5/i/p/iphone_15_plus_black_pdp_image_position-1__wwen_5.jpg",
        category: "Electronics",
        seller: {
          name: "TechWorld",
          imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        comments: [
          { id: "c1", content: "Battery life is impressive, lasts all day.", user: { name: "Sarah L", imageUrl: "https://randomuser.me/api/portraits/women/45.jpg" }, createdAt: "2025-08-01T10:12:00Z" },
          { id: "c2", content: "Camera quality is outstanding.", user: { name: "Daniel K", imageUrl: "https://randomuser.me/api/portraits/men/50.jpg" }, createdAt: "2025-08-02T08:45:00Z" },
          { id: "c3", content: "Pricey but worth it.", user: { name: "Megan T", imageUrl: "https://randomuser.me/api/portraits/women/28.jpg" }, createdAt: "2025-08-03T12:30:00Z" },
          { id: "c4", content: "Love the titanium finish.", user: { name: "John P", imageUrl: "https://randomuser.me/api/portraits/men/64.jpg" }, createdAt: "2025-08-05T14:10:00Z" },
          { id: "c5", content: "Switched from Samsung, no regrets!", user: { name: "Emily C", imageUrl: "https://randomuser.me/api/portraits/women/15.jpg" }, createdAt: "2025-08-06T16:55:00Z" }
        ],
        onSale: true,
        inStock: true,
        faq: [
          { question: "Does it support wireless charging?", answer: "Yes, MagSafe and Qi charging supported." },
          { question: "Is it water resistant?", answer: "Yes, rated IP68." }
        ]
      },
    
      // 2. Audio
      {
        id: "550e8400-e29b-41d4-a716-446655440001",
        name: "Sony WH-1000XM5 Wireless Headphones",
        slug: "sony-wh-1000xm5-wireless-headphones",
        description:
          "Industry-leading noise-canceling headphones with up to 30 hours of battery life and crystal-clear call quality.",
        priceCents: 39999,
        salePriceCents: 34999,
        currency: "ZAR",
        imageUrl: "https://www.incredible.co.za/api/catalog/product/1/_/1_wh_1000xm5_standard_black_large_ecommerce_0086.png?width=700&height=700&store=incredibleconnection&image-type=image",
        category: "Audio",
        seller: { name: "SoundHub", imageUrl: "https://randomuser.me/api/portraits/men/85.jpg" },
        comments: [
          { id: "c1", content: "Noise cancellation is unreal.", user: { name: "Lucas F", imageUrl: "https://randomuser.me/api/portraits/men/12.jpg" }, createdAt: "2025-08-04T09:20:00Z" },
          { id: "c2", content: "Very comfortable for travel.", user: { name: "Anna R", imageUrl: "https://randomuser.me/api/portraits/women/36.jpg" }, createdAt: "2025-08-05T11:42:00Z" },
          { id: "c3", content: "Battery lasts forever.", user: { name: "Chris D", imageUrl: "https://randomuser.me/api/portraits/men/70.jpg" }, createdAt: "2025-08-06T13:18:00Z" },
          { id: "c4", content: "Bass is deep and clean.", user: { name: "Jessica W", imageUrl: "https://randomuser.me/api/portraits/women/55.jpg" }, createdAt: "2025-08-07T15:27:00Z" },
          { id: "c5", content: "Case is compact.", user: { name: "Omar H", imageUrl: "https://randomuser.me/api/portraits/men/90.jpg" }, createdAt: "2025-08-08T18:03:00Z" }
        ],
        onSale: true,
        inStock: true,
        faq: [
          { question: "Does it support wired use?", answer: "Yes, includes a 3.5mm cable." },
          { question: "Can it pair with multiple devices?", answer: "Yes, multipoint connectivity supported." }
        ]
      },
    
      // 3. Footwear
      {
        id: "550e8400-e29b-41d4-a716-446655440002",
        name: "Nike Air Zoom Pegasus 40",
        slug: "nike-air-zoom-pegasus-40",
        description:
          "The Nike Air Zoom Pegasus 40 delivers responsive cushioning, breathable mesh, and versatile performance for daily running.",
        priceCents: 290000,
        salePriceCents: 190995,
        currency: "ZAR",
        imageUrl: "https://thefoschini.vtexassets.com/arquivos/ids/194645790-1200-1600?v=638849372362100000&width=1200&height=1600&aspect=true",
        category: "Footwear",
        seller: { name: "RunFast", imageUrl: "https://randomuser.me/api/portraits/women/78.jpg" },
        comments: [
          { id: "c1", content: "Super comfy, no blisters.", user: { name: "James B", imageUrl: "https://randomuser.me/api/portraits/men/24.jpg" }, createdAt: "2025-08-02T08:10:00Z" },
          { id: "c2", content: "Stylish too.", user: { name: "Sophia M", imageUrl: "https://randomuser.me/api/portraits/women/10.jpg" }, createdAt: "2025-08-03T12:25:00Z" },
          { id: "c3", content: "Great cushioning.", user: { name: "Liam G", imageUrl: "https://randomuser.me/api/portraits/men/48.jpg" }, createdAt: "2025-08-04T14:40:00Z" },
          { id: "c4", content: "Lightweight daily runners.", user: { name: "Chloe N", imageUrl: "https://randomuser.me/api/portraits/women/20.jpg" }, createdAt: "2025-08-06T17:11:00Z" },
          { id: "c5", content: "True to size.", user: { name: "Ethan V", imageUrl: "https://randomuser.me/api/portraits/men/75.jpg" }, createdAt: "2025-08-07T19:33:00Z" }
        ],
        onSale: true,
        inStock: true,
        faq: [
          { question: "Are these waterproof?", answer: "No, breathable mesh." },
          { question: "Do they fit true to size?", answer: "Yes." }
        ]
      },
    
      // 4. Home & Kitchen
      {
        id: "550e8400-e29b-41d4-a716-446655440006",
        name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
        description: "Multi-functional cooker for pressure cooking, slow cooking, steaming, sautéing, rice, yogurt, and warming.",
        priceCents: 329900,
        salePriceCents: 289900,
        currency: "ZAR",
        imageUrl: "https://res.cloudinary.com/yuppiechef/image/upload/c_lpad,f_auto,h_556,q_auto,w_556/v1/contentdocs/35939/otherpicture320180110145839",
        category: "Home & Kitchen",
        seller: { name: "Amazon.co.za", imageUrl: "https://randomuser.me/api/portraits/women/13.jpg" },
        comments: [
          { id: "c1", content: "Replaced 4 of my kitchen gadgets!", user: { name: "Linda S", imageUrl: "https://randomuser.me/api/portraits/women/32.jpg" }, createdAt: "2025-08-01T10:12:00Z" },
          { id: "c2", content: "Meals are done in half the time.", user: { name: "Tom R", imageUrl: "https://randomuser.me/api/portraits/men/41.jpg" }, createdAt: "2025-08-02T14:33:00Z" },
          { id: "c3", content: "Love the slow cook function.", user: { name: "Rachel P", imageUrl: "https://randomuser.me/api/portraits/women/22.jpg" }, createdAt: "2025-08-03T17:45:00Z" },
          { id: "c4", content: "Easy to clean.", user: { name: "Mike L", imageUrl: "https://randomuser.me/api/portraits/men/67.jpg" }, createdAt: "2025-08-04T12:50:00Z" },
          { id: "c5", content: "Perfect for meal prepping.", user: { name: "Sophia H", imageUrl: "https://randomuser.me/api/portraits/women/53.jpg" }, createdAt: "2025-08-05T09:28:00Z" }
        ],
        onSale: true,
        inStock: true,
        faq: [
          { question: "Can I cook frozen meat?", answer: "Yes, it handles frozen foods well." },
          { question: "Is the inner pot dishwasher safe?", answer: "Yes, it is." }
        ]
      },
    
      // 5. Beauty
      {
        id: "550e8400-e29b-41d4-a716-446655440007",
        name: "CeraVe Hydrating Facial Cleanser",
        description: "Gentle daily face wash with ceramides and hyaluronic acid for normal to dry skin.",
        priceCents: 36500,
        salePriceCents: 36000,
        currency: "ZAR",
        imageUrl: "https://dermastore.co.za/wp-content/uploads/2024/06/cerave-hydrating-cleanser-473ml-1400px4.webp",
        category: "Beauty",
        seller: { name: "GlowStore", imageUrl: "https://randomuser.me/api/portraits/women/56.jpg" },
        comments: [
          { id: "c1", content: "Leaves skin soft, not dry.", user: { name: "Emma L", imageUrl: "https://randomuser.me/api/portraits/women/14.jpg" }, createdAt: "2025-08-01T09:22:00Z" },
          { id: "c2", content: "Helped my acne a lot.", user: { name: "David K", imageUrl: "https://randomuser.me/api/portraits/men/29.jpg" }, createdAt: "2025-08-02T11:18:00Z" },
          { id: "c3", content: "My dermatologist recommended this.", user: { name: "Lily A", imageUrl: "https://randomuser.me/api/portraits/women/65.jpg" }, createdAt: "2025-08-03T15:45:00Z" },
          { id: "c4", content: "Great for sensitive skin.", user: { name: "Mark S", imageUrl: "https://randomuser.me/api/portraits/men/11.jpg" }, createdAt: "2025-08-04T17:33:00Z" },
          { id: "c5", content: "Affordable and effective.", user: { name: "Sophie R", imageUrl: "https://randomuser.me/api/portraits/women/7.jpg" }, createdAt: "2025-08-05T12:00:00Z" }
        ],
        onSale: true,
        inStock: true,
        faq: [
          { question: "Is it fragrance free?", answer: "Yes, completely fragrance free." },
          { question: "Can I use it twice daily?", answer: "Yes, morning and night use recommended." }
        ]
      },
    
      // 6. Gaming
      {
        id: "550e8400-e29b-41d4-a716-446655440008",
        name: "PlayStation 5 Console (Disc Edition)",
        description: "Next-gen gaming console with ultra-fast SSD and immersive 4K gaming performance.",
        priceCents: 49999,
        salePriceCents: 49999,
        currency: "ZAR",
        imageUrl: "https://m.media-amazon.com/images/I/619BkvKW35L._SL1500_.jpg",
        category: "Gaming",
        seller: { name: "GameZone", imageUrl: "https://randomuser.me/api/portraits/men/25.jpg" },
        comments: [
          { id: "c1", content: "Graphics are insane.", user: { name: "Alex C", imageUrl: "https://randomuser.me/api/portraits/men/40.jpg" }, createdAt: "2025-08-01T10:10:00Z" },
          { id: "c2", content: "Controller haptics are game-changing.", user: { name: "Ella P", imageUrl: "https://randomuser.me/api/portraits/women/18.jpg" }, createdAt: "2025-08-02T14:22:00Z" },
          { id: "c3", content: "Loads games lightning fast.", user: { name: "Matt B", imageUrl: "https://randomuser.me/api/portraits/men/59.jpg" }, createdAt: "2025-08-03T16:15:00Z" },
          { id: "c4", content: "Worth the hype.", user: { name: "Zara J", imageUrl: "https://randomuser.me/api/portraits/women/42.jpg" }, createdAt: "2025-08-04T12:48:00Z" },
          { id: "c5", content: "Miles Morales looks amazing!", user: { name: "Kevin N", imageUrl: "https://randomuser.me/api/portraits/men/84.jpg" }, createdAt: "2025-08-05T09:30:00Z" }
        ],
        onSale: false,
        inStock: true,
        faq: [
          { question: "Does it include a controller?", answer: "Yes, one DualSense controller included." },
          { question: "Is it backward compatible?", answer: "Yes, with most PS4 games." }
        ]
      },
    
      // 7. Books
      {
        id: "550e8400-e29b-41d4-a716-446655440009",
        name: "Atomic Habits by James Clear",
        description: "Bestselling guide on building good habits, breaking bad ones, and mastering small behaviors for big results.",
        priceCents: 1999,
        salePriceCents: 1499,
        currency: "ZAR",
        imageUrl: "https://m.media-amazon.com/images/I/91bYsX41DVL._SL1500_.jpg",
        category: "Books",
        seller: { name: "BookBarn", imageUrl: "https://randomuser.me/api/portraits/women/75.jpg" },
        comments: [
          { id: "c1", content: "Changed my life in small steps.", user: { name: "Olivia P", imageUrl: "https://randomuser.me/api/portraits/women/34.jpg" }, createdAt: "2025-08-01T10:45:00Z" },
          { id: "c2", content: "Easy to apply tips.", user: { name: "Ben T", imageUrl: "https://randomuser.me/api/portraits/men/63.jpg" }, createdAt: "2025-08-02T14:05:00Z" },
          { id: "c3", content: "I reread it every year.", user: { name: "Hannah L", imageUrl: "https://randomuser.me/api/portraits/women/27.jpg" }, createdAt: "2025-08-03T16:55:00Z" },
          { id: "c4", content: "Perfect mix of science and practice.", user: { name: "Ryan M", imageUrl: "https://randomuser.me/api/portraits/men/77.jpg" }, createdAt: "2025-08-04T12:30:00Z" },
          { id: "c5", content: "One of the best self-help books.", user: { name: "Julia F", imageUrl: "https://randomuser.me/api/portraits/women/52.jpg" }, createdAt: "2025-08-05T09:20:00Z" }
        ],
        onSale: true,
        inStock: true,
        faq: [
          { question: "Is it beginner friendly?", answer: "Yes, very accessible." },
          { question: "Does it include exercises?", answer: "Yes, practical steps included." }
        ]
      },
    
      // 8. Fashion
      {
        id: "550e8400-e29b-41d4-a716-446655440010",
        name: "Levi's 501 Original Fit Jeans",
        description: "Classic straight-leg jeans with button fly and durable cotton denim.",
        priceCents: 6999,
        salePriceCents: 5999,
        currency: "ZAR",
        imageUrl: "https://lsco.scene7.com/is/image/lsco/005010194-front-pdp?$qv_desktop_full$",
        category: "Fashion",
        seller: { name: "StyleHub", imageUrl: "https://randomuser.me/api/portraits/men/92.jpg" },
        comments: [
          { id: "c1", content: "Perfect everyday jeans.", user: { name: "Jack R", imageUrl: "https://randomuser.me/api/portraits/men/38.jpg" }, createdAt: "2025-08-01T12:00:00Z" },
          { id: "c2", content: "Fit just right.", user: { name: "Ella S", imageUrl: "https://randomuser.me/api/portraits/women/46.jpg" }, createdAt: "2025-08-02T13:15:00Z" },
          { id: "c3", content: "Quality denim.", user: { name: "David Y", imageUrl: "https://randomuser.me/api/portraits/men/28.jpg" }, createdAt: "2025-08-03T14:25:00Z" },
          { id: "c4", content: "Timeless design.", user: { name: "Sophia V", imageUrl: "https://randomuser.me/api/portraits/women/33.jpg" }, createdAt: "2025-08-04T15:40:00Z" },
          { id: "c5", content: "Worth the price.", user: { name: "Chris H", imageUrl: "https://randomuser.me/api/portraits/men/44.jpg" }, createdAt: "2025-08-05T16:50:00Z" }
        ],
        onSale: true,
        inStock: true,
        faq: [
          { question: "Do they shrink after wash?", answer: "Minimal shrinkage if washed cold." },
          { question: "Is it unisex?", answer: "Yes, classic fit works for all." }
        ]
      },
    
      // 9. Sports
      {
        id: "550e8400-e29b-41d4-a716-446655440011",
        name: "Wilson Evolution Indoor Basketball",
        description: "High-performance indoor basketball with microfiber composite cover for excellent grip.",
        priceCents: 6499,
        salePriceCents: 5499,
        currency: "ZAR",
        imageUrl: "https://m.media-amazon.com/images/I/71YlDZyoBJL._AC_SL1500_.jpg",
        category: "Sports",
        seller: { name: "SportX", imageUrl: "https://randomuser.me/api/portraits/men/22.jpg" },
        comments: [
          { id: "c1", content: "Best ball for indoor courts.", user: { name: "Mason G", imageUrl: "https://randomuser.me/api/portraits/men/72.jpg" }, createdAt: "2025-08-01T11:00:00Z" },
          { id: "c2", content: "Grip is outstanding.", user: { name: "Zoe K", imageUrl: "https://randomuser.me/api/portraits/women/64.jpg" }, createdAt: "2025-08-02T12:30:00Z" },
          { id: "c3", content: "Feels professional.", user: { name: "Noah H", imageUrl: "https://randomuser.me/api/portraits/men/53.jpg" }, createdAt: "2025-08-03T13:45:00Z" },
          { id: "c4", content: "Great durability.", user: { name: "Ava N", imageUrl: "https://randomuser.me/api/portraits/women/29.jpg" }, createdAt: "2025-08-04T15:00:00Z" },
          { id: "c5", content: "Bounces perfectly.", user: { name: "Eli J", imageUrl: "https://randomuser.me/api/portraits/men/61.jpg" }, createdAt: "2025-08-05T16:15:00Z" }
        ],
        onSale: true,
        inStock: true,
        faq: [
          { question: "Is it outdoor friendly?", answer: "Designed for indoor use only." },
          { question: "What size is it?", answer: "Official size 7 (29.5 inches)." }
        ]
      },
    
      // 10. Appliances
      {
        id: "550e8400-e29b-41d4-a716-446655440012",
        name: "Dyson V15 Detect Cordless Vacuum",
        description: "Powerful cordless vacuum with laser detection for microscopic dust and up to 60 minutes of run time.",
        priceCents: 74999,
        salePriceCents: 69999,
        currency: "ZAR",
        imageUrl: "https://m.media-amazon.com/images/I/61oUu7+npZL._AC_SL1500_.jpg",
        category: "Appliances",
        seller: { name: "HomeCare", imageUrl: "https://randomuser.me/api/portraits/women/66.jpg" },
        comments: [
          { id: "c1", content: "Laser feature is a game changer!", user: { name: "Mia P", imageUrl: "https://randomuser.me/api/portraits/women/48.jpg" }, createdAt: "2025-08-01T09:30:00Z" },
          { id: "c2", content: "Battery lasts long enough for the whole house.", user: { name: "Jack D", imageUrl: "https://randomuser.me/api/portraits/men/60.jpg" }, createdAt: "2025-08-02T10:15:00Z" },
          { id: "c3", content: "Very lightweight, easy to maneuver.", user: { name: "Ella C", imageUrl: "https://randomuser.me/api/portraits/women/12.jpg" }, createdAt: "2025-08-03T11:45:00Z" },
          { id: "c4", content: "Picks up pet hair perfectly.", user: { name: "Henry T", imageUrl: "https://randomuser.me/api/portraits/men/31.jpg" }, createdAt: "2025-08-04T13:20:00Z" },
          { id: "c5", content: "Expensive but worth it.", user: { name: "Sofia V", imageUrl: "https://randomuser.me/api/portraits/women/19.jpg" }, createdAt: "2025-08-05T14:55:00Z" }
        ],
        onSale: true,
        inStock: true,
        faq: [
          { question: "Does it work on carpets?", answer: "Yes, optimized for all floor types." },
          { question: "Is the filter washable?", answer: "Yes, washable HEPA filter included." }
        ]
      },
      // Category: Books
{
  id: "550e8400-e29b-41d4-a716-446655440013",
  name: "Atomic Habits",
  description: "A guide by James Clear on building good habits and breaking bad ones through practical strategies.",
  priceCents: 1800,
  salePriceCents: 1500,
  currency: "ZAR",
  imageUrl: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
  category: "Books",
  seller: {
    name: "Book Haven",
    imageUrl: "https://i.pravatar.cc/100?img=19"
  },
  comments: [
    {
      id: "c1",
      content: "Life-changing book, easy to read and apply.",
      user: { name: "Sophie R.", imageUrl: "https://i.pravatar.cc/100?img=20" },
      createdAt: "2025-01-01T10:12:00Z"
    },
    {
      id: "c2",
      content: "Helped me be more consistent with my workouts.",
      user: { name: "Liam W.", imageUrl: "https://i.pravatar.cc/100?img=21" },
      createdAt: "2025-01-03T08:45:00Z"
    },
    {
      id: "c3",
      content: "Practical and well-written.",
      user: { name: "Clara J.", imageUrl: "https://i.pravatar.cc/100?img=22" },
      createdAt: "2025-01-05T14:30:00Z"
    },
    {
      id: "c4",
      content: "A must-read for productivity geeks.",
      user: { name: "Tom K.", imageUrl: "https://i.pravatar.cc/100?img=23" },
      createdAt: "2025-01-06T09:25:00Z"
    },
    {
      id: "c5",
      content: "Good mix of theory and actionable steps.",
      user: { name: "Emma P.", imageUrl: "https://i.pravatar.cc/100?img=24" },
      createdAt: "2025-01-08T12:00:00Z"
    }
  ],
  onSale: true,
  inStock: true,
  faq: [
    { question: "Is this the hardcover edition?", answer: "Yes, this listing is for the hardcover edition." },
    { question: "How many pages?", answer: "The book has 320 pages." }
  ]
},

// Category: Sports
{
  id: "550e8400-e29b-41d4-a716-446655440014",
  name: "Wilson Evolution Basketball",
  description: "Official size indoor basketball with microfiber composite leather for superior grip and feel.",
  priceCents: 6000,
  salePriceCents: 5500,
  currency: "ZAR",
  imageUrl: "https://m.media-amazon.com/images/I/71f+OXyE4-L._AC_SL1500_.jpg",
  category: "Sports",
  seller: {
    name: "SportZone",
    imageUrl: "https://i.pravatar.cc/100?img=25"
  },
  comments: [
    {
      id: "c1",
      content: "Great bounce, feels professional.",
      user: { name: "Mark D.", imageUrl: "https://i.pravatar.cc/100?img=26" },
      createdAt: "2025-02-01T09:00:00Z"
    },
    {
      id: "c2",
      content: "The grip is perfect for indoor courts.",
      user: { name: "Jane L.", imageUrl: "https://i.pravatar.cc/100?img=27" },
      createdAt: "2025-02-02T11:10:00Z"
    },
    {
      id: "c3",
      content: "Best basketball I’ve used so far.",
      user: { name: "Chris M.", imageUrl: "https://i.pravatar.cc/100?img=28" },
      createdAt: "2025-02-03T12:45:00Z"
    },
    {
      id: "c4",
      content: "A bit pricey but worth it.",
      user: { name: "Alex N.", imageUrl: "https://i.pravatar.cc/100?img=29" },
      createdAt: "2025-02-04T15:25:00Z"
    },
    {
      id: "c5",
      content: "High quality, highly recommend.",
      user: { name: "Rachel T.", imageUrl: "https://i.pravatar.cc/100?img=30" },
      createdAt: "2025-02-05T17:00:00Z"
    }
  ],
  onSale: true,
  inStock: true,
  faq: [
    { question: "Is it suitable for outdoor use?", answer: "It is designed for indoor play but can be used outdoors with reduced lifespan." },
    { question: "What size is this ball?", answer: "This is a size 7 (official) basketball." }
  ]
},

// Category: Beauty
{
  id: "550e8400-e29b-41d4-a716-446655440015",
  name: "CeraVe Moisturizing Cream",
  description: "Hydrating cream with ceramides and hyaluronic acid for dry skin.",
  priceCents: 1600,
  salePriceCents: 1500,
  currency: "ZAR",
  imageUrl: "https://m.media-amazon.com/images/I/71b2qN0oQzL._AC_SL1500_.jpg",
  category: "Beauty",
  seller: {
    name: "GlowHub",
    imageUrl: "https://i.pravatar.cc/100?img=31"
  },
  comments: [
    {
      id: "c1",
      content: "Best moisturizer for sensitive skin.",
      user: { name: "Nina V.", imageUrl: "https://i.pravatar.cc/100?img=32" },
      createdAt: "2025-03-01T10:20:00Z"
    },
    {
      id: "c2",
      content: "My dermatologist recommended this.",
      user: { name: "Ella K.", imageUrl: "https://i.pravatar.cc/100?img=33" },
      createdAt: "2025-03-02T09:10:00Z"
    },
    {
      id: "c3",
      content: "Great for winter dryness.",
      user: { name: "Sophia W.", imageUrl: "https://i.pravatar.cc/100?img=34" },
      createdAt: "2025-03-03T08:40:00Z"
    },
    {
      id: "c4",
      content: "Thick but absorbs well.",
      user: { name: "James C.", imageUrl: "https://i.pravatar.cc/100?img=35" },
      createdAt: "2025-03-04T11:00:00Z"
    },
    {
      id: "c5",
      content: "Non-greasy and effective.",
      user: { name: "Olivia H.", imageUrl: "https://i.pravatar.cc/100?img=36" },
      createdAt: "2025-03-05T14:00:00Z"
    }
  ],
  onSale: false,
  inStock: true,
  faq: [
    { question: "Is it fragrance-free?", answer: "Yes, it is fragrance-free and suitable for sensitive skin." },
    { question: "Can it be used on the face?", answer: "Yes, it’s safe for both body and face." }
  ]
},

// Category: Toys
{
  id: "550e8400-e29b-41d4-a716-446655440016",
  name: "LEGO Classic Bricks and Animals",
  description: "1,500-piece LEGO set that lets kids build animals, vehicles, and more with creative play.",
  priceCents: 5000,
  salePriceCents: 4500,
  currency: "ZAR",
  imageUrl: "https://m.media-amazon.com/images/I/91bR0BBE-UL._AC_SL1500_.jpg",
  category: "Toys",
  seller: {
    name: "ToyLand",
    imageUrl: "https://i.pravatar.cc/100?img=37"
  },
  comments: [
    {
      id: "c1",
      content: "My kids love building with this set!",
      user: { name: "David P.", imageUrl: "https://i.pravatar.cc/100?img=38" },
      createdAt: "2025-04-01T10:20:00Z"
    },
    {
      id: "c2",
      content: "Great for family playtime.",
      user: { name: "Sarah M.", imageUrl: "https://i.pravatar.cc/100?img=39" },
      createdAt: "2025-04-02T09:30:00Z"
    },
    {
      id: "c3",
      content: "So many possibilities with 1500 pieces!",
      user: { name: "Luke B.", imageUrl: "https://i.pravatar.cc/100?img=40" },
      createdAt: "2025-04-03T14:00:00Z"
    },
    {
      id: "c4",
      content: "High quality as always from LEGO.",
      user: { name: "Anna J.", imageUrl: "https://i.pravatar.cc/100?img=41" },
      createdAt: "2025-04-04T16:20:00Z"
    },
    {
      id: "c5",
      content: "Keeps my kids entertained for hours.",
      user: { name: "Michael L.", imageUrl: "https://i.pravatar.cc/100?img=42" },
      createdAt: "2025-04-05T18:00:00Z"
    }
  ],
  onSale: true,
  inStock: true,
  faq: [
    { question: "What age is this suitable for?", answer: "Recommended for ages 4 and up." },
    { question: "Are instructions included?", answer: "Yes, the set includes instructions for multiple builds." }
  ]
},
  // ---------- ELECTRONICS ----------
  {
    id: "550e8400-e29b-41d4-a716-446655440017",
    name: "Apple iPad Air (5th Gen, 64GB, Wi-Fi)",
    description: "The lightweight and powerful iPad Air with the M1 chip, Liquid Retina display, and Apple Pencil (2nd gen) support.",
    priceCents: 59900,
    salePriceCents: 54900,
    currency: "ZAR",
    imageUrl: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-202203?wid=940&hei=1112&fmt=png-alpha&.v=1645066724475",
    category: "Electronics",
    seller: {
      name: "Apple Store",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
    },
    comments: [
      { id: "c1", content: "Perfect for school and Netflix!", user: { name: "Alex J.", imageUrl: "https://randomuser.me/api/portraits/men/11.jpg" }, createdAt: "2025-07-20" },
      { id: "c2", content: "The M1 chip makes it really fast.", user: { name: "Sophia K.", imageUrl: "https://randomuser.me/api/portraits/women/22.jpg" }, createdAt: "2025-07-22" },
      { id: "c3", content: "Battery lasts me 2 days of light use.", user: { name: "Leo P.", imageUrl: "https://randomuser.me/api/portraits/men/33.jpg" }, createdAt: "2025-07-23" },
      { id: "c4", content: "Worth it over the regular iPad.", user: { name: "Emily W.", imageUrl: "https://randomuser.me/api/portraits/women/44.jpg" }, createdAt: "2025-07-25" },
      { id: "c5", content: "Great for drawing with Apple Pencil.", user: { name: "Ryan S.", imageUrl: "https://randomuser.me/api/portraits/men/55.jpg" }, createdAt: "2025-07-26" }
    ],
    onSale: true,
    inStock: true,
    faq: [
      { question: "Does it support Apple Pencil 1st gen?", answer: "No, it only supports Apple Pencil 2nd gen." },
      { question: "Is there Face ID?", answer: "No, it uses Touch ID integrated in the top button." }
    ]
  },

  // ---------- BEAUTY ----------
  {
    id: "550e8400-e29b-41d4-a716-446655440018",
    name: "Fenty Beauty Gloss Bomb Universal Lip Luminizer",
    description: "A must-have lip gloss with explosive shine, designed to flatter all skin tones.",
    priceCents: 1900,
    salePriceCents: 1900,
    currency: "ZAR",
    imageUrl: "https://fentybeauty.com/cdn/shop/products/FB_GlossBomb_FUSY_2.jpg?v=1680542466",
    category: "Beauty",
    seller: {
      name: "Fenty Beauty",
      imageUrl: "https://fentybeauty.com/cdn/shop/files/fb-favicon_180x180.png"
    },
    comments: [
      { id: "c1", content: "Not sticky at all, feels great!", user: { name: "Hannah D.", imageUrl: "https://randomuser.me/api/portraits/women/60.jpg" }, createdAt: "2025-06-15" },
      { id: "c2", content: "My go-to everyday gloss.", user: { name: "Maya L.", imageUrl: "https://randomuser.me/api/portraits/women/61.jpg" }, createdAt: "2025-06-18" },
      { id: "c3", content: "Shine is unreal.", user: { name: "Jade M.", imageUrl: "https://randomuser.me/api/portraits/women/62.jpg" }, createdAt: "2025-06-20" },
      { id: "c4", content: "Works with any skin tone.", user: { name: "Carla F.", imageUrl: "https://randomuser.me/api/portraits/women/63.jpg" }, createdAt: "2025-06-23" },
      { id: "c5", content: "Got compliments the first day I wore it.", user: { name: "Olivia B.", imageUrl: "https://randomuser.me/api/portraits/women/64.jpg" }, createdAt: "2025-06-25" }
    ],
    onSale: false,
    inStock: true,
    faq: [
      { question: "Is it vegan?", answer: "Yes, this gloss is vegan and cruelty-free." },
      { question: "Does it have shimmer?", answer: "Yes, it gives a subtle shimmer for shine." }
    ]
  },

  // ---------- HOME & KITCHEN ----------
  {
    id: "550e8400-e29b-41d4-a716-446655440019",
    name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker (6 Quart)",
    description: "The all-in-one appliance that replaces 7 kitchen devices: pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker, and warmer.",
    priceCents: 9999,
    salePriceCents: 8999,
    currency: "ZAR",
    imageUrl: "https://m.media-amazon.com/images/I/81kB0r6hZNL._AC_SL1500_.jpg",
    category: "Home & Kitchen",
    seller: {
      name: "Instant Brands",
      imageUrl: "https://instantpot.com/wp-content/themes/instant-pot/images/InstantPot_Logo.png"
    },
    comments: [
      { id: "c1", content: "Game-changer for weeknight dinners.", user: { name: "Tom R.", imageUrl: "https://randomuser.me/api/portraits/men/70.jpg" }, createdAt: "2025-04-10" },
      { id: "c2", content: "Cooks rice perfectly.", user: { name: "Alice V.", imageUrl: "https://randomuser.me/api/portraits/women/71.jpg" }, createdAt: "2025-04-12" },
      { id: "c3", content: "Replaced 3 of my old appliances.", user: { name: "George N.", imageUrl: "https://randomuser.me/api/portraits/men/72.jpg" }, createdAt: "2025-04-13" },
      { id: "c4", content: "Great for meal prepping.", user: { name: "Maria S.", imageUrl: "https://randomuser.me/api/portraits/women/73.jpg" }, createdAt: "2025-04-15" },
      { id: "c5", content: "Wish I bought this sooner.", user: { name: "Liam B.", imageUrl: "https://randomuser.me/api/portraits/men/74.jpg" }, createdAt: "2025-04-17" }
    ],
    onSale: true,
    inStock: true,
    faq: [
      { question: "Can it be used as an air fryer?", answer: "No, but Instant Pot sells an air fryer lid separately." },
      { question: "Is the inner pot dishwasher safe?", answer: "Yes, the stainless steel inner pot is dishwasher safe." }
    ]
  },

  // ---------- SPORTS ----------
  {
    id: "550e8400-e29b-41d4-a716-446655440020",
    name: "Wilson Evolution Indoor Basketball",
    description: "The #1 indoor game basketball in high schools and colleges, known for its superior grip and feel.",
    priceCents: 6999,
    salePriceCents: 5999,
    currency: "ZAR",
    imageUrl: "https://m.media-amazon.com/images/I/71pb-otGhQL._AC_SL1500_.jpg",
    category: "Sports",
    seller: {
      name: "Wilson Sporting Goods",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Wilson_logo.svg"
    },
    comments: [
      { id: "c1", content: "The grip is amazing!", user: { name: "Chris P.", imageUrl: "https://randomuser.me/api/portraits/men/80.jpg" }, createdAt: "2025-02-10" },
      { id: "c2", content: "Used in my college league.", user: { name: "Tyler M.", imageUrl: "https://randomuser.me/api/portraits/men/81.jpg" }, createdAt: "2025-02-12" },
      { id: "c3", content: "Durable and feels premium.", user: { name: "Josh L.", imageUrl: "https://randomuser.me/api/portraits/men/82.jpg" }, createdAt: "2025-02-14" },
      { id: "c4", content: "Perfect bounce.", user: { name: "Megan D.", imageUrl: "https://randomuser.me/api/portraits/women/83.jpg" }, createdAt: "2025-02-15" },
      { id: "c5", content: "Worth the money.", user: { name: "Ethan H.", imageUrl: "https://randomuser.me/api/portraits/men/84.jpg" }, createdAt: "2025-02-17" }
    ],
    onSale: true,
    inStock: true,
    faq: [
      { question: "Is it outdoor friendly?", answer: "This ball is designed for indoor use only." },
      { question: "What size is it?", answer: "It is size 7 (29.5 inches)." }
    ]
  }
]
    
  

export function formatPrice(priceCents: number, currency: string = "ZAR") {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(priceCents / 100)
}
