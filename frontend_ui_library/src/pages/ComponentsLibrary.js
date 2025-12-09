import React, { useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import LibraryItem from "../components/LibraryItem";
import { categories, componentsData } from "../data/library";

/**
 * PUBLIC_INTERFACE
 * ComponentsLibrary renders seed components with search and category filters.
 */
export default function ComponentsLibrary() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("all");

  const filtered = useMemo(() => {
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

  return (
    <div className="ocean-container py-6">
      <div className="flex gap-6">
        <Sidebar categories={categories} active={cat} onChange={setCat} />
        <main className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Components</h2>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search components..."
              className="w-64 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <LibraryItem
                key={item.id}
                title={item.name}
                category={item.category}
                Preview={item.preview}
                code={item.code}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
