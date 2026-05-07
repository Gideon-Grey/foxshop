"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { closeCart } from "@/features/cart/model/uiSlice";
import { useCart } from "@/features/cart/lib/useCart";
import { useSwipeToClose } from "@/shared/lib/useSwipeToClose";
import styles from "./CartDrawer.module.scss";

export const CartDrawer = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.ui.isCartOpen);
  const { items, totalPrice, increase, decrease, remove } = useCart();

  const drawerRef = useSwipeToClose({
    isOpen,
    onClose: () => dispatch(closeCart()),
    threshold: 50,
  });

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch(closeCart());
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, dispatch]);

  const handleClose = () => {
    dispatch(closeCart());
  };

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={handleClose} />}

      <div
        ref={drawerRef}
        className={`${styles.drawer} ${isOpen ? styles.open : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className={styles.header}>
          <span>Your cart ({items.length})</span>
          <button
            onClick={handleClose}
            className={styles.closeBtn}
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        <div className={styles.list}>
          {items.length === 0 && (
            <div className={styles.empty}>
              <p>Cart is empty</p>
              <button onClick={handleClose} className={styles.continueBtn}>
                Continue shopping
              </button>
            </div>
          )}

          {items.map((item) => (
            <div key={item.product.id} className={styles.item}>
              <img
                src={item.product.image}
                className={styles.image}
                alt={item.product.title}
                loading="lazy"
              />

              <div className={styles.info}>
                <div className={styles.title}>{item.product.title}</div>
                <div className={styles.price}>{item.product.price}$</div>

                <div className={styles.controls}>
                  <button
                    className={styles.qtyBtn}
                    onClick={() => decrease(item.product.id)}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>

                  <span className={styles.quantity}>{item.quantity}</span>

                  <button
                    className={styles.qtyBtn}
                    onClick={() => increase(item.product.id)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>

                  <button
                    className={styles.remove}
                    onClick={() => remove(item.product.id)}
                    aria-label="Remove item"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.total}>
              Total: <span>{totalPrice.toFixed(2)}$</span>
            </div>
            <button
              className={styles.checkout}
              aria-label="Proceed to checkout"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};
