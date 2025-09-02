import { Routes, Route, Link } from "react-router-dom";

export default function Chapter2() {
  const topics = [
    "What is React and why use it?",
    "How React works (component-based architecture)",
    "Setting up a React project (with CRA)",
    "Project folder structure & best practices",
  ];

  return (
    <div className="p-6">
      <Link to="/" className="text-blue-600 underline">← Back to Chapters</Link>
      <h2 className="text-2xl font-bold mt-4 mb-2">Day 2: React Fundamentals</h2>

      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {topics.map((topic, i) => (
          <li key={i}>
            <Link to={`topic${i + 1}`} className="text-blue-500 hover:underline">
              {topic}
            </Link>
          </li>
        ))}
      </ul>

      {/* Nested routes for topics */}
      {/* <Routes>
        <Route path=":topicId" element={<Chapter2Topic />} />
      </Routes> */}
    </div>
  );
}
