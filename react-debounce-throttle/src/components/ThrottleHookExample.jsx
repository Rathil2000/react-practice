import React, { useState, useEffect } from "react";
import { useThrottle } from "../hooks/useThrottle";

export default function ThrottleHookExample() {
  const [value, setValue] = useState("");
  const throttledValue = useThrottle(value, 500);
  const [log, setLog] = useState([]);

  useEffect(() => {
    if (throttledValue) {
      setLog((l) => [`throttled: "${throttledValue}" at ${new Date().toLocaleTimeString()}`, ...l]);
    }
  }, [throttledValue]);

  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 6 }}>
      <input
        placeholder="Type fast — throttled updates"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ padding: 8, width: "100%", boxSizing: "border-box" }}
      />
      <p><strong>Throttled value:</strong> {throttledValue}</p>
      <ul>{log.map((l,i)=><li key={i} style={{ fontSize:13 }}>{l}</li>)}</ul>
    </div>
  );
}
