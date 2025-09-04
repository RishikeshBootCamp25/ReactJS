import React, { useState } from "react";

export default function GreetingForm() {
  // State to track input value
  const [name, setName] = useState("");
  // State to store submitted name
  const [submittedName, setSubmittedName] = useState("");

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    setSubmittedName(name); // save entered name
    setName(""); // clear input
  };

  return (
    <div className="p-4 max-w-md mx-auto text-center bg-white">
      <h3 className="text-xl font-bold mb-4">Greeting Form</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <button
          type="submit"
          className="bg-blue-500 text-green-600 px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>

      {/* Display greeting only if submitted */}
      {submittedName && (
        <p className="mt-4 text-lg font-semibold">
          Hello {submittedName}!
        </p>
      )}
    </div>
  );
}
