import React, { useState } from "react";

export default function NameForm() {
  // Declare a state variable "name"
  const [name, setName] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="p-4 max-w-md mx-auto text-center">

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-4"
      />

      <p className="text-lg">Hello, <span className="font-semibold">{name || "Stranger"}</span></p>
    </div>
  );
}
