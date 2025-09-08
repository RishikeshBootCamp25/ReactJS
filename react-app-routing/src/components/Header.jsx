import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="flex space-x-6">
        <Link to="/students" className="text-white hover:text-yellow-400">
          Student List
        </Link>
      </nav>
    </header>
  );
}
