import React, { useRef, useState } from "react";
import "./RefCounter.css";

function RefCounter() {
  const countRef = useRef(0);
  const [count, setCounter] = useState(0);
  return (
    <div className="ref-count-container">
      <h2>Ref Counter</h2>
      <button
        onClick={() => {
          countRef.current++;
        }}
      >
        Click Me!
      </button>
      <button
        onClick={() => {
          setCounter(countRef.current);
        }}
      >
        Show Total Clicks
      </button>
      <span>Clicks Count: {count}</span>
    </div>
  );
}

export default RefCounter;
