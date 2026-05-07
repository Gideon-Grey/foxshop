"use client";

import { Provider } from "react-redux";
import { store } from "../store/store";
import { useEffect } from "react";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const saved = localStorage.getItem("cart");

    if (saved) {
      store.dispatch({
        type: "cart/hydrate",
        payload: JSON.parse(saved),
      });
    }

    const unsubscribe = store.subscribe(() => {
      const state = store.getState();
      localStorage.setItem("cart", JSON.stringify(state.cart));
    });

    return () => unsubscribe();
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
