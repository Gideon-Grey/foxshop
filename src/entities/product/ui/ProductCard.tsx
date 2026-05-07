"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "../model/types";
import { useCart } from "@/features/cart/lib/useCart";
import { imageSizes } from "@/shared/lib/imageConfig";
import styles from "./ProductCard.module.scss";

interface Props {
  product: Product;
  variant?: "default" | "promo";
}
export const ProductCard = ({ product, variant = "default" }: Props) => {
  const { add } = useCart();

  return (
    <Link href={`/product/${product.id}`} className={styles.card}>
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
        loading="lazy"
        sizes={imageSizes.product}
        className={styles.image}
      />

      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={`${styles.price} ${styles[variant]}`}>{product.price}$</p>
      </div>

      <button
        className={styles.button}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          add(product);
        }}
      >
        Add to cart
      </button>
    </Link>
  );
};
