import React, { useState } from "react";
import "./StateTimer.css";

function StateTimer() {
  const [seconds, setSeconds] = useState(0);
  const [intervalID, setIntervalID] = useState();
  
  return (
    <div className="container">
      <h2>Timer With State</h2>
      <div>Seconds: {seconds}</div>
      <button
        onClick={() => {
          clearInterval(intervalID);
          const id = setInterval(() => {
            setSeconds((prev) => prev + 1);
          }, 1000);
          setIntervalID(id);
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          clearInterval(intervalID);
        }}
      >
        Stop
      </button>
    </div>
  );
}

export default StateTimer;
