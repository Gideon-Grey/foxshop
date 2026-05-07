"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotalPrice,
  selectCartTotalCount,
} from "@/features/cart/model/selectors";
import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/features/cart/model/cartSlice";
import { Product } from "@/entities/product/model/types";

export const useCart = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const totalCount = useSelector(selectCartTotalCount);

  return {
    items,
    totalPrice,
    totalCount,

    add: (product: Product) => dispatch(addToCart(product)),
    remove: (id: number) => dispatch(removeFromCart(id)),
    increase: (id: number) => dispatch(increaseQuantity(id)),
    decrease: (id: number) => dispatch(decreaseQuantity(id)),
  };
};
