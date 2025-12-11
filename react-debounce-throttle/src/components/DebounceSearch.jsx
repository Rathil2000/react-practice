import React, { useState, useMemo } from "react";
import { debounce } from "../utils/debounce";

export default function DebounceSearch() {
  const [text, setText] = useState("");
  const [log, setLog] = useState([]);

  const handleSearch = (value) => {
    // simulate API call
    setLog((l) => [`API: searched "${value}" at ${new Date().toLocaleTimeString()}`, ...l]);
    console.log("API called with:", value);
  };

  const debouncedSearch = useMemo(() => debounce(handleSearch, 500), []);

  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 6 }}>
      <input
        style={{ padding: 8, width: "100%", boxSizing: "border-box" }}
        value={text}
        onChange={(e) => {
          const v = e.target.value;
          setText(v);
          debouncedSearch(v);
        }}
        placeholder="Type to search (debounced)"
      />
      <div style={{ marginTop: 8 }}>
        <strong>Logs:</strong>
        <ul>
          {log.map((l, i) => (
            <li key={i} style={{ fontSize: 13 }}>{l}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
