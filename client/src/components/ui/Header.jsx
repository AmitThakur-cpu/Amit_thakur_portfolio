import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 shadow-md">
      <nav className="flex justify-between items-center px-10 h-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
        
        {/* Logo / Title */}
        <h2 className="text-2xl font-bold tracking-wide">Portfolio</h2>
        
        {/* Nav Links */}
        <ul className="flex gap-8 text-lg font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                  : "hover:text-blue-300 transition"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                  : "hover:text-blue-300 transition"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                  : "hover:text-blue-300 transition"
              }
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                  : "hover:text-blue-300 transition"
              }
            >
              Project
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
