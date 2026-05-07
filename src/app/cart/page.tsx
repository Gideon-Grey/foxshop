"use client";

import { useCart } from "@/features/cart/lib/useCart";

export default function CartPage() {
  const { items, totalPrice, increase, decrease, remove } = useCart();

  if (items.length === 0) {
    return <div style={{ padding: 20 }}>Cart is empty</div>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Cart</h1>

      {items.map((item) => (
        <div key={item.product.id} style={{ marginBottom: 10 }}>
          <h3>{item.product.title}</h3>
          <p>{item.product.price}$</p>

          <p>Quantity: {item.quantity}</p>

          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => decrease(item.product.id)}>-</button>
            <button onClick={() => increase(item.product.id)}>+</button>
            <button onClick={() => remove(item.product.id)}>Remove</button>
          </div>
        </div>
      ))}

      <h2 style={{ marginTop: 20 }}>Total: {totalPrice.toFixed(2)}$</h2>
    </div>
  );
}
