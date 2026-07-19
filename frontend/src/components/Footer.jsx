import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Company */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
                C
              </div>

              <h2 className="text-2xl font-bold text-white">
                CertifyHub
              </h2>

            </div>

            <p className="mt-6 text-gray-400 leading-7 max-w-md">
              Automate certificate generation, participant management,
              and email delivery with one modern platform built for
              workshops, hackathons, webinars, and conferences.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <Mail size={20} />
              </a>

            </div>

          </div>

          {/* Platform */}
          <div>

            <h3 className="text-lg font-semibold text-white mb-5">
              Platform
            </h3>

            <ul className="space-y-3">

              <li><Link to="/" className="hover:text-white">Home</Link></li>

              <li><a href="#features" className="hover:text-white">Features</a></li>

              <li><a href="#workflow" className="hover:text-white">Workflow</a></li>

              <li><Link to="/login" className="hover:text-white">Login</Link></li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-lg font-semibold text-white mb-5">
              Company
            </h3>

            <ul className="space-y-3">

              <li><a href="#">About</a></li>

              <li><a href="#">Careers</a></li>

              <li><a href="#">Blog</a></li>

              <li><a href="#">Contact</a></li>

            </ul>

          </div>

          {/* Legal */}

          <div>

            <h3 className="text-lg font-semibold text-white mb-5">
              Legal
            </h3>

            <ul className="space-y-3">

              <li><a href="#">Privacy Policy</a></li>

              <li><a href="#">Terms & Conditions</a></li>

              <li><a href="#">Support</a></li>

              <li><a href="#">Help Center</a></li>

            </ul>

          </div>

        </div>

        <hr className="my-12 border-slate-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500">
            © {new Date().getFullYear()} CertifyHub. All rights reserved.
          </p>

          <p className="text-gray-500">
            Built with ❤️ using React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;