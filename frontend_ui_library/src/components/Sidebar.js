import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * Sidebar renders category filters and supports mobile collapse.
 */
export default function Sidebar({ categories = [], active, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <aside className="md:w-64 md:block">
      <div className="md:hidden mb-3">
        <button
          className="btn btn-secondary w-full"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          {open ? "Hide Filters" : "Show Filters"}
        </button>
      </div>
      <div className={`sidebar ${open ? "block" : "hidden"} md:block`}>
        <div className="card p-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Categories</h3>
          <ul className="space-y-1">
            {categories.map((c) => (
              <li key={c.id}>
                <button
                  onClick={() => onChange?.(c.id)}
                  className={`w-full text-left px-3 py-2 rounded-md transition ${
                    active === c.id
                      ? "bg-blue-50 text-blue-700"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  {c.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
