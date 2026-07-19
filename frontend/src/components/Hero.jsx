import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            🚀 Instant Certificate Automation
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight text-gray-900">
            Automate Certificate Generation for
            <span className="text-blue-600"> Events</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Upload participant data, generate certificates in bulk, and send
            personalized certificates directly via email—all from one platform.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/register"
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-700 transition"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>

            <button className="rounded-xl border border-gray-300 px-8 py-4 font-semibold hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>

          {/* Trusted By */}
          <div className="mt-12">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">
              Trusted By
            </p>

            <div className="flex flex-wrap gap-8 text-gray-500 font-semibold">
              <span>Microsoft</span>
              <span>Google Cloud</span>
              <span>Coursera</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-blue-300 blur-3xl opacity-20"></div>

          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
            alt="Dashboard Preview"
            className="relative rounded-3xl shadow-2xl border"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;