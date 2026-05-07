"use client";

import { ProductList } from "@/widgets/product-list/ui/ProductList";
import { ProductListSkeleton } from "@/widgets/product-list/ui/ProductListSkeleton";
import { PromoBlock } from "@/shared/ui/promo-block/PromoBlock";
import { productsByCategory } from "@/shared/mock/products";
import { getRandomItems } from "@/shared/lib/getRandomItems";
import { homeLayout } from "@/shared/config/homeLayout";
import styles from "./page.module.scss";

export default function HomePage() {
  const loading = false;

  if (loading) {
    return (
      <div style={{ padding: 20 }}>
        <ProductListSkeleton />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {homeLayout.map((block, index) => {
        if (block.type === "promo") {
          return (
            <PromoBlock
              key={index}
              title={block.title}
              description={block.description}
              image={block.image}
            />
          );
        }

        if (block.type === "section") {
          const products = productsByCategory[block.category] || [];

          const randomProducts = getRandomItems(products, 5);

          return (
            <div key={block.category}>
              <section className={styles.section}>
                <h2 className={styles.title}>{block.title}</h2>

                <ProductList products={randomProducts} variant="promo" />
              </section>

              {block.promo && (
                <PromoBlock
                  title={block.promo.title}
                  description={block.promo.description}
                  image={block.promo.image}
                  reverse={index % 2 === 1}
                />
              )}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
