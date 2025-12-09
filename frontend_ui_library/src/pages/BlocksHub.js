import React, { useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import LibraryItem from "../components/LibraryItem";
import { categories, blocksData } from "../data/library";

/**
 * PUBLIC_INTERFACE
 * BlocksHub renders seed blocks with search and category filters.
 */
export default function BlocksHub() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("all");

  const filtered = useMemo(() => {
    return blocksData.filter((b) => {
      const catMatch = cat === "all" ? true : b.category === cat;
      const q = query.trim().toLowerCase();
      const qMatch =
        !q ||
        b.name.toLowerCase().includes(q) ||
        b.keywords?.some((k) => k.toLowerCase().includes(q));
      return catMatch && qMatch;
    });
  }, [query, cat]);

  return (
    <div className="ocean-container py-6">
      <div className="flex gap-6">
        <Sidebar categories={categories} active={cat} onChange={setCat} />
        <main className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Blocks</h2>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search blocks..."
              className="w-64 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
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
