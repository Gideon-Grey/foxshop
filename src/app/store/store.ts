import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "@/features/cart/model/cartSlice";
import { uiReducer } from "@/features/cart/model/uiSlice";
import { searchReducer } from "@/features/search/model/slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
