//
// PUBLIC_INTERFACE
// Snippets data source: Tailwind Play-ready HTML snippets.
// Each entry includes id, title, category, type ('component'|'block'), html (full Tailwind Play HTML), and tags.
// Notes:
// - Keep HTML exactly as it would be in Tailwind Play, including <script src="https://cdn.tailwindcss.com"></script>
// - Inline tailwind.config is included where applicable to simulate Tailwind Play behavior
//

export const snippetCategories = [
  { id: "all", label: "All" },
  { id: "forms", label: "Forms" },
  { id: "navigation", label: "Navigation" },
  { id: "layout", label: "Layout" },
  { id: "content", label: "Content" },
  { id: "feedback", label: "Feedback" },
];

export const snippets = [
  {
    id: "primary-button",
    title: "Primary Button",
    category: "forms",
    type: "component",
    tags: ["button", "primary", "cta"],
    html: `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: { extend: {} }
      }
    </script>
  </head>
  <body class="min-h-screen bg-gray-50 flex items-center justify-center p-6">
    <button class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">
      Primary
    </button>
  </body>
</html>`,
  },
  {
    id: "secondary-button",
    title: "Secondary Button",
    category: "forms",
    type: "component",
    tags: ["button", "secondary"],
    html: `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="min-h-screen bg-gray-50 flex items-center justify-center p-6">
    <button class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">
      Secondary
    </button>
  </body>
</html>`,
  },
  {
    id: "ghost-button",
    title: "Ghost Button",
    category: "forms",
    type: "component",
    tags: ["button", "ghost"],
    html: `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="min-h-screen bg-gray-50 flex items-center justify-center p-6">
    <button class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 bg-transparent hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">
      Ghost
    </button>
  </body>
</html>`,
  },
  {
    id: "outline-button",
    title: "Outline Button",
    category: "forms",
    type: "component",
    tags: ["button", "outline"],
    html: `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="min-h-screen bg-gray-50 flex items-center justify-center p-6">
    <button class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">
      Outline
    </button>
  </body>
</html>`,
  },
  {
    id: "search-input-with-icon",
    title: "Search Input with Icon",
    category: "forms",
    type: "component",
    tags: ["input", "search", "icon"],
    html: `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="min-h-screen bg-gray-50 flex items-center justify-center p-6">
    <div class="relative w-80">
      <svg class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l3.387 3.387a1 1 0 01-1.414 1.414l-3.387-3.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z" clip-rule="evenodd" />
      </svg>
      <input type="text" placeholder="Search..." class="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
  </body>
</html>`,
  },
  {
    id: "navbar",
    title: "Responsive Navbar",
    category: "navigation",
    type: "block",
    tags: ["navbar", "navigation", "header"],
    html: `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = { theme: { extend: {} } };
    </script>
  </head>
  <body class="min-h-screen bg-gray-50">
    <nav class="w-full bg-white border-b border-gray-200">
      <div class="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-md bg-gradient-to-br from-blue-500 to-amber-400"></div>
          <span class="font-semibold text-gray-900">Brand</span>
        </div>
        <div class="hidden md:flex items-center gap-4 text-sm">
          <a href="#" class="text-gray-700 hover:text-gray-900">Home</a>
          <a href="#" class="text-gray-700 hover:text-gray-900">Components</a>
          <a href="#" class="text-gray-700 hover:text-gray-900">Blocks</a>
          <a href="#" class="text-gray-700 hover:text-gray-900">Docs</a>
        </div>
        <button class="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-gray-300 hover:bg-gray-50">
          <span class="sr-only">Open menu</span>
          <svg class="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </nav>
    <main class="max-w-6xl mx-auto p-6">
      <div class="rounded-lg border border-dashed border-gray-300 bg-white p-8 text-gray-500 text-sm">Content...</div>
    </main>
  </body>
</html>`,
  },
  {
    id: "sidebar-collapsible",
    title: "Collapsible Sidebar",
    category: "navigation",
    type: "block",
    tags: ["sidebar", "navigation", "collapsible"],
    html: `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="min-h-screen bg-gray-50">
    <div class="flex min-h-screen">
      <aside class="w-64 border-r border-gray-200 bg-white p-4 hidden md:block">
        <h3 class="text-sm font-semibold text-gray-700 mb-2">Categories</h3>
        <ul class="space-y-1 text-sm">
          <li><a class="block px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700" href="#">Overview</a></li>
          <li><a class="block px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700" href="#">Getting Started</a></li>
          <li><a class="block px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700" href="#">Components</a></li>
          <li><a class="block px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700" href="#">Blocks</a></li>
        </ul>
      </aside>
      <main class="flex-1 p-6">
        <button class="md:hidden mb-4 inline-flex items-center rounded-md border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50">Toggle Sidebar</button>
        <div class="bg-white border border-gray-200 rounded-lg p-6 text-gray-600">Main content area...</div>
      </main>
    </div>
  </body>
</html>`,
  },
  {
    id: "code-snippet-card",
    title: "Code Snippet Card",
    category: "content",
    type: "component",
    tags: ["card", "code", "content"],
    html: `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="min-h-screen bg-gray-50 flex items-center justify-center p-6">
    <div class="max-w-md w-full bg-white border border-gray-200 rounded-xl shadow p-4">
      <div class="flex items-center justify-between">
        <h4 class="text-sm font-semibold text-gray-900">Example Snippet</h4>
        <button class="text-xs px-2 py-1 rounded-md border border-gray-300 hover:bg-gray-50">Copy</button>
      </div>
      <pre class="mt-3 text-xs bg-gray-50 border border-gray-200 rounded-lg p-3 overflow-x-auto"><code>&lt;button class="px-3 py-2 rounded-md bg-blue-600 text-white"&gt;Click&lt;/button&gt;</code></pre>
    </div>
  </body>
</html>`,
  },
  {
    id: "simple-card",
    title: "Simple Card",
    category: "layout",
    type: "component",
    tags: ["card", "layout"],
    html: `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="min-h-screen bg-gray-50 flex items-center justify-center p-6">
    <div class="bg-white border border-gray-200 rounded-xl shadow p-6 w-80">
      <h3 class="text-base font-semibold text-gray-900">Card Title</h3>
      <p class="mt-1 text-sm text-gray-600">Supporting text for a simple card.</p>
      <button class="mt-4 inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700">Action</button>
    </div>
  </body>
</html>`,
  },
  {
    id: "badges",
    title: "Badges Collection",
    category: "feedback",
    type: "component",
    tags: ["badge", "status"],
    html: `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="min-h-screen bg-gray-50 flex items-center justify-center p-6">
    <div class="flex flex-wrap gap-2">
      <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700">Info</span>
      <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-700">Warning</span>
      <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700">Success</span>
      <span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-red-50 text-red-700">Error</span>
    </div>
  </body>
</html>`,
  },
];
