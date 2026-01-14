import { useState, useEffect } from "react";

type Size = {
  width: number;
  height: number;
};

/**
 * Hook: returns current window size (width, height). Safe for SSR (returns 0,0 on server).
 */
export function useWindowSize(): Size {
  const isClient = typeof window !== "undefined";

  function getSize(): Size {
    return {
      width: isClient ? window.innerWidth : 0,
      height: isClient ? window.innerHeight : 0,
    };
  }

  const [windowSize, setWindowSize] = useState<Size>(getSize);

  useEffect(() => {
    if (!isClient) return;

    let rafId: number | null = null;

    const handle = () => {
      // use rAF to avoid layout thrashing when resizing rapidly
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setWindowSize(getSize()));
    };

    window.addEventListener("resize", handle, { passive: true });
    // initialize
    handle();

    return () => {
      window.removeEventListener("resize", handle);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return windowSize;
}

/**
 * Convenience hook: returns true when window width is less than `threshold`.
 */
export function useIsWidthLessThan(threshold: number): boolean {
  const { width } = useWindowSize();
  if (width === 0) return false; // on SSR or initial render assume not-less to avoid layout shift
  return width < threshold;
}
