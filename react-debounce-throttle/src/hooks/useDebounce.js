import { useEffect, useState } from "react";

/**
 * returns a debounced version of value that updates only after the delay passes
 */
export function useDebounce(value, delay = 500 ) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const t = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);

  return debouncedValue;
}
