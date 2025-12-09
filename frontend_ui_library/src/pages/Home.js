import React from "react";
import { Link } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Home page with brief intro and links to sections.
 */
export default function Home() {
  return (
    <div>
      <header className="ocean-container pt-10 pb-12">
        <div className="bg-ocean-gradient rounded-2xl p-8 md:p-12 shadow-soft border border-gray-100">
          <span className="badge mb-3">Ocean Professional</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Tailwind-based UI Library & Blocks
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl">
            Explore reusable components and production-ready blocks with live previews and code you can copy.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/components" className="btn btn-primary">Browse Components</Link>
            <Link to="/blocks" className="btn btn-secondary">Explore Blocks</Link>
          </div>
        </div>
      </header>
      <section className="ocean-container py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="font-semibold text-gray-900">Modern</h3>
            <p className="text-gray-600 mt-1 text-sm">Clean design with subtle shadows and rounded corners.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-gray-900">Responsive</h3>
            <p className="text-gray-600 mt-1 text-sm">Optimized for mobile, tablet, and desktop.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold text-gray-900">Copy & Go</h3>
            <p className="text-gray-600 mt-1 text-sm">View code and copy to clipboard instantly.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
