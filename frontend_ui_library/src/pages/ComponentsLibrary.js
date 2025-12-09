import React, { useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import LibraryItem from "../components/LibraryItem";
import { categories as baseCategories, componentsData } from "../data/library";
import { snippets, snippetCategories } from "../data/snippets";
import SnippetCard from "../components/SnippetCard";

/**
 * PUBLIC_INTERFACE
 * ComponentsLibrary renders seed components with search and category filters,
 * and now also includes Tailwind Play snippet components.
 */
export default function ComponentsLibrary() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("all");
  const [view, setView] = useState("components"); // 'components' | 'snippets'
  const [componentFilter, setComponentFilter] = useState(null); // snippet.id when selecting a component

  const mergedCategories = useMemo(() => {
    // Keep existing categories and ensure consistency with snippet categories
    const all = new Map();
    [...baseCategories, ...snippetCategories].forEach((c) => all.set(c.id, c));
    return Array.from(all.values());
  }, []);

  const filteredComponents = useMemo(() => {
    return componentsData.filter((c) => {
      const catMatch = cat === "all" ? true : c.category === cat;
      const q = query.trim().toLowerCase();
      const qMatch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.keywords?.some((k) => k.toLowerCase().includes(q));
      return catMatch && qMatch;
    });
  }, [query, cat]);

  const snippetComponents = useMemo(() => {
    return snippets.filter((s) => s.type === "component");
  }, []);

  const filteredSnippets = useMemo(() => {
    // If specific component selection exists, filter to that snippet only
    if (componentFilter) {
      return snippetComponents.filter((s) => s.id === componentFilter);
    }
    return snippetComponents.filter((s) => {
      const catMatch = cat === "all" ? true : s.category === cat;
      const q = query.trim().toLowerCase();
      const searchable = [s.title, ...(s.tags || [])].join(" ").toLowerCase();
      return catMatch && (!q || searchable.includes(q));
    });
  }, [query, cat, snippetComponents, componentFilter]);

  return (
    <div className="ocean-container py-6">
      <div className="flex gap-6">
        <Sidebar
          categories={mergedCategories}
          active={componentFilter ? `component:${componentFilter}` : cat}
          onChange={(val) => {
            if (typeof val === "string" && val.startsWith("component:")) {
              const id = val.split(":")[1];
              setComponentFilter(id);
              setView("snippets");
            } else {
              setComponentFilter(null);
              setCat(val);
            }
          }}
        />
        <main className="flex-1">
          <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold text-gray-900">Components</h2>
              <div className="ml-2 inline-flex rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setView("components")}
                  className={`px-3 py-1.5 text-sm ${view === "components" ? "bg-blue-50 text-blue-700" : "hover:bg-gray-50 text-gray-700"}`}
                >
                  UI Components
                </button>
                <button
                  onClick={() => setView("snippets")}
                  className={`px-3 py-1.5 text-sm ${view === "snippets" ? "bg-blue-50 text-blue-700" : "hover:bg-gray-50 text-gray-700"}`}
                >
                  Snippets
                </button>
              </div>
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${
                view === "snippets" ? (componentFilter ? "selected snippet" : "snippets") : "components"
              }...`}
              className="w-64 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>

          {view === "components" ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredComponents.map((item) => (
                <LibraryItem
                  key={item.id}
                  title={item.name}
                  category={item.category}
                  Preview={item.preview}
                  code={item.code}
                />
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSnippets.map((snip) => (
                <SnippetCard key={snip.id} snippet={snip} />
              ))}
              {filteredSnippets.length === 0 && (
                <div className="text-sm text-gray-600">
                  No snippets match your filters.
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
