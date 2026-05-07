"use client";

import { useEffect, useRef, useState } from "react";

export const useInfiniteScroll = <T>(
  items: T[],
  initialCount = 12,
  step = 8
) => {
  const [visibleItems, setVisibleItems] = useState<T[]>(
    items.slice(0, initialCount)
  );

  const loaderRef = useRef<HTMLDivElement | null>(null);

  const loadMore = () => {
    setVisibleItems((prev) => {
      const next = items.slice(0, prev.length + step);
      return next;
    });
  };

  useEffect(() => {
    setVisibleItems(items.slice(0, initialCount));
  }, [items]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMore();
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [items]);

  return { visibleItems, loaderRef };
};
