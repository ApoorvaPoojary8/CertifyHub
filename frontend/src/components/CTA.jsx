import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 px-8 py-20 text-center shadow-2xl">

          {/* Background Blur */}
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"></div>

          <div className="relative z-10">

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Transform Your Events?
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-blue-100">
              Generate certificates in seconds, automate email delivery,
              and save hours of manual work with CertifyHub.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 hover:bg-gray-100 transition"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-xl border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-blue-600 transition"
              >
                Login
              </Link>

            </div>

            <p className="mt-6 text-blue-200 text-sm">
              No Credit Card Required • Free Forever
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;