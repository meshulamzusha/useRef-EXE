import { useState } from "react";
import "./Input.css";

function StateInput() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="container">
      <h3>useState</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setInputValue("");
        }}
      >
        Clear input with state
      </button>
    </div>
  );
}

export default StateInput;
