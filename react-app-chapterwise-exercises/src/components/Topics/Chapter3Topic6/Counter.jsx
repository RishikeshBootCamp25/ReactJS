import React, { useState } from "react";

export default function Counter() {
  // Declare a state variable "count" with initial value 0
  const [count, setCount] = useState(0);

  // Function to increase count
  const increase = () => {
    setCount(count + 1);
  };

  // Function to decrease count
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="p-4 text-center">
      <p className="text-lg mt-2">Current Count: {count}</p>

      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={decrease}
          className="bg-red-500 px-4 py-2 rounded"
        >
          -
        </button>

        <button
          onClick={increase}
          className="bg-green-500 px-4 py-2 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
}
