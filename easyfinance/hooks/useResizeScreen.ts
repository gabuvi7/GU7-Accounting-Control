import { useCallback, useEffect, useState } from "react";

type ScreenSize = {
  sWidth: number;
  sHeight: number;
};
export function useResizeScreen() {
  const [screen, updateScreen] = useState<ScreenSize>({
    sWidth: typeof window !== "undefined" ? window.innerWidth : 10,
    sHeight: typeof window !== "undefined" ? window.innerHeight : 10,
  });
  const handleResize = useCallback(() => {
    updateScreen({
      sWidth: window.innerWidth,
      sHeight: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.addEventListener("resize", handleResize, { passive: true });
    };
  }, [screen]);

  return { screen };
}
