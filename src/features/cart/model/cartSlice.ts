import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/entities/product/model/types";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const existing = state.items.find(
        (item) => item.product.id === action.payload.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          product: action.payload,
          quantity: 1,
        });
      }
    },
    increaseQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find((i) => i.product.id === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find((i) => i.product.id === action.payload);

      if (!item) return;

      item.quantity -= 1;

      if (item.quantity <= 0) {
        state.items = state.items.filter(
          (i) => i.product.id !== action.payload
        );
      }
    },
    hydrate(state, action: PayloadAction<CartState | undefined>) {
      if (!action.payload) return state;
      return action.payload;
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  hydrate,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
