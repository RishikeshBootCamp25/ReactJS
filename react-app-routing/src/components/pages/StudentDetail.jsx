import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function StudentDetail() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    // Load from localStorage first
    const saved = localStorage.getItem("students");
    if (saved) {
      const students = JSON.parse(saved);
      const found = students.find((s) => s.id === parseInt(id));
      setStudent(found);
    }
  }, [id]);

  if (!student) {
    return (
      <div className="p-6">
        <h2 className="text-xl text-gray-600">Student not found!</h2>
        <Link to="/students" className="text-blue-600 hover:underline">
          &-- Back to Student List
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Details of {student.name}</h2>
      <p className="mb-2"><strong>Age:</strong> {student.age}</p>
      <p className="mb-4"><strong>Course:</strong> {student.course}</p>

      <Link
        to="/students"
        className="text-blue-600 hover:underline inline-block"
      >
         Back to Student List
      </Link>
    </div>
  );
}
