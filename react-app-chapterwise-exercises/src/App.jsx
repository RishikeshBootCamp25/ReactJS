import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChapterTree from "./components/ChapterTree";
import TopicPage from "./components/pages/TopicPage";


export default function App() {
  
  return (
    
    <Router>
      <div className="container mt-5">
      <h1 className="text-primary">Hello, Bootstrap + React!</h1>
      <button className="btn btn-success">Click Me</button>
    </div>
      <h1 className="p-6">Welcome to React Tutorial</h1>
      <div className="flex h-screen">
      {/* Left Panel */}
      <div className="w-1/4 bg-gray-100 border-r border-gray-300 overflow-y-auto p-4">
        <ChapterTree /> 
      </div>

      {/* Right Panel */}
      <div className="flex-1 p-6 overflow-y-auto">
        <Routes>
            <Route path="/:chapterId/:topicId" element={<TopicPage />} />
          </Routes>
      </div>
    </div>
    </Router>
  );
}
