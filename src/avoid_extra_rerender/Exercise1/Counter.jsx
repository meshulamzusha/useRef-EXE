import { useState, useRef } from "react";
import "./Counter.css";
function Counter() {
  const [count, setCount] = useState(0);
  const previousCount = useRef();
  return (
    <div className="container">
      <h2>Counter</h2>
      <button
        onClick={() => {
          previousCount.current = count;
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          previousCount.current = count;
          setCount(count - 1);
        }}
      >
        -1
      </button>
      <div className="display-counters">
        Current: {count} (Previous: {previousCount.current})
      </div>
    </div>
  );
}

export default Counter;
