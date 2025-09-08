import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("students");
    if (saved) {
      setStudents(JSON.parse(saved));
    } else {
      fetch("/students.json")
        .then((res) => res.json())
        .then((data) => {
          setStudents(data);
          localStorage.setItem("students", JSON.stringify(data));
        });
    }
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Student List</h2>
        <Link
          to="/add-student"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Add Student
        </Link>
      </div>

      <ul className="space-y-2">
        {students.map((student) => (
          <li
            key={student.id}
            className="p-3 border rounded-lg shadow hover:bg-gray-100"
          >
            <Link
              to={`/students/${student.id}`}
              className="text-blue-600 hover:underline"
            >
              {student.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
