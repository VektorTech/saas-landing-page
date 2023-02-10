import { useEffect, useState } from "react";

const useScrollPosition = (throttleDelay = 0) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = throttle(() => {
      setScrollPosition(window.pageYOffset);
    }, throttleDelay);
    updatePosition();
    window.addEventListener("scroll", updatePosition);
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;

function throttle(callback: Function, delay: number) {
  let timeout: NodeJS.Timeout | null;

  return function (this: void, ...args: unknown[]) {
    if (timeout) return;

    timeout = setTimeout(() => {
      callback.apply(this, args);
      timeout = null;
    }, delay);
  };
}
