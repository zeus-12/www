import { useCallback, useRef, useEffect } from "react";

const UseAnimationFrame = (enabled: boolean, callback: () => void) => {
  const requestRef = useRef<number>();

  const animate = useCallback(() => {
    callback();
    requestRef.current = requestAnimationFrame(animate);
  }, [callback]);

  useEffect(() => {
    if (enabled) {
      requestRef.current = requestAnimationFrame(animate);
      return () => {
        if (requestRef.current) {
          return cancelAnimationFrame(requestRef.current);
        }
      };
    }
  }, [enabled, animate]);

  return <div></div>;
};

export default UseAnimationFrame;
