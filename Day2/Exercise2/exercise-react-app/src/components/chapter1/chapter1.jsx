import { Routes, Route, Link } from "react-router-dom";
//import Chapter1Topic from "./topics/Chapter1Topics";

export default function Chapter1() {
  const topics = [
    "What is frontend development?",
    "Introduction to HTML, CSS, and JavaScript",
    "How the web works (browser, server, APIs)",
    "Browser (Chrome)",
    "Developer tools and using VS Code",
  ];

  return (
    <div className="p-6">
      <Link to="/" className="text-blue-600 underline">← Back to Chapters</Link>
      <h2 className="text-2xl font-bold mt-4 mb-2">Day 1: Web Development Basics</h2>

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
        <Route path=":topicId" element={<Chapter1Topic />} />
      </Routes> */}
    </div>
  );
}
