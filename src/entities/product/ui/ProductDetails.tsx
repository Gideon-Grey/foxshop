"use client";

import { Product } from "../model/types";
import { useCart } from "@/features/cart/lib/useCart";

export const ProductDetails = ({ product }: { product: Product }) => {
  const { add } = useCart();

  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <img
        src={product.image}
        style={{ width: "400px", objectFit: "contain" }}
      />

      <div>
        <h1>{product.title}</h1>

        <p style={{ margin: "16px 0" }}>{product.description}</p>

        <h2>{product.price}$</h2>

        <button
          onClick={() => add(product)}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
