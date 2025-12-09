import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ComponentsLibrary from "./pages/ComponentsLibrary";
import BlocksHub from "./pages/BlocksHub";

/**
 * PUBLIC_INTERFACE
 * App sets up routing and shared layout.
 */
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<ComponentsLibrary />} />
            <Route path="/blocks" element={<BlocksHub />} />
          </Routes>
        </main>
        <footer className="mt-10 border-t border-gray-200">
          <div className="ocean-container py-6 text-sm text-gray-500">
            <span>© {new Date().getFullYear()} UI Library • Ocean Professional</span>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
