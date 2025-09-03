import React, { useState } from "react";

export default function InputAlert() {
  const [value, setValue] = useState("");

  const handleClick = () => {
    if (value.trim() === "") {
      alert("Please enter something!");
    } else {
      alert(`You entered: ${value}`);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
        className="border p-2 rounded mr-2"
      />
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-green-500 rounded hover:bg-green-600 transition"
      >
        Show Alert
      </button>
    </div>
  );
}
