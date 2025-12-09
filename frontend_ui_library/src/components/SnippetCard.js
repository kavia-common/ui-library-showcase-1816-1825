/* 
PUBLIC_INTERFACE
SnippetCard renders a Tailwind Play HTML snippet with:
- Header: title, tags, and actions (Toggle Code, Copy Code)
- Preview: sandboxed iframe that auto-resizes to content height
- Code viewer: toggled panel with full HTML and copy support

Manual verification notes:
- The iframe renders Tailwind CDN-powered markup identical to Tailwind Play.
- Copy button should copy the full HTML string (including CDN/config) to clipboard.
- Iframe auto-resizes; if height doesn't adjust, check postMessage listener and sandbox attributes.
- Limitations: External network must be allowed to load the Tailwind CDN in the iframe. No external images/fonts are included by default.
*/

import React, { useEffect, useMemo, useRef, useState } from "react";
import copy from "copy-to-clipboard";
import { createSandboxedIframe } from "../utils/iframe";
import CodeViewer from "./CodeViewer";

/**
 * PUBLIC_INTERFACE
 * SnippetCard component props:
 * - snippet: { id, title, category, type, html, tags: [] }
 */
export default function SnippetCard({ snippet }) {
  const [showCode, setShowCode] = useState(false);
  const [height, setHeight] = useState(240);
  const containerRef = useRef(null);
  const iframeRef = useRef(null);

  const title = snippet?.title || "Snippet";
  const tags = snippet?.tags || [];
  const htmlString = useMemo(() => (snippet?.html || "").trim(), [snippet]);

  // Mount iframe
  useEffect(() => {
    if (!containerRef.current) return;

    // Cleanup previous iframe
    if (iframeRef.current && iframeRef.current.parentNode) {
      iframeRef.current.parentNode.removeChild(iframeRef.current);
      iframeRef.current = null;
    }

    const iframe = createSandboxedIframe(htmlString);
    iframeRef.current = iframe;

    // Append
    containerRef.current.appendChild(iframe);

    // Message listener for height
    const onMessage = (e) => {
      const data = e.data;
      if (data && typeof data === "object" && "__snippet_iframe_height" in data) {
        const newH = Math.max(160, Math.min(1200, Number(data.__snippet_iframe_height) || 0));
        setHeight(newH);
      }
    };
    window.addEventListener("message", onMessage);

    return () => {
      window.removeEventListener("message", onMessage);
      if (iframe && iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
      }
    };
  }, [htmlString]);

  /** PUBLIC_INTERFACE */
  const handleCopy = () => {
    if (htmlString) copy(htmlString);
  };

  return (
    <div className="card p-4 h-full flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h4 className="text-base font-semibold text-gray-900 truncate">{title}</h4>
          {tags?.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-1">
              {tags.slice(0, 6).map((t) => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setShowCode((s) => !s)}
            className="btn border border-gray-300 bg-white hover:bg-gray-50 px-3 py-1 text-sm"
            aria-pressed={showCode}
          >
            {showCode ? "Hide Code" : "Show Code"}
          </button>
          <button
            onClick={handleCopy}
            className="btn btn-secondary px-3 py-1 text-sm"
            aria-label="Copy HTML"
            title="Copy HTML"
          >
            Copy
          </button>
        </div>
      </div>

      <div className="mt-4 relative">
        <div
          ref={containerRef}
          className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white"
          style={{ height }}
          aria-label="Snippet preview"
        />
      </div>

      {showCode && (
        <div className="mt-4">
          {/* Use existing CodeViewer for a consistent experience */}
          <CodeViewer code={htmlString} language="markup" />
        </div>
      )}
    </div>
  );
}
