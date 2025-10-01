export const products = [
  {
    id: 1,
    name: "Silk Elegance Scarf",
    price: 89.99,
    originalPrice: 120.00,
    image: "https://images.unsplash.com/photo-1518230651651-1cda1b67c9b6?w=800&h=800&fit=crop&auto=format&q=80",
    images: [
      "https://images.unsplash.com/photo-1518230651651-1cda1b67c9b6?w=800&h=800&fit=crop&auto=format&q=80",
      "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?w=800&h=800&fit=crop&auto=format&q=80"
    ],
    category: "silk",
    color: "navy",
    material: "silk",
    description: "Luxurious silk scarf with elegant patterns, perfect for any occasion.",
    inStock: true,
    rating: 4.8,
    reviews: 124,
    featured: true
  },
  {
    id: 2,
    name: "Cashmere Winter Wrap",
    price: 149.99,
    originalPrice: 199.00,
    image: "https://images.unsplash.com/photo-1517451330947-7809dead78d9?w=800&h=800&fit=crop&auto=format&q=80",
    images: [
      "https://images.unsplash.com/photo-1517451330947-7809dead78d9?w=800&h=800&fit=crop&auto=format&q=80"
    ],
    category: "cashmere",
    color: "gray",
    material: "cashmere",
    description: "Ultra-soft cashmere wrap for the coldest days.",
    inStock: true,
    rating: 4.9,
    reviews: 89,
    featured: true
  },
  {
    id: 3,
    name: "Floral Print Scarf",
    price: 45.99,
    originalPrice: 65.00,
    image: "https://images.unsplash.com/photo-1520975829216-87470b373ccc?w=800&h=800&fit=crop&auto=format&q=80",
    images: [
      "https://images.unsplash.com/photo-1520975829216-87470b373ccc?w=800&h=800&fit=crop&auto=format&q=80"
    ],
    category: "cotton",
    color: "multicolor",
    material: "cotton",
    description: "Beautiful floral print scarf made from premium cotton.",
    inStock: true,
    rating: 4.6,
    reviews: 67,
    featured: false
  },
  {
    id: 4,
    name: "Luxury Pashmina Shawl",
    price: 199.99,
    originalPrice: 299.00,
    image: "https://images.unsplash.com/photo-1520975782036-6f8f6b1c06b3?w=800&h=800&fit=crop&auto=format&q=80",
    images: [
      "https://images.unsplash.com/photo-1520975782036-6f8f6b1c06b3?w=800&h=800&fit=crop&auto=format&q=80"
    ],
    category: "pashmina",
    color: "cream",
    material: "pashmina",
    description: "Authentic pashmina shawl with intricate handwoven details.",
    inStock: true,
    rating: 4.9,
    reviews: 156,
    featured: true
  },
  {
    id: 5,
    name: "Geometric Pattern Scarf",
    price: 65.99,
    originalPrice: 85.00,
    image: "https://images.unsplash.com/photo-1515542706656-8e6ef17a1521?w=800&h=800&fit=crop&auto=format&q=80",
    images: [
      "https://images.unsplash.com/photo-1515542706656-8e6ef17a1521?w=800&h=800&fit=crop&auto=format&q=80"
    ],
    category: "polyester",
    color: "black",
    material: "polyester",
    description: "Modern geometric pattern scarf with bold designs.",
    inStock: true,
    rating: 4.4,
    reviews: 43,
    featured: false
  },
  {
    id: 6,
    name: "Vintage Style Scarf",
    price: 75.99,
    originalPrice: 95.00,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&h=800&fit=crop&auto=format&q=80",
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&h=800&fit=crop&auto=format&q=80"
    ],
    category: "wool",
    color: "burgundy",
    material: "wool",
    description: "Classic vintage style scarf with timeless appeal.",
    inStock: true,
    rating: 4.7,
    reviews: 78,
    featured: false
  },
  {
    id: 7,
    name: "Lightweight Summer Scarf",
    price: 35.99,
    originalPrice: 50.00,
    image: "https://images.unsplash.com/photo-1606036573937-43aecd0ed6a5?w=800&h=800&fit=crop&auto=format&q=80",
    images: [
      "https://images.unsplash.com/photo-1606036573937-43aecd0ed6a5?w=800&h=800&fit=crop&auto=format&q=80"
    ],
    category: "linen",
    color: "white",
    material: "linen",
    description: "Breathable linen scarf perfect for warm weather.",
    inStock: true,
    rating: 4.5,
    reviews: 92,
    featured: false
  },
  {
    id: 8,
    name: "Embroidered Silk Scarf",
    price: 125.99,
    originalPrice: 150.00,
    image: "https://images.unsplash.com/photo-1601925260369-0b0b0b0b0b0b?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1601925260369-0b0b0b0b0b0b?w=400&h=400&fit=crop"
    ],
    category: "silk",
    color: "emerald",
    material: "silk",
    description: "Hand-embroidered silk scarf with intricate details.",
    inStock: true,
    rating: 4.8,
    reviews: 134,
    featured: true
  }
];

export const categories = [
  { id: 'silk', name: 'Silk', count: 2 },
  { id: 'cashmere', name: 'Cashmere', count: 1 },
  { id: 'cotton', name: 'Cotton', count: 1 },
  { id: 'pashmina', name: 'Pashmina', count: 1 },
  { id: 'polyester', name: 'Polyester', count: 1 },
  { id: 'wool', name: 'Wool', count: 1 },
  { id: 'linen', name: 'Linen', count: 1 }
];

export const colors = [
  'navy', 'gray', 'multicolor', 'cream', 'black', 'burgundy', 'white', 'emerald'
];

export const materials = [
  'silk', 'cashmere', 'cotton', 'pashmina', 'polyester', 'wool', 'linen'
];


