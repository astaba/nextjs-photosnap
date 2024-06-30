import { useState, useEffect } from "react";

export default function useScrollRate() {
  const [scrollRate, setScrollRate] = useState(0);

  useEffect(() => {
    // NOTE: Compute scroll rate from client window and Update scroll state
    const updateScrollRate = () => {
      const viewportYoffset = window.scrollY;
      const pageScrollLength = document.body.scrollHeight - window.innerHeight;
      if (pageScrollLength <= 0) return;
      const docYScrollRate = Number(
        (viewportYoffset / pageScrollLength).toFixed(2),
      );
      const docYScrollPercentage = Math.min(docYScrollRate * 100);
      setScrollRate(Math.round(docYScrollPercentage));
    };
    updateScrollRate();

    // NOTE:  Throttling scroll event to debounce updateScrollRate
    let isScroll = false;
    const setIsScroll = () => (isScroll = true);
    window.addEventListener("scroll", setIsScroll);
    const timer = setInterval(() => {
      if (isScroll) {
        isScroll = false;
        updateScrollRate();
      }
    }, 50);

    // NOTE: Clean up
    return () => {
      window.removeEventListener("scroll", setIsScroll);
      clearInterval(timer);
    };
  }, []);

  return scrollRate;
}
