import React from "react";
import { Link, NavLink } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Top navigation bar with links to Home, Components, and Blocks.
 */
export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition ${
      isActive ? "text-blue-700 bg-blue-50" : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
    }`;

  return (
    <nav className="w-full bg-white/80 backdrop-blur border-b border-gray-200 sticky top-0 z-50">
      <div className="ocean-container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-amber-400" />
          <span className="text-gray-900 font-semibold">UI Library</span>
        </Link>
        <div className="flex items-center gap-1">
          <NavLink to="/" className={navLinkClass} end>Home</NavLink>
          <NavLink to="/components" className={navLinkClass}>Components</NavLink>
          <NavLink to="/blocks" className={navLinkClass}>Blocks</NavLink>
        </div>
      </div>
    </nav>
  );
}
