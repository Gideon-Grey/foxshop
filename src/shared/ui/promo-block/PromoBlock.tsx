"use client";

import Image from "next/image";
import { imageSizes } from "@/shared/lib/imageConfig";
import styles from "./PromoBlock.module.scss";

interface Props {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export const PromoBlock = ({
  title,
  description,
  image,
  reverse = false,
}: Props) => {
  return (
    <div className={`${styles.block} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes={imageSizes.product}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
