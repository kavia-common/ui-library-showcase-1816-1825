import React, { useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import LibraryItem from "../components/LibraryItem";
import { categories as baseCategories, blocksData } from "../data/library";
import { snippets, snippetCategories } from "../data/snippets";
import SnippetCard from "../components/SnippetCard";

/**
 * PUBLIC_INTERFACE
 * BlocksHub renders seed blocks with search and category filters,
 * and integrates Tailwind Play snippet blocks.
 */
export default function BlocksHub() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("all");
  const [view, setView] = useState("blocks"); // 'blocks' | 'snippets'

  const mergedCategories = useMemo(() => {
    const all = new Map();
    [...baseCategories, ...snippetCategories].forEach((c) => all.set(c.id, c));
    return Array.from(all.values());
  }, []);

  const filteredBlocks = useMemo(() => {
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

  const snippetBlocks = useMemo(
    () => snippets.filter((s) => s.type === "block"),
    []
  );

  const filteredSnippetBlocks = useMemo(() => {
    return snippetBlocks.filter((s) => {
      const catMatch = cat === "all" ? true : s.category === cat;
      const q = query.trim().toLowerCase();
      const searchable = [s.title, ...(s.tags || [])].join(" ").toLowerCase();
      return catMatch && (!q || searchable.includes(q));
    });
  }, [query, cat, snippetBlocks]);

  return (
    <div className="ocean-container py-6">
      <div className="flex gap-6">
        <Sidebar categories={mergedCategories} active={cat} onChange={setCat} />
        <main className="flex-1">
          <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold text-gray-900">Blocks</h2>
              <div className="ml-2 inline-flex rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setView("blocks")}
                  className={`px-3 py-1.5 text-sm ${view === "blocks" ? "bg-blue-50 text-blue-700" : "hover:bg-gray-50 text-gray-700"}`}
                >
                  UI Blocks
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
              placeholder={`Search ${view === "snippets" ? "snippets" : "blocks"}...`}
              className="w-64 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>

          {view === "blocks" ? (
            <div className="grid sm:grid-cols-2 gap-6">
              {filteredBlocks.map((item) => (
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
            <div className="grid sm:grid-cols-2 gap-6">
              {filteredSnippetBlocks.map((snip) => (
                <SnippetCard key={snip.id} snippet={snip} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
