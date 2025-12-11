import React, { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function DebounceHookExample() {
  const [text, setText] = useState("");
  const debounced = useDebounce(text, 500);
  const [log, setLog] = useState([]);

  useEffect(() => {
    if (debounced) {
      setLog((l) => [`debounced value: "${debounced}" at ${new Date().toLocaleTimeString()}`, ...l]);
    }
  }, [debounced]);

  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 6 }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type to test useDebounce hook"
        style={{ padding: 8, width: "100%", boxSizing: "border-box" }}
      />
      <div style={{ marginTop: 8 }}>
        <strong>Debounced value:</strong> {debounced}
        <ul>
          {log.map((l, i) => <li key={i} style={{ fontSize: 13 }}>{l}</li>)}
        </ul>
      </div>
    </div>
  );
}
