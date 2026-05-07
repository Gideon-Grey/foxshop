export const homeLayout = [
  {
    type: "promo",
    title: "Mega Sale",
    description: "Up to 70% off on selected items",
    image: "/images/promo/main-banner.jpg",
  },
  {
    type: "section",
    title: "Stylish clothes for everyday fashion",
    category: "clothes",
    promo: {
      title: "Winter Clothes Sale",
      description: "Up to 50% off jackets & hoodies",
      image: "/images/promo/clothes.jpg",
    },
  },
  {
    type: "section",
    title: "Comfortable sneakers for everyday wear",
    category: "shoes",
    promo: {
      title: "Sneakers Drop",
      description: "New arrivals from Nike & Adidas",
      image: "/images/promo/shoes.jpg",
    },
  },
  {
    type: "section",
    title: "Modern bags for travel and everyday use",
    category: "bags",
    promo: {
      title: "Luxury Bags",
      description: "Premium leather collection",
      image: "/images/promo/bags.jpg",
    },
  },
  {
    type: "section",
    title: "Stylish accessory for everyday use",
    category: "accessories",
    promo: {
      title: "Accessories Deals",
      description: "Complete your look",
      image: "/images/promo/accessories.jpg",
    },
  },
  {
    type: "section",
    title: "Elegant jewellery for premium style",
    category: "jewellery",
    promo: {
      title: "Gold & Silver Collection",
      description: "Elegant jewellery discounts",
      image: "/images/promo/jewellery.jpg",
    },
  },
] as const;
