import { useRef, useEffect } from "react";

interface UseSwipeToCloseProps {
  isOpen: boolean;
  onClose: () => void;
  threshold?: number;
}

export const useSwipeToClose = ({
  isOpen,
  onClose,
  threshold = 50,
}: UseSwipeToCloseProps) => {
  const touchStartX = useRef<number>(0);
  const touchCurrentX = useRef<number>(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchCurrentX.current = touchStartX.current;

      if (elementRef.current) {
        elementRef.current.style.transition = "none";
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartX.current === 0) return;

      touchCurrentX.current = e.touches[0].clientX;
      const deltaX = touchCurrentX.current - touchStartX.current;

      if (deltaX > 0 && elementRef.current) {
        e.preventDefault();
        const translateX = Math.min(deltaX, 300);
        elementRef.current.style.transform = `translate3d(${translateX}px, 0, 0)`;
      }
    };

    const handleTouchEnd = () => {
      const deltaX = touchCurrentX.current - touchStartX.current;

      if (elementRef.current) {
        elementRef.current.style.transition = "transform 0.3s ease";

        if (deltaX > threshold) {
          onClose();
        } else {
          elementRef.current.style.transform = "";
        }
      }

      touchStartX.current = 0;
      touchCurrentX.current = 0;
    };

    const element = elementRef.current;

    element?.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    element?.addEventListener("touchmove", handleTouchMove, { passive: false });
    element?.addEventListener("touchend", handleTouchEnd);

    return () => {
      element?.removeEventListener("touchstart", handleTouchStart);
      element?.removeEventListener("touchmove", handleTouchMove);
      element?.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isOpen, onClose, threshold]);

  return elementRef;
};
