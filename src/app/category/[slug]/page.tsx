import { ProductList } from "@/widgets/product-list/ui/ProductList";
import { productsByCategory } from "@/shared/mock/products";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const normalizedSlug = slug.toLowerCase().trim();

  const products =
    productsByCategory[normalizedSlug as keyof typeof productsByCategory] || [];

  return (
    <div style={{ padding: "20px" }}>
      <ProductList products={products} />
    </div>
  );
}
