import { productsByCategory } from "@/shared/mock/products";
import { notFound } from "next/navigation";
import { ProductDetails } from "@/entities/product/ui/ProductDetails";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const productId = Number(id);

  const allProducts = Object.values(productsByCategory).flat();

  const product = allProducts.find((p) => p.id === productId);

  if (!product) return notFound();

  return (
    <div style={{ padding: "20px" }}>
      <ProductDetails product={product} />
    </div>
  );
}
