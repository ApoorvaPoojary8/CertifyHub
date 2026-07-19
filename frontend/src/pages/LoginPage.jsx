import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      // Backend login API will be connected here later
      console.log(formData);
    } catch (err) {
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
     <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
  <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

    {/* Logo */}
    <Link
      to="/"
      className="text-2xl font-bold text-blue-600"
    >
      CertifyHub
    </Link>

    {/* Desktop Navigation */}
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
        className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
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
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
      >
        Get Started
      </Link>

    </div>

  </div>
</header>

      {/* Login Card goes here */}

      <main className="flex items-center justify-center px-6 py-12">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 p-8">

    {/* Heading */}
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900">
        Welcome Back
      </h1>

      <p className="mt-2 text-gray-600">
        Manage your certifications with ease.
      </p>
    </div>

    {/* Error Message */}
    {error && (
      <div className="mb-4 rounded-lg bg-red-100 border border-red-300 px-4 py-3 text-red-600">
        {error}
      </div>
    )}

    <form onSubmit={handleSubmit} className="space-y-6">

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
        <div className="flex justify-between mb-2">
          <label className="text-sm font-medium text-gray-700">
            Password
          </label>

          <Link
            to="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

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
            placeholder="••••••••"
            className="w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {/* Remember */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          name="remember"
          checked={formData.remember}
          onChange={handleChange}
          className="h-4 w-4"
        />

        <label className="text-sm text-gray-600">
          Keep me logged in
        </label>
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {loading ? (
          "Authenticating..."
        ) : (
          <>
            Login
            <ArrowRight size={18} />
          </>
        )}
      </button>

    </form>

    {/* Divider */}
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 border-t"></div>
      <span className="text-sm text-gray-500">OR</span>
      <div className="flex-1 border-t"></div>
    </div>

    {/* Register */}
    <p className="text-center text-gray-600">
      Don't have an account?{" "}
      <Link
        to="/register"
        className="text-blue-600 font-semibold hover:underline"
      >
        Register Here
      </Link>
    </p>

  </div>
</main>

      {/* Footer goes here */}

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

export default LoginPage;