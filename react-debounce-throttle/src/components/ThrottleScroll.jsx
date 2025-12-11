import React, { useEffect } from "react";
import { throttle } from "../utils/throttle";

export default function ThrottleScroll() {
  useEffect(() => {
    const handler = throttle(() => {
      console.log("throttled scroll:", window.scrollY, new Date().toLocaleTimeString());
    }, 300);

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div style={{ border: "1px dashed #ccc", padding: 12 }}>
      <p>Open the console and scroll — check throttled console logs every 300ms max.</p>
    </div>
  );
}
