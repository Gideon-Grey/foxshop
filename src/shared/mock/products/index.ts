import { productConfigs } from "./config";
import { generateProducts } from "./generateProducts";

export const productsByCategory = Object.fromEntries(
  productConfigs.map((config) => [config.category, generateProducts(config)])
);
