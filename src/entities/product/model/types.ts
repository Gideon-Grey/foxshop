import { CategorySlug } from "@/shared/config/categories";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: CategorySlug;
  image: string;
}
