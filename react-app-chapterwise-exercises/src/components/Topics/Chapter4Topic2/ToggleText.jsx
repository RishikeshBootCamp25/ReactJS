import React, { useState } from "react";

export default function ToggleText() {
  // State to track visibility
  const [show, setShow] = useState(true);

  // Toggle function
  const toggleText = () => {
    setShow(!show);
  };

  return (
    <div className="p-4 text-center">
      <button
        onClick={toggleText}
        className="bg-blue-500 px-4 py-2 rounded mb-4"
      >
        Show/Hide Text
      </button>

      {/* Conditional Rendering */}
      {show && <p className="text-lg font-semibold">Hello World</p>}
    </div>
  );
}
