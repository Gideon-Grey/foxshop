import { ProductListSkeleton } from "@/widgets/product-list/ui/ProductListSkeleton";

export default function Loading() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>Loading category...</h1>

      <ProductListSkeleton />
    </div>
  );
}
