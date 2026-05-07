import { useRef, useEffect } from "react";

interface UseSwipeToCloseProps {
  isOpen: boolean;
  onClose: () => void;
  threshold?: number;
}

export const useSwipeToClose = ({
  isOpen,
  onClose,
  threshold = 80,
}: UseSwipeToCloseProps) => {
  const touchStartX = useRef<number>(0);
  const touchCurrentX = useRef<number>(0);
  const touchStartTime = useRef<number>(0);
  const isSwiping = useRef<boolean>(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchCurrentX.current = touchStartX.current;
      touchStartTime.current = Date.now();
      isSwiping.current = true;

      if (elementRef.current) {
        elementRef.current.style.transition = "none";
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isSwiping.current || touchStartX.current === 0) return;

      touchCurrentX.current = e.touches[0].clientX;
      const deltaX = touchCurrentX.current - touchStartX.current;

      if (deltaX > 0 && elementRef.current) {
        e.preventDefault();
        const maxTranslate = window.innerWidth * 0.4;
        const translateX = Math.min(deltaX, maxTranslate);
        elementRef.current.style.transform = `translate3d(${translateX}px, 0, 0)`;
      }
    };

    const handleTouchEnd = () => {
      if (!isSwiping.current) {
        isSwiping.current = false;
        return;
      }

      const deltaX = touchCurrentX.current - touchStartX.current;
      const deltaTime = Date.now() - touchStartTime.current;
      const velocity = deltaX / deltaTime;

      if (elementRef.current) {
        elementRef.current.style.transition =
          "transform 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)";

        if (deltaX > threshold || velocity > 0.5) {
          onClose();
        } else {
          elementRef.current.style.transform = "";
        }
      }

      touchStartX.current = 0;
      touchCurrentX.current = 0;
      touchStartTime.current = 0;
      isSwiping.current = false;
    };

    const element = elementRef.current;

    element?.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    element?.addEventListener("touchmove", handleTouchMove, { passive: false });
    element?.addEventListener("touchend", handleTouchEnd);
    element?.addEventListener("touchcancel", handleTouchEnd);

    return () => {
      element?.removeEventListener("touchstart", handleTouchStart);
      element?.removeEventListener("touchmove", handleTouchMove);
      element?.removeEventListener("touchend", handleTouchEnd);
      element?.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, [isOpen, onClose, threshold]);

  return elementRef;
};
