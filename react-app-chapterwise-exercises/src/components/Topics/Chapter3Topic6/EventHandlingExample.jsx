import React, { useState } from "react";

export default function EventHandlingExample() {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Handle button click
  const handleClick = () => {
    alert("Button clicked!");
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    setSubmitted(text);
    setText(""); // clear input
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">React Event Handling Example</h2>

      {/* Click Event */}
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 rounded mb-4"
      >
        Click Me
      </button>

      {/* Form Submit Event */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          value={text}
          onChange={handleChange} // Change Event
          placeholder="Type something..."
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 rounded"
        >
          Submit
        </button>
      </form>

      {/* Show submitted text */}
      {submitted && (
        <p className="mt-4 text-lg">
          You submitted: <span className="font-semibold">{submitted}</span>
        </p>
      )}
    </div>
  );
}
