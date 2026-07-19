import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarDays,
  Award,
  User,
  LogOut,
  PlusCircle,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg min-h-screen flex flex-col">

      {/* Logo */}

      <div className="p-6 border-b">

        <h1 className="text-3xl font-bold text-blue-600">
          CertifyHub
        </h1>

        <p className="text-gray-500 text-sm">
          Organizer Dashboard
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 mt-6">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-6 py-4 ${
              isActive
                ? "bg-blue-50 text-blue-600 font-semibold border-r-4 border-blue-600"
                : "hover:bg-gray-100"
            }`
          }
        >
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink
          to="/events"
          className={({ isActive }) =>
            `flex items-center gap-3 px-6 py-4 ${
              isActive
                ? "bg-blue-50 text-blue-600 font-semibold border-r-4 border-blue-600"
                : "hover:bg-gray-100"
            }`
          }
        >
          <CalendarDays size={20} />
          Events
        </NavLink>

        <NavLink
          to="/certificates"
          className={({ isActive }) =>
            `flex items-center gap-3 px-6 py-4 ${
              isActive
                ? "bg-blue-50 text-blue-600 font-semibold border-r-4 border-blue-600"
                : "hover:bg-gray-100"
            }`
          }
        >
          <Award size={20} />
          Certificates
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 px-6 py-4 ${
              isActive
                ? "bg-blue-50 text-blue-600 font-semibold border-r-4 border-blue-600"
                : "hover:bg-gray-100"
            }`
          }
        >
          <User size={20} />
          Profile
        </NavLink>

      </nav>

      {/* Bottom Buttons */}

      <div className="p-5 border-t">

        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">

          <PlusCircle size={20} />

          Create Event

        </button>

        <button
          className="w-full mt-4 flex items-center justify-center gap-2 border py-3 rounded-lg hover:bg-gray-100"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          <LogOut size={20} />
          Logout
        </button>

      </div>

    </aside>
  );
}