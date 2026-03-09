import React from "react";
import { NavLink } from "react-router-dom";
import { Home, LayoutGrid, BookOpen, Languages } from "lucide-react";

export default function NavBar() {
  return (
    <header className="flex justify-between items-center px-8 py-4 border-b bg-white shadow-sm sticky top-0 z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img
          src="/logo-hand.svg"
          alt="SignBridge Logo"
          className="w-6 h-6"
        />
        <span className="text-lg font-bold text-gray-900">SignBridge</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center gap-6 text-sm">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-1 px-2 py-1 rounded-md transition ${
              isActive
                ? "bg-gray-100 text-black font-medium"
                : "text-gray-600 hover:text-black"
            }`
          }
        >
          <Home className="w-4 h-4" />
          Home
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-1 px-2 py-1 rounded-md transition ${
              isActive
                ? "bg-gray-100 text-black font-medium"
                : "text-gray-600 hover:text-black"
            }`
          }
        >
          <LayoutGrid className="w-4 h-4" />
          Dashboard
        </NavLink>

        <NavLink
          to="/courses"
          className={({ isActive }) =>
            `flex items-center gap-1 px-2 py-1 rounded-md transition ${
              isActive
                ? "bg-gray-100 text-black font-medium"
                : "text-gray-600 hover:text-black"
            }`
          }
        >
          <BookOpen className="w-4 h-4" />
          Courses
        </NavLink>

        <NavLink
          to="/translate"
          className={({ isActive }) =>
            `flex items-center gap-1 px-2 py-1 rounded-md transition ${
              isActive
                ? "bg-gray-200 text-black font-medium"
                : "text-gray-600 hover:text-black"
            }`
          }
        >
          <Languages className="w-4 h-4" />
          Translate
        </NavLink>
      </nav>
    </header>
  );
}
