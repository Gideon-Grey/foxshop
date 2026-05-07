"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";
import { closeCart } from "@/features/cart/model/uiSlice";
import { useCart } from "@/features/cart/lib/useCart";
import styles from "./CartDrawer.module.scss";

export const CartDrawer = () => {
  const isOpen = useSelector((state: RootState) => state.ui.isCartOpen);
  const dispatch = useDispatch();

  const { items, totalPrice, increase, decrease, remove } = useCart();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch(closeCart());
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, dispatch]);

  return (
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={() => dispatch(closeCart())} />
      )}

      <div className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
        <div className={styles.header}>Your cart</div>

        <div className={styles.list}>
          {items.length === 0 && <p>Cart is empty</p>}

          {items.map((item) => (
            <div key={item.product.id} className={styles.item}>
              <img src={item.product.image} className={styles.image} />

              <div className={styles.info}>
                <div className={styles.title}>{item.product.title}</div>
                <div className={styles.price}>{item.product.price}$</div>

                <div className={styles.controls}>
                  <button
                    className={styles.qtyBtn}
                    onClick={() => decrease(item.product.id)}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    className={styles.qtyBtn}
                    onClick={() => increase(item.product.id)}
                  >
                    +
                  </button>

                  <span
                    className={styles.remove}
                    onClick={() => remove(item.product.id)}
                  >
                    ✕
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <div className={styles.total}>Total: {totalPrice.toFixed(2)}$</div>

          <button className={styles.checkout}>Checkout</button>
        </div>
      </div>
    </>
  );
};
