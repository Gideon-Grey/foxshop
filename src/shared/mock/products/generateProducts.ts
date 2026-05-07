import { Product } from "@/entities/product/model/types";
import { ProductConfig } from "./config";

export const generateProducts = (
  config: ProductConfig,
  count = 40
): Product[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: config.startId + i,

    title: `${config.names[i % config.names.length]} ${i + 1}`,

    price: config.basePrice + (i % 10) * 5 + i,

    description: config.description,

    category: config.category,

    image: config.images[i % config.images.length],
  }));
};
