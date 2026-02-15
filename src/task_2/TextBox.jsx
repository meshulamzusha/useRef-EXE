import { useState } from "react";

function TextBox({ ref }) {
  const [inputValue, setInputValue] = useState("");
  ref.current = inputValue
  return (
      <form action="">
        <label htmlFor="input"></label>
        <input
          id="input"
          type="text"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </form>
  );
}

export default TextBox;
