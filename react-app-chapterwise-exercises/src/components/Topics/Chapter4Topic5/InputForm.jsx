import React, { useState } from "react";

function InputForm() {
  // State to store input value
  const [inputValue, setInputValue] = useState("");

  // Handle input change
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle button click
  const handleClick = () => {
    console.log("Typed text:", inputValue);
  };

  return (
    <div className="p-4 max-w-md mx-auto text-center bg-white">
       <div className="p-4">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
        className="border p-2 rounded mr-2"
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 text-blue-900 px-4 py-2 rounded"
      >
        Show in Console
      </button>
    </div>
    </div>
   
  );
}

export default InputForm;
