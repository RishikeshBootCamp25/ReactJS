import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentList from "./components/pages/StudentList";
import StudentDetail from "./components/pages/StudentDetail";
import AddStudent from "./components/pages/AddStudent";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/students" />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/students/:id" element={<StudentDetail />} />
            <Route path="/add-student" element={<AddStudent />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
