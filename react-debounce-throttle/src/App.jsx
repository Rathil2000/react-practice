import React from "react";
import DebounceSearch from "./components/DebounceSearch";
import DebounceHookExample from "./components/DebounceHookExample";
import ThrottleScroll from "./components/ThrottleScroll";
import ThrottleHookExample from "./components/ThrottleHookExample";

export default function App() {
  return (
    <div style={{ padding: 24, fontFamily: "system-ui, Arial" }}>
      <h1>Debounce & Throttle — Learning Playground</h1>

      <section style={{ marginBottom: 24 }}>
        <h2>Debounce (utility)</h2>
        <p>Type fast — API call happens 500ms after you stop typing.</p>
        <DebounceSearch />
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2>Debounce (hook)</h2>
        <p>useDebounce returns a debounced value.</p>
        <DebounceHookExample />
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2>Throttle (scroll)</h2>
        <p>Scroll the page — scroll event logs at most once every 300ms.</p>
        <ThrottleScroll />
        <div style={{ height: 800 }} />
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2>Throttle (hook)</h2>
        <p>Typing updates are throttled (value updates at most every 500ms).</p>
        <ThrottleHookExample />
      </section>
    </div>
  );
}
