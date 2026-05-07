import { CategorySlug } from "@/shared/config/categories";

export interface ProductConfig {
  category: CategorySlug;
  names: string[];
  images: string[];
  description: string;
  basePrice: number;
  startId: number;
}

export const productConfigs: ProductConfig[] = [
  {
    category: "shoes",

    names: [
      "Nike Air Force 1",
      "Adidas Ultraboost",
      "Puma RS-X",
      "New Balance 550",
      "Reebok Classic",
      "Converse Chuck Taylor",
      "Vans Old Skool",
      "Nike Air Max 90",
      "Jordan Retro High",
      "Asics Gel-Lyte",
    ],

    images: [
      "/images/shoes/adidas-ultraboost.jpg",
      "/images/shoes/nike-air-force-1.jpg",
      "/images/shoes/puma-rs-x.jpg",
      "/images/shoes/new-balance-550.jpg",
      "/images/shoes/reebok-classic.jpg",
      "/images/shoes/converse-chuck-taylor.jpg",
      "/images/shoes/vans-old-skool.jpg",
      "/images/shoes/nike-air-max-90.jpg",
      "/images/shoes/jordan-retro-high.jpg",
      "/images/shoes/asics-gel-lyte.jpg",
    ],

    description: "Comfortable sneakers for everyday wear",

    basePrice: 60,

    startId: 100,
  },

  {
    category: "clothes",

    names: [
      "Basic T-Shirt",
      "Oversized Hoodie",
      "Slim Fit Jeans",
      "Polo Shirt",
      "Denim Jacket",
      "Cargo Pants",
      "Sweatshirt",
      "Bomber Jacket",
      "Linen Shirt",
      "Winter Coat",
    ],

    images: [
      "/images/clothes/hoodie-1.jpg",
      "/images/clothes/tshirt-1.jpg",
      "/images/clothes/jeans-1.jpg",
      "/images/clothes/jacket-1.jpg",
      "/images/clothes/sweater-1.jpg",
      "/images/clothes/shirt-1.jpg",
      "/images/clothes/joggers-1.jpg",
      "/images/clothes/coat-1.jpg",
      "/images/clothes/polo-1.jpg",
      "/images/clothes/shorts-1.jpg",
    ],

    description: "Stylish clothes for everyday fashion",

    basePrice: 35,

    startId: 200,
  },

  {
    category: "bags",

    names: [
      "Leather Backpack",
      "Travel Bag",
      "Mini Crossbody",
      "Classic Handbag",
      "Canvas Tote",
      "Laptop Backpack",
      "Gym Bag",
      "Street Backpack",
      "Business Briefcase",
      "Weekend Bag",
    ],

    images: [
      "/images/bags/backpack-1.jpg",
      "/images/bags/handbag-1.jpg",
      "/images/bags/tote-1.jpg",
      "/images/bags/crossbody-1.jpg",
      "/images/bags/laptop-bag-1.jpg",
      "/images/bags/travel-bag-1.jpg",
      "/images/bags/clutch-1.jpg",
      "/images/bags/shoulder-bag-1.jpg",
      "/images/bags/mini-bag-1.jpg",
      "/images/bags/leather-bag-1.jpg",
    ],

    description: "Modern bags for travel and everyday use",

    basePrice: 45,

    startId: 300,
  },

  {
    category: "accessories",

    names: [
      "Classic Sunglasses",
      "Luxury Watch",
      "Leather Belt",
      "Baseball Cap",
      "Wallet",
      "Silk Scarf",
      "Bracelet",
      "Minimal Ring",
      "Earrings",
      "Street Cap",
    ],

    images: [
      "/images/accessories/sunglasses-1.jpg",
      "/images/accessories/watch-1.jpg",
      "/images/accessories/belt-1.jpg",
      "/images/accessories/hat-1.jpg",
      "/images/accessories/wallet-1.jpg",
      "/images/accessories/scarf-1.jpg",
      "/images/accessories/bracelet-1.jpg",
      "/images/accessories/ring-1.jpg",
      "/images/accessories/earrings-1.jpg",
      "/images/accessories/cap-1.jpg",
    ],

    description: "Stylish accessory for everyday use",

    basePrice: 15,

    startId: 400,
  },

  {
    category: "jewellery",

    names: [
      "Gold Ring",
      "Silver Necklace",
      "Diamond Earrings",
      "Pearl Bracelet",
      "Luxury Chain",
      "Minimal Pendant",
      "Elegant Brooch",
      "Classic Earrings",
      "Gemstone Ring",
      "Premium Bracelet",
    ],

    images: [
      "/images/jewellery/ring-1.jpg",
      "/images/jewellery/necklace-1.jpg",
      "/images/jewellery/bracelet-1.jpg",
      "/images/jewellery/earrings-1.jpg",
      "/images/jewellery/chain-1.jpg",
      "/images/jewellery/pendant-1.jpg",
      "/images/jewellery/watch-1.jpg",
      "/images/jewellery/brooch-1.jpg",
      "/images/jewellery/set-1.jpg",
      "/images/jewellery/diamond-1.jpg",
    ],

    description: "Elegant jewellery for premium style",

    basePrice: 120,

    startId: 500,
  },
];
