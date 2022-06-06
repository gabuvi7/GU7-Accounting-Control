import React, { useEffect } from "react";
import { useResizeScreen } from "./useResizeScreen";

const useClickAwayListener = (
  ref: React.MutableRefObject<any>,
  handler: (e: any) => void
) => {
  const {
    screen: { sWidth },
  } = useResizeScreen();

  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target) || sWidth > 768) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

export default useClickAwayListener;
