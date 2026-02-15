import "./Input.css";
import { useRef } from "react";

function RefInput() {
  const inputRef = useRef("");
  return (
    <div className="container">
      <h3>useRef</h3>
      <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          inputRef.current.value = "";
        }}
      >
        Clear input with Ref
      </button>
    </div>
  );
}

export default RefInput;
