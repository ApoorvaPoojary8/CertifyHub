import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
            C
          </div>

          <span className="text-2xl font-bold text-blue-600">
            CertifyHub
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
          >
            Home
          </Link>

          <a
            href="#features"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Features
          </a>

          <a
            href="#workflow"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Workflow
          </a>

          <a
            href="#pricing"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Pricing
          </a>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-gray-600 hover:text-blue-600 font-medium transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile */}
        <button className="md:hidden">
          <Menu size={28} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;