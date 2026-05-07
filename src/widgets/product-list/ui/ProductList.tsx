"use client";

import { useSelector } from "react-redux";
import { useMemo } from "react";
import { Product } from "@/entities/product/model/types";
import { ProductCard } from "@/entities/product/ui/ProductCard/ProductCard";
import { selectSearchQuery } from "@/features/search/model/selectors";
import { useInfiniteScroll } from "@/shared/lib/useInfiniteScroll";
import styles from "./ProductList.module.scss";

interface Props {
  products: Product[];
  variant?: "default" | "promo";
}

export const ProductList = ({ products, variant = "default" }: Props) => {
  const query = useSelector(selectSearchQuery);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [products, query]);

  const { visibleItems, loaderRef } = useInfiniteScroll(
    filteredProducts,
    10,
    10
  );

  if (filteredProducts.length === 0) {
    return <div>No items</div>;
  }

  return (
    <>
      <div className={styles.grid}>
        {visibleItems.map((product) => (
          <ProductCard key={product.id} product={product} variant={variant} />
        ))}
      </div>

      <div ref={loaderRef} style={{ height: 40 }} />
    </>
  );
};
