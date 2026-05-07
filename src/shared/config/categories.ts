export const categories = [
  {
    label: "Clothing & Apparel",
    description: "Brands of the moment",
    slug: "clothes",
  },
  {
    label: "Sneakers & Shoes",
    description: "Trending now",
    slug: "shoes",
  },
  {
    label: "Bags & Luggage",
    description: "Enjoy 25% off new season",
    slug: "bags",
  },
  {
    label: "Accessories",
    description: "Featured products",
    slug: "accessories",
  },
  {
    label: "Jewellery & Luxury",
    description: "Best sneakers from top brands",
    slug: "jewellery",
  },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];
