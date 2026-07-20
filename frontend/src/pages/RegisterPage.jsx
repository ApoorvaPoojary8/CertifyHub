import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";

import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setError("");

  try {
    const response = await api.post("/auth/register", {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });

    alert("Registration Successful!");

    navigate("/login");

  } catch (err) {
  console.log(err);
  console.log(err.response);
  console.log(err.response?.data);

  setError(
    err.response?.data?.message || "Registration failed"
  );
} finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-slate-50 pt-20">

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
  <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

    {/* Logo */}
    <Link
      to="/"
      className="text-2xl font-bold text-blue-600"
    >
      CertifyHub
    </Link>

    {/* Navigation */}
    <nav className="hidden md:flex items-center gap-8">

      <a
        href="#features"
        className="text-gray-600 hover:text-blue-600 transition"
      >
        Features
      </a>

      <a
        href="#pricing"
        className="text-gray-600 hover:text-blue-600 transition"
      >
        Pricing
      </a>

      <Link
        to="/login"
        className="text-gray-600 hover:text-blue-600 transition"
      >
        Login
      </Link>

    </nav>

    {/* Right Side */}
    <div className="hidden sm:flex items-center gap-4">

      <button className="text-blue-600 hover:text-blue-700 transition">
        Support
      </button>

      <Link
        to="/register"
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Sign Up
      </Link>

    </div>

  </div>
</header>

      {/* Register Card */}

      <main className="flex items-center justify-center px-6 py-12">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 p-8">

    {/* Heading */}
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900">
        Create Account
      </h1>

      <p className="mt-2 text-gray-600">
        Join CertifyHub and start managing certificates effortlessly.
      </p>
    </div>

    {/* Error */}
    {error && (
      <div className="mb-4 rounded-lg bg-red-100 border border-red-300 px-4 py-3 text-red-600">
        {error}
      </div>
    )}

    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>

        <div className="relative">
          <User
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>

        <div className="relative">
          <Mail
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>

        <div className="relative">
          <Lock
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Minimum 8 characters"
            className="w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>

        <p className="mt-2 text-xs text-gray-500">
          Password must contain at least 8 characters.
        </p>
      </div>

      {/* Terms */}
      <div className="flex items-start gap-3">

        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
          className="mt-1"
          required
        />

        <p className="text-sm text-gray-600">
          I agree to the{" "}
          <Link
            to="/terms"
            className="text-blue-600 hover:underline"
          >
            Terms
          </Link>{" "}
          and{" "}
          <Link
            to="/privacy"
            className="text-blue-600 hover:underline"
          >
            Privacy Policy
          </Link>
        </p>

      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-60"
      >
        {loading ? "Creating Account..." : "Create Account"}
      </button>

    </form>

    {/* Divider */}
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 border-t"></div>
      <span className="text-sm text-gray-500">
        OR
      </span>
      <div className="flex-1 border-t"></div>
    </div>

    {/* Social Buttons */}
    <div className="grid grid-cols-2 gap-4">

      <button
        type="button"
        className="border rounded-lg py-3 hover:bg-gray-50 transition"
      >
        Google
      </button>

      <button
        type="button"
        className="border rounded-lg py-3 hover:bg-gray-50 transition"
      >
        GitHub
      </button>

    </div>

    {/* Login */}
    <p className="mt-8 text-center text-gray-600">
      Already have an account?{" "}
      <Link
        to="/login"
        className="text-blue-600 font-semibold hover:underline"
      >
        Login
      </Link>
    </p>

  </div>
</main>

      {/* Footer */}

      <footer className="border-t border-gray-200 bg-white">
  <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

    <div className="text-center md:text-left">
      <h3 className="font-bold text-lg text-gray-900">
        CertifyHub
      </h3>

      <p className="text-sm text-gray-500 mt-1">
        © {new Date().getFullYear()} CertifyHub. All rights reserved.
      </p>
    </div>

    <div className="flex gap-6 text-sm">

      <Link
        to="/privacy"
        className="text-gray-500 hover:text-blue-600 transition"
      >
        Privacy Policy
      </Link>

      <Link
        to="/terms"
        className="text-gray-500 hover:text-blue-600 transition"
      >
        Terms
      </Link>

      <Link
        to="/contact"
        className="text-gray-500 hover:text-blue-600 transition"
      >
        Contact
      </Link>

    </div>

  </div>
</footer>

    </div>
  );
};

export default RegisterPage;