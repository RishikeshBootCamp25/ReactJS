import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddStudent() {
  const [form, setForm] = useState({ name: "", age: "", course: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.age || !form.course) {
      alert("Please fill all fields");
      return;
    }

    const saved = localStorage.getItem("students");
    const students = saved ? JSON.parse(saved) : [];

    const newStudent = {
      id: Date.now(), // unique ID
      name: form.name,
      age: parseInt(form.age),
      course: form.course,
    };

    const updatedStudents = [...students, newStudent];
    localStorage.setItem("students", JSON.stringify(updatedStudents));

    // Reset form
    setForm({ name: "", age: "", course: "" });

    // Redirect to student list
    navigate("/students");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add a New Student</h2>

      <form
        onSubmit={handleSubmit}
        className="p-4 border rounded-lg shadow bg-gray-50 space-y-4"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Student Name"
          className="p-2 border rounded w-full"
        />
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
          className="p-2 border rounded w-full"
        />
        <input
          type="text"
          name="course"
          value={form.course}
          onChange={handleChange}
          placeholder="Course"
          className="p-2 border rounded w-full"
        />

        <button
          type="submit"
          className="bg-blue-600 bg-sky-50 px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Student
        </button>
      </form>
    </div>
  );
}
