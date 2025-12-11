import { useEffect, useRef, useState } from "react";

/**
 * returns a throttled version of value that updates at most once every delay ms
 */
export function useThrottle(value, delay = 500) {
  const lastRef = useRef(0);
  const [throttled, setThrottled] = useState(value);

  useEffect(() => {
    const now = Date.now();
    if (now - lastRef.current >= delay) {
      lastRef.current = now;
      setThrottled(value);
    }
    // If you want an update after the delay for the last change, you could schedule a timeout here.
  }, [value, delay]);

  return throttled;
}
