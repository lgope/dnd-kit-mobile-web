import { useState } from "react";

const Input = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input) return;

    onSubmit(input);

    setInput("");
  };

  return (
    <div className={`${classPrefix}-container`}>
      <input
        className={`${classPrefix}-input`}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className={`${classPrefix}-button`}  onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default Input;