export type Product = {
  id: string
  name: string
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
  comments: [
    {
      id: string,
      content: string,
      user: {
        name: string,
        imageUrl: string
      },
      createdAt: string
    }
  ],
  onSale: boolean,
  inStock: boolean,
  faq: [
    {
      question: string,
      answer: string
    }
  ]
}

export const SAMPLE_PRODUCTS: Product[] = [
    {
      id: 'f34417db-1d89-4197-b555-d098ade62860',
      name: "Apple iPhone 15 Pro",
      description:
        "The iPhone 15 Pro features a titanium design, A17 Pro chip, and advanced camera system with 48MP main camera for professional photography.",
      priceCents: 129999,
      salePriceCents: 119999,
      currency: "USD",
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blue-titanium?wid=5120&hei=2880&fmt=jpeg&qlt=90&.v=1693525240519",
      category: "Electronics",
      seller: {
        name: "TechWorld",
        imageUrl:
          "https://randomuser.me/api/portraits/men/32.jpg"
      },
      comments: [
        {
          id: '7f5aa0ef-62c4-4a6a-bd56-1a53a29fc135',
          content: "Battery life is impressive, lasts me all day even with heavy use.",
          user: { name: "Sarah L", imageUrl: "https://randomuser.me/api/portraits/women/45.jpg" },
          createdAt: "2025-08-01T10:12:00Z"
        },
        {
          id: 'b1a8af48-124e-4414-b5ca-8866443c8efa',
          content: "Camera quality is outstanding, especially the night mode.",
          user: { name: "Daniel K", imageUrl: "https://randomuser.me/api/portraits/men/50.jpg" },
          createdAt: "2025-08-02T08:45:00Z"
        },
        {
          id: 'f3a32e59-f50c-4bef-82a9-eb80a3ee2719',
          content: "Pricey, but worth it for the performance.",
          user: { name: "Megan T", imageUrl: "https://randomuser.me/api/portraits/women/28.jpg" },
          createdAt: "2025-08-03T12:30:00Z"
        },
        {
          id: 'd1304208-73ea-435d-af64-96e5bd7d1633',
          content: "Love the new titanium finish, feels very premium.",
          user: { name: "John P", imageUrl: "https://randomuser.me/api/portraits/men/64.jpg" },
          createdAt: "2025-08-05T14:10:00Z"
        },
        {
          id: 'b47a85c2-4c44-4798-a93b-d98f5792e038',
          content: "Switched from Samsung, no regrets!",
          user: { name: "Emily C", imageUrl: "https://randomuser.me/api/portraits/women/15.jpg" },
          createdAt: "2025-08-06T16:55:00Z"
        }
      ],
      onSale: true,
      inStock: true,
      faq: [
        { question: "Does it support wireless charging?", answer: "Yes, MagSafe and Qi wireless charging are supported." },
        { question: "Is it water resistant?", answer: "Yes, rated IP68 for water and dust resistance." }
      ]
    },
    {
      id: '437e8a17-6783-4a6e-b6fd-f0aa623a416b',
      name: "Sony WH-1000XM5 Wireless Headphones",
      description:
        "Industry-leading noise-canceling headphones with up to 30 hours of battery life and crystal-clear call quality.",
      priceCents: 39999,
      salePriceCents: 34999,
      currency: "USD",
      imageUrl:
        "https://m.media-amazon.com/images/I/61+Q6Rh3OQL._AC_SL1500_.jpg",
      category: "Audio",
      seller: {
        name: "SoundHub",
        imageUrl: "https://randomuser.me/api/portraits/men/85.jpg"
      },
      comments: [
        {
          id: '15004f94-013b-4da1-81b6-58067dc0c858',
          content: "Noise cancellation is the best I’ve ever experienced.",
          user: { name: "Lucas F", imageUrl: "https://randomuser.me/api/portraits/men/12.jpg" },
          createdAt: "2025-08-04T09:20:00Z"
        },
        {
          id: 'c792e40c-10de-49e0-999b-cf0ce5944b96',
          content: "Comfortable for long flights and study sessions.",
          user: { name: "Anna R", imageUrl: "https://randomuser.me/api/portraits/women/36.jpg" },
          createdAt: "2025-08-05T11:42:00Z"
        },
        {
          id: '272df208-97ff-4333-964b-dafadb494ce0',
          content: "App integration is smooth and easy to use.",
          user: { name: "Chris D", imageUrl: "https://randomuser.me/api/portraits/men/70.jpg" },
          createdAt: "2025-08-06T13:18:00Z"
        },
        {
          id: '4bb09c87-322a-4607-ae06-90834401b651',
          content: "Bass is deep but not overpowering, perfect balance.",
          user: { name: "Jessica W", imageUrl: "https://randomuser.me/api/portraits/women/55.jpg" },
          createdAt: "2025-08-07T15:27:00Z"
        },
        {
          id: '01e0f485-47f1-43a5-b7ed-385459d2c7a0',
          content: "The carrying case is very handy and compact.",
          user: { name: "Omar H", imageUrl: "https://randomuser.me/api/portraits/men/90.jpg" },
          createdAt: "2025-08-08T18:03:00Z"
        }
      ],
      onSale: true,
      inStock: true,
      faq: [
        { question: "Does it work with Android and iOS?", answer: "Yes, it’s compatible with both platforms." },
        { question: "Can I use it with a wired connection?", answer: "Yes, it comes with a 3.5mm audio cable." }
      ]
    },
    {
      id: '80894eff-4b86-482e-995d-5392098f7358',
      name: "Nike Air Zoom Pegasus 40",
      description:
        "The Nike Air Zoom Pegasus 40 delivers responsive cushioning, breathable mesh, and versatile performance for daily running.",
      priceCents: 12999,
      salePriceCents: 9999,
      currency: "USD",
      imageUrl:
        "https://static.nike.com/a/images/t_default/4e24e7c6-7a46-4d18-b89d-8f2db7a63a12/pegasus-40-road-running-shoes.png",
      category: "Footwear",
      seller: {
        name: "RunFast",
        imageUrl: "https://randomuser.me/api/portraits/women/78.jpg"
      },
      comments: [
        {
          id: 'ee63a3cd-d228-4d0e-8247-14aed55804e9',
          content: "Super comfortable for long runs, no blisters at all.",
          user: { name: "James B", imageUrl: "https://randomuser.me/api/portraits/men/24.jpg" },
          createdAt: "2025-08-02T08:10:00Z"
        },
        {
          id: '0422ec68-8c58-4940-904c-f27ee949da49',
          content: "Stylish enough to wear casually too.",
          user: { name: "Sophia M", imageUrl: "https://randomuser.me/api/portraits/women/10.jpg" },
          createdAt: "2025-08-03T12:25:00Z"
        },
        {
          id: '26a2df75-b342-4cae-b8e9-b51570d26bc6',
          content: "Cushioning feels great on concrete surfaces.",
          user: { name: "Liam G", imageUrl: "https://randomuser.me/api/portraits/men/48.jpg" },
          createdAt: "2025-08-04T14:40:00Z"
        },
        {
          id: 'b22b5ed0-8827-4cc9-88ca-576fbb225d62',
          content: "Lightweight yet durable, my new daily runners.",
          user: { name: "Chloe N", imageUrl: "https://randomuser.me/api/portraits/women/20.jpg" },
          createdAt: "2025-08-06T17:11:00Z"
        },
        {
          id: 'c6940b1c-7c94-4d77-8587-68bdfb1a92f7',
          content: "Fit true to size, highly recommend.",
          user: { name: "Ethan V", imageUrl: "https://randomuser.me/api/portraits/men/75.jpg" },
          createdAt: "2025-08-07T19:33:00Z"
        }
      ],
      onSale: true,
      inStock: true,
      faq: [
        { question: "Are these waterproof?", answer: "No, they are breathable but not waterproof." },
        { question: "Do they run true to size?", answer: "Yes, we recommend ordering your regular running shoe size." }
      ]
    },
      // 1. Electronics
      {
        id: '7486bf81-27e0-4517-a0d3-987bbd342849',
        name: "Apple iPhone 15 Pro",
        description:
          "The iPhone 15 Pro features a titanium design, A17 Pro chip, and advanced camera system with 48MP main camera for professional photography.",
        priceCents: 129999,
        salePriceCents: 119999,
        currency: "USD",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blue-titanium?wid=5120&hei=2880&fmt=jpeg&qlt=90&.v=1693525240519",
        category: "Electronics",
        seller: {
          name: "TechWorld",
          imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        comments: [
          { id: 'ad98930e-63f2-421e-bdb9-5c8051729eb8', content: "Battery life is impressive, lasts all day.", user: { name: "Sarah L", imageUrl: "https://randomuser.me/api/portraits/women/45.jpg" }, createdAt: "2025-08-01T10:12:00Z" },
          { id: '0d20e818-7339-44d0-8e06-299c5a01e74c', content: "Camera quality is outstanding.", user: { name: "Daniel K", imageUrl: "https://randomuser.me/api/portraits/men/50.jpg" }, createdAt: "2025-08-02T08:45:00Z" },
          { id: '805fef3c-02a1-43eb-8920-3d39fd405bdc', content: "Pricey but worth it.", user: { name: "Megan T", imageUrl: "https://randomuser.me/api/portraits/women/28.jpg" }, createdAt: "2025-08-03T12:30:00Z" },
          { id: '4bbf527a-6df9-4735-8103-703f5f74c2b3', content: "Love the titanium finish.", user: { name: "John P", imageUrl: "https://randomuser.me/api/portraits/men/64.jpg" }, createdAt: "2025-08-05T14:10:00Z" },
          { id: '390e9cae-47ea-422c-9fcc-0c16ca5fc6ee', content: "Switched from Samsung, no regrets!", user: { name: "Emily C", imageUrl: "https://randomuser.me/api/portraits/women/15.jpg" }, createdAt: "2025-08-06T16:55:00Z" }
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
        id: '365b064a-dbf4-45ac-b56b-821535c14258',
        name: "Sony WH-1000XM5 Wireless Headphones",
        description:
          "Industry-leading noise-canceling headphones with up to 30 hours of battery life and crystal-clear call quality.",
        priceCents: 39999,
        salePriceCents: 34999,
        currency: "USD",
        imageUrl: "https://m.media-amazon.com/images/I/61+Q6Rh3OQL._AC_SL1500_.jpg",
        category: "Audio",
        seller: { name: "SoundHub", imageUrl: "https://randomuser.me/api/portraits/men/85.jpg" },
        comments: [
          { id: 'd2923e27-e540-43fe-9f17-0348fc6bd88a', content: "Noise cancellation is unreal.", user: { name: "Lucas F", imageUrl: "https://randomuser.me/api/portraits/men/12.jpg" }, createdAt: "2025-08-04T09:20:00Z" },
          { id: '6f719658-93d5-46b2-bb4d-ea342e410ddd', content: "Very comfortable for travel.", user: { name: "Anna R", imageUrl: "https://randomuser.me/api/portraits/women/36.jpg" }, createdAt: "2025-08-05T11:42:00Z" },
          { id: 'b80d2869-0e84-4ea5-98c4-fd1eeceac84c', content: "Battery lasts forever.", user: { name: "Chris D", imageUrl: "https://randomuser.me/api/portraits/men/70.jpg" }, createdAt: "2025-08-06T13:18:00Z" },
          { id: '1556a503-6cdf-4b2f-a293-923e977fcf07', content: "Bass is deep and clean.", user: { name: "Jessica W", imageUrl: "https://randomuser.me/api/portraits/women/55.jpg" }, createdAt: "2025-08-07T15:27:00Z" },
          { id: 'd622f811-a1f0-4207-9c60-fbc3f6031d86', content: "Case is compact.", user: { name: "Omar H", imageUrl: "https://randomuser.me/api/portraits/men/90.jpg" }, createdAt: "2025-08-08T18:03:00Z" }
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
        id: 'c2fe2559-74b0-4600-a341-b961e99b0cfa',
        name: "Nike Air Zoom Pegasus 40",
        description:
          "The Nike Air Zoom Pegasus 40 delivers responsive cushioning, breathable mesh, and versatile performance for daily running.",
        priceCents: 12999,
        salePriceCents: 9999,
        currency: "USD",
        imageUrl: "https://static.nike.com/a/images/t_default/4e24e7c6-7a46-4d18-b89d-8f2db7a63a12/pegasus-40-road-running-shoes.png",
        category: "Footwear",
        seller: { name: "RunFast", imageUrl: "https://randomuser.me/api/portraits/women/78.jpg" },
        comments: [
          { id: '268d5dcb-7f1d-4685-80e9-2e32549eb335', content: "Super comfy, no blisters.", user: { name: "James B", imageUrl: "https://randomuser.me/api/portraits/men/24.jpg" }, createdAt: "2025-08-02T08:10:00Z" },
          { id: 'c0ddc45d-7aab-464e-b309-2f34234b29ca', content: "Stylish too.", user: { name: "Sophia M", imageUrl: "https://randomuser.me/api/portraits/women/10.jpg" }, createdAt: "2025-08-03T12:25:00Z" },
          { id: '0cb17f47-533d-401d-ab28-21bf996436d3', content: "Great cushioning.", user: { name: "Liam G", imageUrl: "https://randomuser.me/api/portraits/men/48.jpg" }, createdAt: "2025-08-04T14:40:00Z" },
          { id: '1fbd03e0-8ae5-4933-b416-6ab3f8907387', content: "Lightweight daily runners.", user: { name: "Chloe N", imageUrl: "https://randomuser.me/api/portraits/women/20.jpg" }, createdAt: "2025-08-06T17:11:00Z" },
          { id: '675b3de1-f7a3-48bc-bee3-aa1abcae2749', content: "True to size.", user: { name: "Ethan V", imageUrl: "https://randomuser.me/api/portraits/men/75.jpg" }, createdAt: "2025-08-07T19:33:00Z" }
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
        id: '369452f0-6af7-41b5-83c9-30326f8fcb95',
        name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
        description: "Multi-functional cooker for pressure cooking, slow cooking, steaming, sautéing, rice, yogurt, and warming.",
        priceCents: 9999,
        salePriceCents: 7999,
        currency: "USD",
        imageUrl: "https://m.media-amazon.com/images/I/81iO-jb9ZtL._AC_SL1500_.jpg",
        category: "Home & Kitchen",
        seller: { name: "KitchenPro", imageUrl: "https://randomuser.me/api/portraits/women/13.jpg" },
        comments: [
          { id: 'ba30cf7e-12a5-42aa-b6e8-2f10716756a9', content: "Replaced 4 of my kitchen gadgets!", user: { name: "Linda S", imageUrl: "https://randomuser.me/api/portraits/women/32.jpg" }, createdAt: "2025-08-01T10:12:00Z" },
          { id: 'f50b814a-8466-4a0a-9f93-0886e9d336c5', content: "Meals are done in half the time.", user: { name: "Tom R", imageUrl: "https://randomuser.me/api/portraits/men/41.jpg" }, createdAt: "2025-08-02T14:33:00Z" },
          { id: 'a5e380cf-cf45-410b-afea-a2cd7f769131', content: "Love the slow cook function.", user: { name: "Rachel P", imageUrl: "https://randomuser.me/api/portraits/women/22.jpg" }, createdAt: "2025-08-03T17:45:00Z" },
          { id: '15202ed0-b113-43b9-a688-4e4f6a623d33', content: "Easy to clean.", user: { name: "Mike L", imageUrl: "https://randomuser.me/api/portraits/men/67.jpg" }, createdAt: "2025-08-04T12:50:00Z" },
          { id: '64a403b1-c09e-4cba-9144-b2420905673f', content: "Perfect for meal prepping.", user: { name: "Sophia H", imageUrl: "https://randomuser.me/api/portraits/women/53.jpg" }, createdAt: "2025-08-05T09:28:00Z" }
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
        id: '1c9a26ab-317f-4686-9d9b-2971a16367a5',
        name: "CeraVe Hydrating Facial Cleanser",
        description: "Gentle daily face wash with ceramides and hyaluronic acid for normal to dry skin.",
        priceCents: 1599,
        salePriceCents: 1299,
        currency: "USD",
        imageUrl: "https://m.media-amazon.com/images/I/71oO-9sE40L._SL1500_.jpg",
        category: "Beauty",
        seller: { name: "GlowStore", imageUrl: "https://randomuser.me/api/portraits/women/56.jpg" },
        comments: [
          { id: 'b3226e95-1dfe-47e6-afe6-faebbb3784c0', content: "Leaves skin soft, not dry.", user: { name: "Emma L", imageUrl: "https://randomuser.me/api/portraits/women/14.jpg" }, createdAt: "2025-08-01T09:22:00Z" },
          { id: '7ea59594-a840-4b39-9ca1-09c305ca9a30', content: "Helped my acne a lot.", user: { name: "David K", imageUrl: "https://randomuser.me/api/portraits/men/29.jpg" }, createdAt: "2025-08-02T11:18:00Z" },
          { id: '5f3d4fc3-3ccb-4e61-9dc3-3a0e292ecfc9', content: "My dermatologist recommended this.", user: { name: "Lily A", imageUrl: "https://randomuser.me/api/portraits/women/65.jpg" }, createdAt: "2025-08-03T15:45:00Z" },
          { id: '58b72446-be4a-4015-a084-5620c50ff0cb', content: "Great for sensitive skin.", user: { name: "Mark S", imageUrl: "https://randomuser.me/api/portraits/men/11.jpg" }, createdAt: "2025-08-04T17:33:00Z" },
          { id: '7a4e984f-88c7-4d1d-8587-640bb83c3faa', content: "Affordable and effective.", user: { name: "Sophie R", imageUrl: "https://randomuser.me/api/portraits/women/7.jpg" }, createdAt: "2025-08-05T12:00:00Z" }
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
        id: '2be25c99-d173-4ddf-9ed9-12944751cd87',
        name: "PlayStation 5 Console (Disc Edition)",
        description: "Next-gen gaming console with ultra-fast SSD and immersive 4K gaming performance.",
        priceCents: 49999,
        salePriceCents: 49999,
        currency: "USD",
        imageUrl: "https://m.media-amazon.com/images/I/619BkvKW35L._SL1500_.jpg",
        category: "Gaming",
        seller: { name: "GameZone", imageUrl: "https://randomuser.me/api/portraits/men/25.jpg" },
        comments: [
          { id: '27ab9e88-288e-4f71-991b-7ff5aeb37a5f', content: "Graphics are insane.", user: { name: "Alex C", imageUrl: "https://randomuser.me/api/portraits/men/40.jpg" }, createdAt: "2025-08-01T10:10:00Z" },
          { id: '0a11d373-9126-4146-b4fe-6d0d0e6daa56', content: "Controller haptics are game-changing.", user: { name: "Ella P", imageUrl: "https://randomuser.me/api/portraits/women/18.jpg" }, createdAt: "2025-08-02T14:22:00Z" },
          { id: '6522f5c0-23cf-4544-bcc4-9ae159073358', content: "Loads games lightning fast.", user: { name: "Matt B", imageUrl: "https://randomuser.me/api/portraits/men/59.jpg" }, createdAt: "2025-08-03T16:15:00Z" },
          { id: 'f0a95769-e085-465e-ab8b-531cfe70c48b', content: "Worth the hype.", user: { name: "Zara J", imageUrl: "https://randomuser.me/api/portraits/women/42.jpg" }, createdAt: "2025-08-04T12:48:00Z" },
          { id: 'cddebf40-db2e-4dcf-9433-2dcbd9b55b3f', content: "Miles Morales looks amazing!", user: { name: "Kevin N", imageUrl: "https://randomuser.me/api/portraits/men/84.jpg" }, createdAt: "2025-08-05T09:30:00Z" }
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
        id: '338a0880-b7cf-4c10-9ff6-42cf7d3fd280',
        name: "Atomic Habits by James Clear",
        description: "Bestselling guide on building good habits, breaking bad ones, and mastering small behaviors for big results.",
        priceCents: 1999,
        salePriceCents: 1499,
        currency: "USD",
        imageUrl: "https://m.media-amazon.com/images/I/91bYsX41DVL._SL1500_.jpg",
        category: "Books",
        seller: { name: "BookBarn", imageUrl: "https://randomuser.me/api/portraits/women/75.jpg" },
        comments: [
          { id: 'f7669587-a3ab-4a65-8c36-404bfd42939c', content: "Changed my life in small steps.", user: { name: "Olivia P", imageUrl: "https://randomuser.me/api/portraits/women/34.jpg" }, createdAt: "2025-08-01T10:45:00Z" },
          { id: '5f65c0ed-891e-45c7-814e-381ed93b8e24', content: "Easy to apply tips.", user: { name: "Ben T", imageUrl: "https://randomuser.me/api/portraits/men/63.jpg" }, createdAt: "2025-08-02T14:05:00Z" },
          { id: '46ad046d-528d-4f1b-a1cb-335cd914a508', content: "I reread it every year.", user: { name: "Hannah L", imageUrl: "https://randomuser.me/api/portraits/women/27.jpg" }, createdAt: "2025-08-03T16:55:00Z" },
          { id: 'a7c14ac9-cf89-4df5-8c93-38e91d3cdb15', content: "Perfect mix of science and practice.", user: { name: "Ryan M", imageUrl: "https://randomuser.me/api/portraits/men/77.jpg" }, createdAt: "2025-08-04T12:30:00Z" },
          { id: '3644d47c-60ed-4fd5-85be-63fd1948b340', content: "One of the best self-help books.", user: { name: "Julia F", imageUrl: "https://randomuser.me/api/portraits/women/52.jpg" }, createdAt: "2025-08-05T09:20:00Z" }
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
        id: '27328068-88d2-4118-a6bd-fba9ede22002',
        name: "Levi's 501 Original Fit Jeans",
        description: "Classic straight-leg jeans with button fly and durable cotton denim.",
        priceCents: 6999,
        salePriceCents: 5999,
        currency: "USD",
        imageUrl: "https://lsco.scene7.com/is/image/lsco/005010194-front-pdp?$qv_desktop_full$",
        category: "Fashion",
        seller: { name: "StyleHub", imageUrl: "https://randomuser.me/api/portraits/men/92.jpg" },
        comments: [
          { id: '42cfe3f9-0f6a-4d48-9bf4-47debdf9781c', content: "Perfect everyday jeans.", user: { name: "Jack R", imageUrl: "https://randomuser.me/api/portraits/men/38.jpg" }, createdAt: "2025-08-01T12:00:00Z" },
          { id: '2abc7b13-5d51-489f-b48d-ce13fc7f65fa', content: "Fit just right.", user: { name: "Ella S", imageUrl: "https://randomuser.me/api/portraits/women/46.jpg" }, createdAt: "2025-08-02T13:15:00Z" },
          { id: '6599c32a-99e9-4b60-87d8-b5fabf185a73', content: "Quality denim.", user: { name: "David Y", imageUrl: "https://randomuser.me/api/portraits/men/28.jpg" }, createdAt: "2025-08-03T14:25:00Z" },
          { id: '3ea0bf5a-8c32-4e4f-b5e8-8003ffd49c84', content: "Timeless design.", user: { name: "Sophia V", imageUrl: "https://randomuser.me/api/portraits/women/33.jpg" }, createdAt: "2025-08-04T15:40:00Z" },
          { id: 'b6cd360c-2e31-4ca5-9da1-bb8b84b55d9c', content: "Worth the price.", user: { name: "Chris H", imageUrl: "https://randomuser.me/api/portraits/men/44.jpg" }, createdAt: "2025-08-05T16:50:00Z" }
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
        id: '2d663dcb-1e4f-4ced-bd95-63c02f3ce911',
        name: "Wilson Evolution Indoor Basketball",
        description: "High-performance indoor basketball with microfiber composite cover for excellent grip.",
        priceCents: 6499,
        salePriceCents: 5499,
        currency: "USD",
        imageUrl: "https://m.media-amazon.com/images/I/71YlDZyoBJL._AC_SL1500_.jpg",
        category: "Sports",
        seller: { name: "SportX", imageUrl: "https://randomuser.me/api/portraits/men/22.jpg" },
        comments: [
          { id: 'a361d24d-6eda-458c-b290-fdf4e1890d87', content: "Best ball for indoor courts.", user: { name: "Mason G", imageUrl: "https://randomuser.me/api/portraits/men/72.jpg" }, createdAt: "2025-08-01T11:00:00Z" },
          { id: '462db9c4-d162-4399-b3fa-6598b5b9ca8c', content: "Grip is outstanding.", user: { name: "Zoe K", imageUrl: "https://randomuser.me/api/portraits/women/64.jpg" }, createdAt: "2025-08-02T12:30:00Z" },
          { id: 'a3c4b847-aa75-408b-8507-2aa096b2a372', content: "Feels professional.", user: { name: "Noah H", imageUrl: "https://randomuser.me/api/portraits/men/53.jpg" }, createdAt: "2025-08-03T13:45:00Z" },
          { id: '7ccbb178-f060-49ec-92d4-d7b0c0537ade', content: "Great durability.", user: { name: "Ava N", imageUrl: "https://randomuser.me/api/portraits/women/29.jpg" }, createdAt: "2025-08-04T15:00:00Z" },
          { id: 'fd4ed1d0-0903-4a1b-b4e6-e446a2895a77', content: "Bounces perfectly.", user: { name: "Eli J", imageUrl: "https://randomuser.me/api/portraits/men/61.jpg" }, createdAt: "2025-08-05T16:15:00Z" }
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
        id: '4ef5e9e1-5eca-43e2-9cb0-ccbc10cd07aa',
        name: "Dyson V15 Detect Cordless Vacuum",
        description: "Powerful cordless vacuum with laser detection for microscopic dust and up to 60 minutes of run time.",
        priceCents: 74999,
        salePriceCents: 69999,
        currency: "USD",
        imageUrl: "https://m.media-amazon.com/images/I/61oUu7+npZL._AC_SL1500_.jpg",
        category: "Appliances",
        seller: { name: "HomeCare", imageUrl: "https://randomuser.me/api/portraits/women/66.jpg" },
        comments: [
          { id: '57849b41-2072-4e0d-8eff-7fbc83469928', content: "Laser feature is a game changer!", user: { name: "Mia P", imageUrl: "https://randomuser.me/api/portraits/women/48.jpg" }, createdAt: "2025-08-01T09:30:00Z" },
          { id: '035b2ad9-7118-4bc0-9c23-b988bcf3765d', content: "Battery lasts long enough for the whole house.", user: { name: "Jack D", imageUrl: "https://randomuser.me/api/portraits/men/60.jpg" }, createdAt: "2025-08-02T10:15:00Z" },
          { id: 'f234f423-68a3-401c-bc9d-a6e027170546', content: "Very lightweight, easy to maneuver.", user: { name: "Ella C", imageUrl: "https://randomuser.me/api/portraits/women/12.jpg" }, createdAt: "2025-08-03T11:45:00Z" },
          { id: '2c6b4167-9b7d-4ef3-8049-90009ac8bbd1', content: "Picks up pet hair perfectly.", user: { name: "Henry T", imageUrl: "https://randomuser.me/api/portraits/men/31.jpg" }, createdAt: "2025-08-04T13:20:00Z" },
          { id: '5c2aeabd-e3ba-459d-a72e-b527ce804173', content: "Expensive but worth it.", user: { name: "Sofia V", imageUrl: "https://randomuser.me/api/portraits/women/19.jpg" }, createdAt: "2025-08-05T14:55:00Z" }
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
  id: "book-001",
  name: "Atomic Habits",
  description: "A guide by James Clear on building good habits and breaking bad ones through practical strategies.",
  priceCents: 1800,
  salePriceCents: 1500,
  currency: "USD",
  imageUrl: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
  category: "Books",
  seller: {
    name: "Book Haven",
    imageUrl: "https://i.pravatar.cc/100?img=19"
  },
  comments: [
    {
      id: '0bc5ff83-88ae-438b-a441-b751db48b316',
      content: "Life-changing book, easy to read and apply.",
      user: { name: "Sophie R.", imageUrl: "https://i.pravatar.cc/100?img=20" },
      createdAt: "2025-01-01T10:12:00Z"
    },
    {
      id: 'f75efb74-2412-44d0-9002-dd1cdcd9b049',
      content: "Helped me be more consistent with my workouts.",
      user: { name: "Liam W.", imageUrl: "https://i.pravatar.cc/100?img=21" },
      createdAt: "2025-01-03T08:45:00Z"
    },
    {
      id: 'f2f48c5e-10cf-4610-8aac-33a058b1b443',
      content: "Practical and well-written.",
      user: { name: "Clara J.", imageUrl: "https://i.pravatar.cc/100?img=22" },
      createdAt: "2025-01-05T14:30:00Z"
    },
    {
      id: 'cc3beeca-4451-4aad-9e37-0c48e05fd69e',
      content: "A must-read for productivity geeks.",
      user: { name: "Tom K.", imageUrl: "https://i.pravatar.cc/100?img=23" },
      createdAt: "2025-01-06T09:25:00Z"
    },
    {
      id: 'a23dbb3a-6ccb-4445-9320-b14667427d9b',
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
  id: "sport-001",
  name: "Wilson Evolution Basketball",
  description: "Official size indoor basketball with microfiber composite leather for superior grip and feel.",
  priceCents: 6000,
  salePriceCents: 5500,
  currency: "USD",
  imageUrl: "https://m.media-amazon.com/images/I/71f+OXyE4-L._AC_SL1500_.jpg",
  category: "Sports",
  seller: {
    name: "SportZone",
    imageUrl: "https://i.pravatar.cc/100?img=25"
  },
  comments: [
    {
      id: '865aac8b-4d44-49be-a148-2475ab29cd34',
      content: "Great bounce, feels professional.",
      user: { name: "Mark D.", imageUrl: "https://i.pravatar.cc/100?img=26" },
      createdAt: "2025-02-01T09:00:00Z"
    },
    {
      id: '0a8b6261-ca9c-4be2-b78d-046ee60795e4',
      content: "The grip is perfect for indoor courts.",
      user: { name: "Jane L.", imageUrl: "https://i.pravatar.cc/100?img=27" },
      createdAt: "2025-02-02T11:10:00Z"
    },
    {
      id: 'da9f56c7-8fc0-4aed-bede-568c2ca8a501',
      content: "Best basketball I’ve used so far.",
      user: { name: "Chris M.", imageUrl: "https://i.pravatar.cc/100?img=28" },
      createdAt: "2025-02-03T12:45:00Z"
    },
    {
      id: '190c86b5-2d06-467f-b0ff-c546d892cd61',
      content: "A bit pricey but worth it.",
      user: { name: "Alex N.", imageUrl: "https://i.pravatar.cc/100?img=29" },
      createdAt: "2025-02-04T15:25:00Z"
    },
    {
      id: '6a4f3c56-a9a1-4fab-ad80-d6bb75de604b',
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
  id: "beauty-001",
  name: "CeraVe Moisturizing Cream",
  description: "Hydrating cream with ceramides and hyaluronic acid for dry skin.",
  priceCents: 1600,
  salePriceCents: 1500,
  currency: "USD",
  imageUrl: "https://m.media-amazon.com/images/I/71b2qN0oQzL._AC_SL1500_.jpg",
  category: "Beauty",
  seller: {
    name: "GlowHub",
    imageUrl: "https://i.pravatar.cc/100?img=31"
  },
  comments: [
    {
      id: '3262e956-7b78-4306-b742-881be91e79c1',
      content: "Best moisturizer for sensitive skin.",
      user: { name: "Nina V.", imageUrl: "https://i.pravatar.cc/100?img=32" },
      createdAt: "2025-03-01T10:20:00Z"
    },
    {
      id: '834eb81f-96de-4c0a-b3e8-91dbfdcb9eb2',
      content: "My dermatologist recommended this.",
      user: { name: "Ella K.", imageUrl: "https://i.pravatar.cc/100?img=33" },
      createdAt: "2025-03-02T09:10:00Z"
    },
    {
      id: '919ab817-89b6-4451-8396-de5039609462',
      content: "Great for winter dryness.",
      user: { name: "Sophia W.", imageUrl: "https://i.pravatar.cc/100?img=34" },
      createdAt: "2025-03-03T08:40:00Z"
    },
    {
      id: 'aa4acc42-e21b-4a50-8d57-88dc9c7ba7d7',
      content: "Thick but absorbs well.",
      user: { name: "James C.", imageUrl: "https://i.pravatar.cc/100?img=35" },
      createdAt: "2025-03-04T11:00:00Z"
    },
    {
      id: '8415f40d-53e0-423f-a46a-01392997f434',
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
  id: "toy-001",
  name: "LEGO Classic Bricks and Animals",
  description: "1,500-piece LEGO set that lets kids build animals, vehicles, and more with creative play.",
  priceCents: 5000,
  salePriceCents: 4500,
  currency: "USD",
  imageUrl: "https://m.media-amazon.com/images/I/91bR0BBE-UL._AC_SL1500_.jpg",
  category: "Toys",
  seller: {
    name: "ToyLand",
    imageUrl: "https://i.pravatar.cc/100?img=37"
  },
  comments: [
    {
      id: '222852f9-3049-4014-9a7e-e165024f1b1e',
      content: "My kids love building with this set!",
      user: { name: "David P.", imageUrl: "https://i.pravatar.cc/100?img=38" },
      createdAt: "2025-04-01T10:20:00Z"
    },
    {
      id: '51fb608e-2a18-40f1-9c0b-99c8d060b7e8',
      content: "Great for family playtime.",
      user: { name: "Sarah M.", imageUrl: "https://i.pravatar.cc/100?img=39" },
      createdAt: "2025-04-02T09:30:00Z"
    },
    {
      id: '7bdb4f98-19aa-4d4d-a25c-0220e81bc0b6',
      content: "So many possibilities with 1500 pieces!",
      user: { name: "Luke B.", imageUrl: "https://i.pravatar.cc/100?img=40" },
      createdAt: "2025-04-03T14:00:00Z"
    },
    {
      id: '3e0db904-a137-4a8b-b006-8ef0b2584768',
      content: "High quality as always from LEGO.",
      user: { name: "Anna J.", imageUrl: "https://i.pravatar.cc/100?img=41" },
      createdAt: "2025-04-04T16:20:00Z"
    },
    {
      id: '4a88a019-77d7-4a76-8b1a-fe0093d3cff0',
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
    id: '77973a5e-ab52-4663-ae4a-8ce1c4bd5c99',
    name: "Apple iPad Air (5th Gen, 64GB, Wi-Fi)",
    description: "The lightweight and powerful iPad Air with the M1 chip, Liquid Retina display, and Apple Pencil (2nd gen) support.",
    priceCents: 59900,
    salePriceCents: 54900,
    currency: "USD",
    imageUrl: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-202203?wid=940&hei=1112&fmt=png-alpha&.v=1645066724475",
    category: "Electronics",
    seller: {
      name: "Apple Store",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
    },
    comments: [
      { id: '1f48e968-35a9-43fe-80f8-0878efc850b5', content: "Perfect for school and Netflix!", user: { name: "Alex J.", imageUrl: "https://randomuser.me/api/portraits/men/11.jpg" }, createdAt: "2025-07-20" },
      { id: 'f6839107-ae27-4ff0-97aa-58007d12ee34', content: "The M1 chip makes it really fast.", user: { name: "Sophia K.", imageUrl: "https://randomuser.me/api/portraits/women/22.jpg" }, createdAt: "2025-07-22" },
      { id: 'd94113df-9db8-49a5-b764-80805a963114', content: "Battery lasts me 2 days of light use.", user: { name: "Leo P.", imageUrl: "https://randomuser.me/api/portraits/men/33.jpg" }, createdAt: "2025-07-23" },
      { id: 'e8d272b3-534a-400e-b71c-92a6977eefb3', content: "Worth it over the regular iPad.", user: { name: "Emily W.", imageUrl: "https://randomuser.me/api/portraits/women/44.jpg" }, createdAt: "2025-07-25" },
      { id: 'd8944bce-08d1-4900-8f0e-ce683844d2d1', content: "Great for drawing with Apple Pencil.", user: { name: "Ryan S.", imageUrl: "https://randomuser.me/api/portraits/men/55.jpg" }, createdAt: "2025-07-26" }
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
    id: '146af9f3-7c73-40be-8ede-e5dfee4f2cfa',
    name: "Fenty Beauty Gloss Bomb Universal Lip Luminizer",
    description: "A must-have lip gloss with explosive shine, designed to flatter all skin tones.",
    priceCents: 1900,
    salePriceCents: 1900,
    currency: "USD",
    imageUrl: "https://fentybeauty.com/cdn/shop/products/FB_GlossBomb_FUSY_2.jpg?v=1680542466",
    category: "Beauty",
    seller: {
      name: "Fenty Beauty",
      imageUrl: "https://fentybeauty.com/cdn/shop/files/fb-favicon_180x180.png"
    },
    comments: [
      { id: '5c5f50ba-b4b3-4be6-bf70-d7b89f2434f9', content: "Not sticky at all, feels great!", user: { name: "Hannah D.", imageUrl: "https://randomuser.me/api/portraits/women/60.jpg" }, createdAt: "2025-06-15" },
      { id: 'c5e04ef6-549d-43cb-8e56-9efaa1af1a7f', content: "My go-to everyday gloss.", user: { name: "Maya L.", imageUrl: "https://randomuser.me/api/portraits/women/61.jpg" }, createdAt: "2025-06-18" },
      { id: 'ed6968c7-7c1a-4427-941e-2a384425651a', content: "Shine is unreal.", user: { name: "Jade M.", imageUrl: "https://randomuser.me/api/portraits/women/62.jpg" }, createdAt: "2025-06-20" },
      { id: '6f21b0ab-38e8-4843-913e-c4e849d1eda8', content: "Works with any skin tone.", user: { name: "Carla F.", imageUrl: "https://randomuser.me/api/portraits/women/63.jpg" }, createdAt: "2025-06-23" },
      { id: 'f4e9d2aa-5fed-486a-9ad6-a6be1be627ea', content: "Got compliments the first day I wore it.", user: { name: "Olivia B.", imageUrl: "https://randomuser.me/api/portraits/women/64.jpg" }, createdAt: "2025-06-25" }
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
    id: 'af5731fc-a9c0-4223-9c3d-ffb70931e77c',
    name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker (6 Quart)",
    description: "The all-in-one appliance that replaces 7 kitchen devices: pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker, and warmer.",
    priceCents: 9999,
    salePriceCents: 8999,
    currency: "USD",
    imageUrl: "https://m.media-amazon.com/images/I/81kB0r6hZNL._AC_SL1500_.jpg",
    category: "Home & Kitchen",
    seller: {
      name: "Instant Brands",
      imageUrl: "https://instantpot.com/wp-content/themes/instant-pot/images/InstantPot_Logo.png"
    },
    comments: [
      { id: 'f558145f-12a7-4fe8-8c84-7cb7c908c819', content: "Game-changer for weeknight dinners.", user: { name: "Tom R.", imageUrl: "https://randomuser.me/api/portraits/men/70.jpg" }, createdAt: "2025-04-10" },
      { id: '8bbeeb77-7ca5-4230-b889-770eb3be2837', content: "Cooks rice perfectly.", user: { name: "Alice V.", imageUrl: "https://randomuser.me/api/portraits/women/71.jpg" }, createdAt: "2025-04-12" },
      { id: 'e233075c-4d74-48df-a396-c257101b1a33', content: "Replaced 3 of my old appliances.", user: { name: "George N.", imageUrl: "https://randomuser.me/api/portraits/men/72.jpg" }, createdAt: "2025-04-13" },
      { id: '5c7c5da9-bc58-4666-8cb4-9092088a5739', content: "Great for meal prepping.", user: { name: "Maria S.", imageUrl: "https://randomuser.me/api/portraits/women/73.jpg" }, createdAt: "2025-04-15" },
      { id: 'c64299f1-1127-4002-b2a2-d6cbef7c6050', content: "Wish I bought this sooner.", user: { name: "Liam B.", imageUrl: "https://randomuser.me/api/portraits/men/74.jpg" }, createdAt: "2025-04-17" }
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
    id: 'd8ae3d0d-b756-4497-84cc-c509ba651c45',
    name: "Wilson Evolution Indoor Basketball",
    description: "The #1 indoor game basketball in high schools and colleges, known for its superior grip and feel.",
    priceCents: 6999,
    salePriceCents: 5999,
    currency: "USD",
    imageUrl: "https://m.media-amazon.com/images/I/71pb-otGhQL._AC_SL1500_.jpg",
    category: "Sports",
    seller: {
      name: "Wilson Sporting Goods",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Wilson_logo.svg"
    },
    comments: [
      { id: '1a831b1b-49bf-48f3-81fd-507f9a17073e', content: "The grip is amazing!", user: { name: "Chris P.", imageUrl: "https://randomuser.me/api/portraits/men/80.jpg" }, createdAt: "2025-02-10" },
      { id: 'd104f9d5-f4ef-4a6f-892e-21fbff55e4eb', content: "Used in my college league.", user: { name: "Tyler M.", imageUrl: "https://randomuser.me/api/portraits/men/81.jpg" }, createdAt: "2025-02-12" },
      { id: 'b70336d0-7a9e-4581-847f-78b23a816ba7', content: "Durable and feels premium.", user: { name: "Josh L.", imageUrl: "https://randomuser.me/api/portraits/men/82.jpg" }, createdAt: "2025-02-14" },
      { id: '0ae482d7-e166-4f84-a601-6126a8232d3a', content: "Perfect bounce.", user: { name: "Megan D.", imageUrl: "https://randomuser.me/api/portraits/women/83.jpg" }, createdAt: "2025-02-15" },
      { id: 'b2924afc-a758-4180-ba84-4fa5e88c3255', content: "Worth the money.", user: { name: "Ethan H.", imageUrl: "https://randomuser.me/api/portraits/men/84.jpg" }, createdAt: "2025-02-17" }
    ],
    onSale: true,
    inStock: true,
    faq: [
      { question: "Is it outdoor friendly?", answer: "This ball is designed for indoor use only." },
      { question: "What size is it?", answer: "It is size 7 (29.5 inches)." }
    ]
  }
]
    
  

export function formatPrice(priceCents: number, currency: string = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(priceCents / 100)
}