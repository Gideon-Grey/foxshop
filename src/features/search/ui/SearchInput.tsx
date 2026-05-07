"use client";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../model/slice";
import { useDebounce } from "../lib/useDebounce";
import styles from "./SearchInput.module.scss";

export const SearchInput = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const debounced = useDebounce(value, 400);

  useEffect(() => {
    dispatch(setQuery(debounced));
  }, [debounced, dispatch]);

  return (
    <input
      type="text"
      placeholder="What are you looking for?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={styles.search}
    />
  );
};
