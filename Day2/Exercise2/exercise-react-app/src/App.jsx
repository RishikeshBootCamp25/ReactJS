import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chapter1 from "./components/chapter1/chapter1";
import Chapter2 from "./components/chapter2/chapter2";
import Chapter3 from "./components/chapter3/chapter3";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <div className="p-6">
        <nav className="mb-6">
          <Link to="/" className="text-xl font-bold">Course Chapters</Link>
        </nav>

        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <ul className="space-y-3">
                <li className="p-4 bg-gray-100 rounded-xl shadow hover:bg-gray-200 transition">
                  <Link to="/chapter1" className="text-lg font-semibold">
                    Day 1: Chapter 1:  Web Development Basics
                  </Link>
                </li>
                <li className="p-4 bg-gray-100 rounded-xl shadow hover:bg-gray-200 transition">
                  <Link to="/chapter2" className="text-lg font-semibold">
                    Day 1: Chapter 2: Introduction to React
                  </Link>
                </li>
                <li className="p-4 bg-gray-100 rounded-xl shadow hover:bg-gray-200 transition">
                  <Link to="/chapter3" className="text-lg font-semibold">
                    Day 2: Chapter 3: React Fundamentals
                  </Link>
                </li>
                <li className="p-4 bg-gray-100 rounded-xl shadow hover:bg-gray-200 transition">
                  <Link to="/chapter2" className="text-lg font-semibold">
                    Day 3: Chapter 4: React Hooks and Dynamic UI
                  </Link>
                </li>
                <li className="p-4 bg-gray-100 rounded-xl shadow hover:bg-gray-200 transition">
                  <Link to="/chapter2" className="text-lg font-semibold">
                    Day 4: Chapter 5: Consuming APIs
                  </Link>
                </li>
                <li className="p-4 bg-gray-100 rounded-xl shadow hover:bg-gray-200 transition">
                  <Link to="/chapter2" className="text-lg font-semibold">
                    Day 4: Chapter 6: Routing
                  </Link>
                </li>
                <li className="p-4 bg-gray-100 rounded-xl shadow hover:bg-gray-200 transition">
                  <Link to="/chapter2" className="text-lg font-semibold">
                    Day 5: Chapter7: Deployment
                  </Link>
                </li>
              </ul>
            }
          />

          {/* Chapter routes */}
          <Route path="/chapter1/*" element={<Chapter1 />} />
          <Route path="/chapter2/*" element={<Chapter2 />} />
          <Route path="/chapter3/*" element={<Chapter3 />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
