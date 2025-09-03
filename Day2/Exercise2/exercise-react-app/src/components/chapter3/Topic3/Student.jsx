import React from "react";

export default function Student({ name, grade }) {
  return (
    <div className="border p-4 m-2 rounded bg-gray-100">
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Grade:</strong> {grade}</p>
    </div>
  );
}