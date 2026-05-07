"use client";

import { Product } from "../../model/types";
import { useCart } from "@/features/cart/lib/useCart";
import styles from "./ProductDetails.module.scss";

export const ProductDetails = ({ product }: { product: Product }) => {
  const { add } = useCart();

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={product.image} alt={product.title} className={styles.image} />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.description}>{product.description}</p>
        <h2 className={styles.price}>{product.price}$</h2>
        <button onClick={() => add(product)} className={styles.addToCartBtn}>
          Add to cart
        </button>
      </div>
    </div>
  );
};
