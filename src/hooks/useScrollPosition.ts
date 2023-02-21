import { useEffect, useRef, useState } from "react";

const useScrollPosition = (throttleDelay = 0) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (timeout.current) return;

      timeout.current = setTimeout(() => {
        timeout.current = null;
      }, throttleDelay);

      setScrollPosition(window.pageYOffset);
    };
    updatePosition();
    window.addEventListener("scroll", updatePosition);
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
