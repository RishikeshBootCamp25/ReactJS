import React from "react";

export default function StudentList() {
  // Array of students
  const students = [
    { id: 101, name: "Alice", grade: "A" },
    { id: 102, name: "Bob", grade: "B" },
    { id: 103, name: "Charlie", grade: "A+" },
    { id: 104, name: "David", grade: "C" }
  ];

  return (
    <div className="p-4 max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-4">🎓 Student List</h3>

      <ul className="divide-y divide-gray-300">
        {students.map((student, i) => (
          <li key={student.id} className="p-2">
            {i + 1}. &nbsp;
            <span className="font-semibold">{student.name}</span> - Grade:{" "}
            <span className="text-blue-600">{student.grade}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
