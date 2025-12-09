import React, { useState } from "react";
import CodeViewer from "./CodeViewer";

/**
 * PUBLIC_INTERFACE
 * LibraryItem shows a preview card with optional code toggle.
 */
export default function LibraryItem({ title, category, Preview, code }) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="card p-4 h-full flex flex-col">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="text-base font-semibold text-gray-900">{title}</h4>
          {category && <span className="badge mt-1">{category}</span>}
        </div>
        <button
          onClick={() => setShowCode((s) => !s)}
          className="btn border border-gray-300 bg-white hover:bg-gray-50 px-3 py-1 text-sm"
        >
          {showCode ? "Hide code" : "View code"}
        </button>
      </div>
      <div className="mt-4">
        {Preview && <Preview />}
      </div>
      {showCode && <CodeViewer code={code} />}
    </div>
  );
}
