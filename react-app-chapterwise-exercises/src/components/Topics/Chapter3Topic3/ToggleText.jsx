import React, { useState } from "react";

export default function ToggleText() {
  const [isHello, setIsHello] = useState(true);

  const handleToggle = () => {
    setIsHello(!isHello);
  };

  return (
    <div className="p-4">
      <p className="text-lg font-semibold mb-2">
        {isHello ? "Hello Everyone!" : "Goodbye!"}
      </p>
      <button
        onClick={handleToggle}
        className="px-4 py-2 bg-blue-500 text-blue rounded-lg hover:bg-blue-600 transition"
      >
        Toggle
      </button>
    </div>
  );
}