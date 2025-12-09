import React from "react";
import { Highlight } from "prism-react-renderer";
import copy from "copy-to-clipboard";

/**
 * PUBLIC_INTERFACE
 * CodeViewer renders highlighted code with a copy-to-clipboard control.
 */
export default function CodeViewer({ code, language = "jsx" }) {
  /** PUBLIC_INTERFACE */
  const handleCopy = () => {
    if (code) copy(code);
  };

  return (
    <div className="mt-3 relative">
      <button
        onClick={handleCopy}
        className="btn btn-secondary absolute right-2 top-2 px-3 py-1 text-xs"
        aria-label="Copy code"
        title="Copy code"
      >
        Copy
      </button>
      <Highlight code={code.trim()} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} overflow-x-auto rounded-lg p-4 text-sm`} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
