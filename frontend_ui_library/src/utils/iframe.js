/**
 * PUBLIC_INTERFACE
 * createSandboxedHtml builds a full HTML with height postMessage for iframe srcdoc.
 * Ensures message posting of height for auto-resize and isolates styles.
 */
export function createSandboxedHtml(rawHtml) {
  // If the snippet already includes <!doctype or <html>, assume it's a full doc and inject height script.
  const hasDocument = /<!doctype html>|<html[^>]*>/i.test(rawHtml);
  const heightScript = `
<script>
  (function () {
    function post() {
      var body = document.body;
      var html = document.documentElement;
      var height = Math.max(
        body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight
      );
      parent.postMessage({ __snippet_iframe_height: height }, "*");
    }
    window.addEventListener("load", post);
    new ResizeObserver(post).observe(document.body);
    setTimeout(post, 50);
  })();
</script>`;

  if (hasDocument) {
    // Inject height script before </body> if possible.
    if (rawHtml.includes("</body>")) {
      return rawHtml.replace("</body>", `${heightScript}\n</body>`);
    }
    return rawHtml + heightScript;
  }

  // Wrap fragment with a minimal document scaffold and Tailwind CDN isolation.
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-transparent">
    ${rawHtml}
    ${heightScript}
  </body>
</html>`;
}

/**
 * PUBLIC_INTERFACE
 * createSandboxedIframe returns a configured iframe element with sandbox and srcdoc set.
 * Consumers should append to the DOM and listen for window message to adjust height.
 */
export function createSandboxedIframe(htmlString) {
  const doc = createSandboxedHtml(htmlString);
  const iframe = document.createElement("iframe");
  iframe.setAttribute("sandbox", "allow-scripts allow-same-origin");
  iframe.setAttribute("scrolling", "no");
  iframe.style.width = "100%";
  iframe.style.border = "0";
  iframe.srcdoc = doc;
  return iframe;
}
