"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { toggleCart } from "@/features/cart/model/uiSlice";
import { useCart } from "@/features/cart/lib/useCart";
import { SearchInput } from "@/features/search/ui/SearchInput";
import { usePathname } from "next/navigation";
import { categories } from "@/shared/config/categories";
import styles from "./Header.module.scss";

export const Header = () => {
  const dispatch = useDispatch();
  const { totalCount } = useCart();
  const pathname = usePathname() || "";

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.spacer} />

        <Link href="/" className={styles.logo}>
          FOXSHOP
        </Link>

        <div className={styles.actions}>
          <SearchInput />

          <button
            onClick={() => dispatch(toggleCart())}
            className={styles.cartButton}
          >
            🛒 {totalCount}
          </button>
        </div>
      </div>

      <nav className={styles.nav}>
        {categories.map((cat) => {
          const isActive = pathname.includes(cat.slug);

          return (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className={`${styles.category} ${isActive ? styles.active : ""}`}
            >
              {cat.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
