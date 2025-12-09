import React, { useMemo, useState } from "react";
import { snippets, snippetCategories } from "../data/snippets";

/**
 * PUBLIC_INTERFACE
 * Sidebar renders hierarchical filters:
 * - Top section: All categories (props.categories merged externally), still supported
 * - Snippet Categories from src/data/snippets.js
 * - Expandable list of snippet component titles grouped by category
 * Selection contract:
 * - Clicking a category calls onChange(categoryId)
 * - Clicking a specific component calls onChange(`component:${snippetId}`)
 */
export default function Sidebar({ categories = [], active, onChange }) {
  const [open, setOpen] = useState(false);
  const [expandedCats, setExpandedCats] = useState({});

  // Build map: categoryId -> { label, items: [snippets of type 'component'] }
  const snippetTree = useMemo(() => {
    const byCat = new Map();
    // Initialize from snippetCategories for consistent order/labels
    snippetCategories.forEach((c) => {
      if (c.id !== "all") {
        byCat.set(c.id, { id: c.id, label: c.label, items: [] });
      }
    });
    // Group component-type snippets
    snippets
      .filter((s) => s.type === "component")
      .forEach((s) => {
        const catId = s.category || "uncategorized";
        if (!byCat.has(catId)) {
          byCat.set(catId, { id: catId, label: catId[0]?.toUpperCase() + catId.slice(1), items: [] });
        }
        byCat.get(catId).items.push({ id: s.id, title: s.title });
      });

    // Sort items alphabetically by title within category
    const entries = Array.from(byCat.values()).map((cat) => ({
      ...cat,
      items: [...cat.items].sort((a, b) => a.title.localeCompare(b.title)),
    }));

    // Keep a stable order using snippetCategories where possible
    const order = snippetCategories
      .filter((c) => c.id !== "all")
      .map((c) => c.id);
    entries.sort((a, b) => {
      const ia = order.indexOf(a.id);
      const ib = order.indexOf(b.id);
      if (ia === -1 && ib === -1) return a.label.localeCompare(b.label);
      if (ia === -1) return 1;
      if (ib === -1) return -1;
      return ia - ib;
    });

    return entries;
  }, []);

  const toggleCat = (id) =>
    setExpandedCats((prev) => ({ ...prev, [id]: !prev[id] }));

  const isActiveCategory = (id) => active === id;
  const isActiveComponent = (snippetId) => active === `component:${snippetId}`;

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
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            Categories
          </h3>
          <ul className="space-y-1">
            {categories.map((c) => (
              <li key={`base-${c.id}`}>
                <button
                  onClick={() => onChange?.(c.id)}
                  className={`w-full text-left px-3 py-2 rounded-md transition ${
                    isActiveCategory(c.id)
                      ? "bg-blue-50 text-blue-700"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  {c.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Snippet Categories
            </h3>
            <ul className="space-y-1">
              {snippetTree.map((cat) => {
                const expanded = !!expandedCats[cat.id];
                return (
                  <li key={`snip-cat-${cat.id}`}>
                    <div className="flex items-center">
                      <button
                        onClick={() => toggleCat(cat.id)}
                        className="px-2 py-1 text-gray-500 hover:text-gray-700 rounded-md"
                        aria-label={expanded ? "Collapse" : "Expand"}
                        aria-expanded={expanded}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 transition-transform ${
                            expanded ? "rotate-90" : ""
                          }`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => onChange?.(cat.id)}
                        className={`flex-1 text-left px-2 py-1.5 rounded-md transition text-sm ${
                          isActiveCategory(cat.id)
                            ? "bg-blue-50 text-blue-700"
                            : "hover:bg-gray-50 text-gray-700"
                        }`}
                        title={`Filter by ${cat.label}`}
                      >
                        {cat.label}
                      </button>
                    </div>

                    {expanded && cat.items?.length > 0 && (
                      <ul className="mt-1 ml-6 space-y-1">
                        {cat.items.map((item) => (
                          <li key={`snip-item-${item.id}`}>
                            <button
                              onClick={() =>
                                onChange?.(`component:${item.id}`)
                              }
                              className={`w-full text-left px-3 py-1.5 rounded-md transition text-sm ${
                                isActiveComponent(item.id)
                                  ? "bg-blue-50 text-blue-700"
                                  : "hover:bg-gray-50 text-gray-700"
                              }`}
                              title={item.title}
                            >
                              {item.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
