import React, { useRef, useState } from "react";

function RefTimer() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  return (
    <div className="container">
      <h2>Timer With Ref</h2>
      <div>Seconds: {seconds}</div>
      <button
        onClick={() => {
          clearInterval(intervalRef);
          const id = setInterval(() => {
            setSeconds((prev) => prev + 1);
          }, 1000);
          intervalRef.current = id;
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          clearInterval(intervalRef.current);
        }}
      >
        Stop
      </button>
    </div>
  );
}

export default RefTimer;
