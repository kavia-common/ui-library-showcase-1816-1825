//
// PUBLIC_INTERFACE
// Snippets data source: Tailwind Play-ready HTML snippets.
// Each entry includes id, title, category, type ('component'|'block'), description, html (full Tailwind Play HTML or fragment), and tags.
// Notes:
// - Keep HTML as it would be pasted into Tailwind Play. We include the CDN <script> for full documents.
// - Use Ocean Professional palette: primary #2563EB, secondary #F59E0B, plus Tailwind defaults.
// - Keep snippets minimal and self-contained. Use section wrapper for full-page demos where helpful.
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
  // Buttons — basic variants
  {
    id: "primary-button",
    title: "Primary Button",
    category: "forms",
    type: "component",
    tags: ["button", "primary", "cta"],
    description: "Solid button using Ocean primary blue (#2563EB).",
    html: `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="min-h-screen bg-gray-50 flex items-center justify-center p-6">
    <button class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white bg-[#2563EB] hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2">
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
    description: "Solid secondary action using Ocean amber (#F59E0B).",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 flex items-center justify-center p-6"><button class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white bg-[#F59E0B] hover:bg-amber-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2">Secondary</button></body></html>`,
  },
  {
    id: "ghost-button",
    title: "Ghost Button",
    category: "forms",
    type: "component",
    tags: ["button", "ghost"],
    description: "Transparent button with subtle hover background.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 flex items-center justify-center p-6"><button class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 bg-transparent hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2">Ghost</button></body></html>`,
  },
  {
    id: "outline-button",
    title: "Outline Button",
    category: "forms",
    type: "component",
    tags: ["button", "outline"],
    description: "Outlined button with gray border and hover fill.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 flex items-center justify-center p-6"><button class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2">Outline</button></body></html>`,
  },

  // Buttons — sizes and states
  {
    id: "buttons-sizes",
    title: "Buttons — Sizes",
    category: "forms",
    type: "component",
    tags: ["button", "sizes", "small", "large"],
    description: "Small, medium, and large primary buttons for scalable CTAs.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><div class="flex items-center gap-3">
<button class="inline-flex items-center justify-center rounded-md px-2.5 py-1.5 text-xs font-medium text-white bg-[#2563EB] hover:bg-blue-700">Small</button>
<button class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white bg-[#2563EB] hover:bg-blue-700">Medium</button>
<button class="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-base font-medium text-white bg-[#2563EB] hover:bg-blue-700">Large</button>
</div></body></html>`,
  },
  {
    id: "buttons-states",
    title: "Buttons — States",
    category: "forms",
    type: "component",
    tags: ["button", "loading", "disabled", "states"],
    description: "Default, loading, and disabled states for primary buttons.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><div class="flex gap-3">
<button class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white bg-[#2563EB] hover:bg-blue-700">Default</button>
<button class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white bg-[#2563EB] hover:bg-blue-700" disabled>Disabled</button>
<button class="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-white bg-[#2563EB] hover:bg-blue-700">
  <svg class="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
  </svg>
  Loading
</button>
</div></body></html>`,
  },

  // Icon Buttons
  {
    id: "icon-buttons",
    title: "Icon Buttons",
    category: "forms",
    type: "component",
    tags: ["button", "icon", "circular"],
    description: "Circular icon-only buttons in primary and ghost styles.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><div class="flex items-center gap-3">
<button class="inline-flex items-center justify-center h-9 w-9 rounded-full bg-[#2563EB] text-white hover:bg-blue-700" aria-label="Add">
  <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg>
</button>
<button class="inline-flex items-center justify-center h-9 w-9 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50" aria-label="Settings">
  <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.14 12.936a7.97 7.97 0 000-1.872l2.036-1.58a.5.5 0 00.12-.66l-1.928-3.338a.5.5 0 00-.607-.22l-2.4.96a8.048 8.048 0 00-1.62-.936l-.36-2.544A.5.5 0 0013.9 0h-3.8a.5.5 0 00-.496.426l-.36 2.544a8.048 8.048 0 00-1.62.936l-2.4-.96a.5.5 0 00-.607.22L.69 6.19a.5.5 0 00.12.66l2.036 1.58a7.97 7.97 0 000 1.872L.81 11.88a.5.5 0 00-.12.66l1.928 3.338a.5.5 0 00.607.22l2.4-.96c.5.36 1.044.672 1.62.936l.36 2.544A.5.5 0 009.1 24h3.8a.5.5 0 00.496-.426l.36-2.544c.576-.264 1.12-.576 1.62-.936l2.4.96a.5.5 0 00.607-.22l1.928-3.338a.5.5 0 00-.12-.66l-2.036-1.58zM12 16a4 4 0 110-8 4 4 0 010 8z"/></svg>
</button>
</div></body></html>`,
  },

  // Inputs
  {
    id: "input-default",
    title: "Input — Default",
    category: "forms",
    type: "component",
    tags: ["input", "text"],
    description: "Default text input field with focus ring.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><input type="text" placeholder="Your name" class="w-80 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"/></body></html>`,
  },
  {
    id: "input-with-icon",
    title: "Input — With Icon",
    category: "forms",
    type: "component",
    tags: ["input", "icon", "leading-icon"],
    description: "Text input with a leading search icon.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><div class="relative w-80"><svg class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l3.387 3.387a1 1 0 01-1.414 1.414l-3.387-3.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z" clip-rule="evenodd"/></svg><input placeholder="Search..." class="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]"/></div></body></html>`,
  },
  {
    id: "input-error",
    title: "Input — Error",
    category: "forms",
    type: "component",
    tags: ["input", "error", "validation"],
    description: "Input with error state and helper text.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><div class="w-80"><input placeholder="Email" class="w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"/><p class="mt-1 text-xs text-red-600">Please enter a valid email.</p></div></body></html>`,
  },

  // Search bar
  {
    id: "search-bar",
    title: "Search Bar",
    category: "forms",
    type: "component",
    tags: ["search", "input", "bar"],
    description: "Full-width search bar with icon and rounded corners.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6"><section class="max-w-3xl mx-auto"><div class="relative"><svg class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l3.387 3.387a1 1 0 01-1.414 1.414l-3.387-3.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z" clip-rule="evenodd"/></svg><input class="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]" placeholder="Search the docs..."/></div></section></body></html>`,
  },

  // Tabs
  {
    id: "tabs-underline",
    title: "Tabs — Underline",
    category: "navigation",
    type: "component",
    tags: ["tabs", "underline"],
    description: "Simple underline tabs with active state.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><div class="w-full max-w-md"><nav class="flex border-b border-gray-200 text-sm"><a href="#" class="px-3 py-2 text-[#2563EB] border-b-2 border-[#2563EB] font-medium">Overview</a><a href="#" class="px-3 py-2 text-gray-600 hover:text-gray-900">Code</a><a href="#" class="px-3 py-2 text-gray-600 hover:text-gray-900">Docs</a></nav><div class="mt-4 rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">Tab content…</div></div></body></html>`,
  },
  {
    id: "tabs-contained",
    title: "Tabs — Contained",
    category: "navigation",
    type: "component",
    tags: ["tabs", "contained", "segmented"],
    description: "Contained segmented control style tabs.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><div class="w-full max-w-md"><div class="inline-flex rounded-lg border border-gray-200 bg-white p-1 text-sm"><button class="px-3 py-1.5 rounded-md bg-[#2563EB] text-white">Overview</button><button class="px-3 py-1.5 rounded-md hover:bg-gray-50">Code</button><button class="px-3 py-1.5 rounded-md hover:bg-gray-50">Docs</button></div><div class="mt-4 rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">Tab content…</div></div></body></html>`,
  },

  // Badges / Chips
  {
    id: "chips-solid",
    title: "Badges/Chips — Solid",
    category: "feedback",
    type: "component",
    tags: ["badge", "chip", "solid"],
    description: "Solid badges for status indicators.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><div class="flex flex-wrap gap-2 text-xs">
<span class="inline-flex items-center px-2 py-1 rounded-md bg-[#2563EB] text-white">Info</span>
<span class="inline-flex items-center px-2 py-1 rounded-md bg-[#F59E0B] text-white">Warning</span>
<span class="inline-flex items-center px-2 py-1 rounded-md bg-green-600 text-white">Success</span>
<span class="inline-flex items-center px-2 py-1 rounded-md bg-red-600 text-white">Error</span>
</div></body></html>`,
  },
  {
    id: "chips-soft",
    title: "Badges/Chips — Soft",
    category: "feedback",
    type: "component",
    tags: ["badge", "chip", "soft"],
    description: "Soft background badges with colored text.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><div class="flex flex-wrap gap-2 text-xs">
<span class="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 text-blue-700">Info</span>
<span class="inline-flex items-center px-2 py-1 rounded-md bg-amber-50 text-amber-700">Warning</span>
<span class="inline-flex items-center px-2 py-1 rounded-md bg-green-50 text-green-700">Success</span>
<span class="inline-flex items-center px-2 py-1 rounded-md bg-red-50 text-red-700">Error</span>
</div></body></html>`,
  },
  {
    id: "chips-outline",
    title: "Badges/Chips — Outline",
    category: "feedback",
    type: "component",
    tags: ["badge", "chip", "outline"],
    description: "Outlined badges with subtle borders.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><div class="flex flex-wrap gap-2 text-xs">
<span class="inline-flex items-center px-2 py-1 rounded-md border border-blue-200 text-blue-700">Info</span>
<span class="inline-flex items-center px-2 py-1 rounded-md border border-amber-200 text-amber-700">Warning</span>
<span class="inline-flex items-center px-2 py-1 rounded-md border border-green-200 text-green-700">Success</span>
<span class="inline-flex items-center px-2 py-1 rounded-md border border-red-200 text-red-700">Error</span>
</div></body></html>`,
  },

  // Cards
  {
    id: "card-plain",
    title: "Card — Plain",
    category: "layout",
    type: "component",
    tags: ["card", "plain"],
    description: "Plain card with title, body, and action.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 flex items-center justify-center p-6"><div class="bg-white border border-gray-200 rounded-xl shadow p-6 w-80"><h3 class="text-base font-semibold text-gray-900">Card Title</h3><p class="mt-1 text-sm text-gray-600">Supporting text for a simple card.</p><button class="mt-4 inline-flex items-center rounded-md bg-[#2563EB] px-3 py-2 text-sm text-white hover:bg-blue-700">Action</button></div></body></html>`,
  },
  {
    id: "card-with-header",
    title: "Card — With Header",
    category: "layout",
    type: "component",
    tags: ["card", "header"],
    description: "Card with header area and actions.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 flex items-center justify-center p-6"><div class="bg-white border border-gray-200 rounded-xl shadow w-full max-w-md"><div class="px-4 py-3 border-b border-gray-200 flex items-center justify-between"><h4 class="text-sm font-semibold text-gray-900">Project</h4><button class="text-xs px-2 py-1 rounded-md border border-gray-300 hover:bg-gray-50">Manage</button></div><div class="p-4 text-sm text-gray-700">Card body content…</div></div></body></html>`,
  },
  {
    id: "card-with-media",
    title: "Card — With Media",
    category: "layout",
    type: "component",
    tags: ["card", "media", "image"],
    description: "Card with top media and supporting content.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 flex items-center justify-center p-6"><div class="bg-white border border-gray-200 rounded-xl shadow w-80 overflow-hidden"><div class="h-32 bg-gradient-to-br from-blue-500/30 to-amber-300/30"></div><div class="p-4"><h4 class="text-sm font-semibold text-gray-900">Media Card</h4><p class="text-sm text-gray-600 mt-1">Short description of the media card.</p><button class="mt-3 inline-flex items-center rounded-md bg-[#2563EB] px-3 py-2 text-sm text-white hover:bg-blue-700">Action</button></div></div></body></html>`,
  },

  // Alerts
  {
    id: "alert-info",
    title: "Alert — Info",
    category: "feedback",
    type: "component",
    tags: ["alert", "info", "notification"],
    description: "Informational alert banner.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><div class="rounded-lg border border-blue-200 bg-blue-50 text-blue-900 p-3 text-sm"><strong class="font-semibold">Info:</strong> Your profile has been updated.</div></body></html>`,
  },
  {
    id: "alert-success",
    title: "Alert — Success",
    category: "feedback",
    type: "component",
    tags: ["alert", "success"],
    description: "Positive success alert.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><div class="rounded-lg border border-green-200 bg-green-50 text-green-900 p-3 text-sm"><strong class="font-semibold">Success:</strong> Changes saved successfully.</div></body></html>`,
  },
  {
    id: "alert-warning",
    title: "Alert — Warning",
    category: "feedback",
    type: "component",
    tags: ["alert", "warning"],
    description: "Cautionary warning alert.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><div class="rounded-lg border border-amber-200 bg-amber-50 text-amber-900 p-3 text-sm"><strong class="font-semibold">Warning:</strong> Please review your billing info.</div></body></html>`,
  },
  {
    id: "alert-error",
    title: "Alert — Error",
    category: "feedback",
    type: "component",
    tags: ["alert", "error"],
    description: "Error alert with red tones.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><div class="rounded-lg border border-red-200 bg-red-50 text-red-900 p-3 text-sm"><strong class="font-semibold">Error:</strong> Something went wrong.</div></body></html>`,
  },

  // Pagination
  {
    id: "pagination",
    title: "Pagination",
    category: "navigation",
    type: "component",
    tags: ["pagination", "nav", "list"],
    description: "Compact pagination with active state.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><div class="inline-flex items-center gap-1 rounded-lg border border-gray-300 bg-white p-1 text-sm"><button class="px-2 py-1 rounded-md hover:bg-gray-50">Prev</button><button class="px-2 py-1 rounded-md bg-[#2563EB] text-white">1</button><button class="px-2 py-1 rounded-md hover:bg-gray-50">2</button><button class="px-2 py-1 rounded-md hover:bg-gray-50">3</button><button class="px-2 py-1 rounded-md hover:bg-gray-50">Next</button></div></body></html>`,
  },

  // Breadcrumbs
  {
    id: "breadcrumbs",
    title: "Breadcrumbs",
    category: "navigation",
    type: "component",
    tags: ["breadcrumbs", "nav"],
    description: "Simple breadcrumb trail with current page.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><nav class="text-sm text-gray-600" aria-label="Breadcrumb"><ol class="inline-flex items-center gap-2"><li><a href="#" class="hover:text-gray-900">Home</a></li><li>/</li><li><a href="#" class="hover:text-gray-900">Projects</a></li><li>/</li><li class="text-gray-900 font-medium" aria-current="page">UI Library</li></ol></nav></body></html>`,
  },

  // Dropdown
  {
    id: "dropdown-menu",
    title: "Dropdown Menu",
    category: "navigation",
    type: "component",
    tags: ["dropdown", "menu"],
    description: "Static dropdown example (disclosure) with menu items.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><div class="relative inline-block text-left">
<button class="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
  Menu
  <svg class="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.7a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clip-rule="evenodd"/></svg>
</button>
<div class="absolute right-0 mt-2 w-40 rounded-lg border border-gray-200 bg-white shadow-lg">
  <a class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50" href="#">Profile</a>
  <a class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50" href="#">Settings</a>
  <a class="block px-3 py-2 text-sm text-red-600 hover:bg-red-50" href="#">Sign out</a>
</div>
</div></body></html>`,
  },

  // Toggle / Switch
  {
    id: "toggle-switch",
    title: "Toggle / Switch",
    category: "forms",
    type: "component",
    tags: ["toggle", "switch"],
    description: "Accessible toggle switch (static) with primary accent.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><button role="switch" aria-checked="true" class="relative inline-flex h-6 w-11 items-center rounded-full bg-[#2563EB]">
  <span class="sr-only">Enable notifications</span>
  <span class="inline-block h-5 w-5 translate-x-5 transform rounded-full bg-white"></span>
</button></body></html>`,
  },

  // Checkbox / Radio groups
  {
    id: "checkbox-group",
    title: "Checkbox Group",
    category: "forms",
    type: "component",
    tags: ["checkbox", "group"],
    description: "Vertical list of checkbox options.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><fieldset class="space-y-3 text-sm text-gray-700"><legend class="font-medium text-gray-900 mb-1">Features</legend><label class="flex items-center gap-2"><input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-[#2563EB] focus:ring-[#2563EB]"/><span>Analytics</span></label><label class="flex items-center gap-2"><input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-[#2563EB] focus:ring-[#2563EB]"/><span>Reports</span></label><label class="flex items-center gap-2"><input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-[#2563EB] focus:ring-[#2563EB]"/><span>Alerts</span></label></fieldset></body></html>`,
  },
  {
    id: "radio-group",
    title: "Radio Group",
    category: "forms",
    type: "component",
    tags: ["radio", "group"],
    description: "Vertical radio group selection.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><fieldset class="space-y-3 text-sm text-gray-700"><legend class="font-medium text-gray-900 mb-1">Select plan</legend><label class="flex items-center gap-2"><input type="radio" name="plan" class="h-4 w-4 border-gray-300 text-[#2563EB] focus:ring-[#2563EB]"/><span>Starter</span></label><label class="flex items-center gap-2"><input type="radio" name="plan" class="h-4 w-4 border-gray-300 text-[#2563EB] focus:ring-[#2563EB]"/><span>Pro</span></label><label class="flex items-center gap-2"><input type="radio" name="plan" class="h-4 w-4 border-gray-300 text-[#2563EB] focus:ring-[#2563EB]"/><span>Enterprise</span></label></fieldset></body></html>`,
  },

  // Tooltip
  {
    id: "tooltip",
    title: "Tooltip",
    category: "feedback",
    type: "component",
    tags: ["tooltip", "hover"],
    description: "Static tooltip example positioned above an icon button.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script><style>[data-tooltip]{position:relative} [data-tooltip]:hover .tooltip{opacity:1;transform:translate(-50%,-6px);}</style></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><button data-tooltip class="relative inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-300 bg-white hover:bg-gray-50">
  <svg class="h-5 w-5 text-gray-700" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
  <span class="tooltip pointer-events-none absolute left-1/2 bottom-full mb-2 -translate-x-1/2 rounded-md bg-gray-900 px-2 py-1 text-xs text-white opacity-0 transition">More info</span>
</button></body></html>`,
  },

  // Modal dialog
  {
    id: "modal-dialog",
    title: "Modal Dialog",
    category: "feedback",
    type: "component",
    tags: ["modal", "dialog", "overlay"],
    description: "Centered modal overlay with title, text, and actions.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><div class="relative z-10" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="fixed inset-0 bg-gray-900/50"></div><div class="fixed inset-0 flex items-center justify-center p-4"><div class="w-full max-w-md rounded-xl bg-white p-6 shadow-lg"><h3 id="modal-title" class="text-lg font-semibold text-gray-900">Confirm action</h3><p class="mt-1 text-sm text-gray-600">Are you sure you want to proceed? This action cannot be undone.</p><div class="mt-4 flex justify-end gap-2"><button class="inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">Cancel</button><button class="inline-flex items-center rounded-lg bg-[#2563EB] px-3 py-2 text-sm text-white hover:bg-blue-700">Confirm</button></div></div></div></div></body></html>`,
  },

  // Table
  {
    id: "table-simple",
    title: "Table — Simple",
    category: "content",
    type: "component",
    tags: ["table", "data"],
    description: "Basic table with head row and zebra-divided body.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><div class="overflow-x-auto bg-white border border-gray-200 rounded-xl w-full max-w-3xl"><table class="min-w-full text-sm"><thead class="bg-gray-50 text-gray-600"><tr><th class="px-4 py-2 text-left">Name</th><th class="px-4 py-2 text-left">Role</th><th class="px-4 py-2 text-left">Email</th></tr></thead><tbody class="divide-y divide-gray-200 text-gray-700"><tr><td class="px-4 py-2">Leslie Alexander</td><td class="px-4 py-2">Engineer</td><td class="px-4 py-2">leslie@example.com</td></tr><tr><td class="px-4 py-2">Judith Black</td><td class="px-4 py-2">PM</td><td class="px-4 py-2">judith@example.com</td></tr><tr><td class="px-4 py-2">Tom Cook</td><td class="px-4 py-2">Designer</td><td class="px-4 py-2">tom@example.com</td></tr></tbody></table></div></body></html>`,
  },

  // Navbar with active state
  {
    id: "navbar-active",
    title: "Navbar — Active Link",
    category: "navigation",
    type: "block",
    tags: ["navbar", "active", "header"],
    description: "Responsive navbar with active link state.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script><script>tailwind.config={theme:{extend:{}}}</script></head><body class="min-h-screen bg-gray-50">
<nav class="w-full bg-white border-b border-gray-200">
  <div class="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
    <div class="flex items-center gap-2">
      <div class="w-7 h-7 rounded-md bg-gradient-to-br from-blue-500 to-amber-400"></div>
      <span class="font-semibold text-gray-900">Brand</span>
    </div>
    <div class="hidden md:flex items-center gap-2 text-sm">
      <a href="#" class="px-3 py-2 rounded-md text-[#2563EB] bg-blue-50">Home</a>
      <a href="#" class="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50">Components</a>
      <a href="#" class="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50">Blocks</a>
      <a href="#" class="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50">Docs</a>
    </div>
    <button class="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-gray-300 hover:bg-gray-50" aria-label="Open menu">
      <svg class="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"/></svg>
    </button>
  </div>
</nav>
<main class="max-w-6xl mx-auto p-6"><div class="rounded-lg border border-dashed border-gray-300 bg-white p-8 text-gray-500 text-sm">Content...</div></main>
</body></html>`,
  },

  // Sidebar filters (block)
  {
    id: "sidebar-filters",
    title: "Sidebar — Filters",
    category: "navigation",
    type: "block",
    tags: ["sidebar", "filters"],
    description: "Left sidebar with filter categories and main content.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50">
<div class="flex min-h-screen">
  <aside class="w-64 border-r border-gray-200 bg-white p-4 hidden md:block">
    <h3 class="text-sm font-semibold text-gray-700 mb-2">Categories</h3>
    <ul class="space-y-1 text-sm">
      <li><a class="block px-3 py-2 rounded-md bg-blue-50 text-[#2563EB]" href="#">All</a></li>
      <li><a class="block px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700" href="#">Forms</a></li>
      <li><a class="block px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700" href="#">Navigation</a></li>
      <li><a class="block px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700" href="#">Feedback</a></li>
    </ul>
  </aside>
  <main class="flex-1 p-6">
    <div class="bg-white border border-gray-200 rounded-lg p-6 text-gray-600">Main content area...</div>
  </main>
</div>
</body></html>`,
  },

  // Code block card
  {
    id: "code-block-card",
    title: "Code Block Card",
    category: "content",
    type: "component",
    tags: ["card", "code", "content"],
    description: "Card with header actions and code block area.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 flex items-center justify-center p-6">
<div class="max-w-md w-full bg-white border border-gray-200 rounded-xl shadow p-4">
  <div class="flex items-center justify-between">
    <h4 class="text-sm font-semibold text-gray-900">Example Snippet</h4>
    <button class="text-xs px-2 py-1 rounded-md border border-gray-300 hover:bg-gray-50">Copy</button>
  </div>
  <pre class="mt-3 text-xs bg-gray-50 border border-gray-200 rounded-lg p-3 overflow-x-auto"><code>&lt;button class="px-3 py-2 rounded-md bg-[#2563EB] text-white"&gt;Click&lt;/button&gt;</code></pre>
</div>
</body></html>`,
  },

  // Dropdown already added, add Toggle/Checkbox/Radio done.

  // Tooltip done.

  // Modal done.

  // Table done.

  // Existing Navbar and Sidebar-collapsible (kept from previous set)
  {
    id: "navbar",
    title: "Responsive Navbar",
    category: "navigation",
    type: "block",
    tags: ["navbar", "navigation", "header"],
    description: "Responsive navbar with brand and links.",
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
    description: "Two-column layout with a static sidebar (mobile toggle implied).",
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

  // Code snippet card (kept)
  {
    id: "code-snippet-card",
    title: "Code Snippet Card",
    category: "content",
    type: "component",
    tags: ["card", "code", "content"],
    description: "Card showcasing a code block with copy action.",
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
      <pre class="mt-3 text-xs bg-gray-50 border border-gray-200 rounded-lg p-3 overflow-x-auto"><code>&lt;button class="px-3 py-2 rounded-md bg-[#2563EB] text-white"&gt;Click&lt;/button&gt;</code></pre>
    </div>
  </body>
</html>`,
  },

  // Buttons demo blocks from assets (kept)
  {
    id: "buttons-card",
    title: "Buttons Card",
    category: "layout",
    type: "block",
    tags: ["Buttons", "Blocks", "Card", "Demo", "Center"],
    description: "Centered card containing three button variants.",
    html: `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Buttons Card Demo</title>
    <style>
      html { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
    </style>
  </head>
  <body class="min-h-screen bg-white">
    <section class="min-h-screen flex items-center justify-center px-3">
      <div class="w-full max-w-sm rounded-xl shadow border border-gray-300 bg-white p-3">
        <div class="flex flex-col items-center gap-2">
          <button type="button" class="inline-flex items-center justify-center rounded-lg bg-[#2563EB] px-3 py-2 text-sm font-medium text-white hover:brightness-110">Primary</button>
          <button type="button" class="inline-flex items-center justify-center rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:brightness-110">Secondary</button>
          <button type="button" class="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400">Outline</button>
        </div>
      </div>
    </section>
  </body>
</html>
`,
  },
  {
    id: "buttons-inline",
    title: "Buttons Inline",
    category: "forms",
    type: "component",
    tags: ["Buttons", "Inline", "Toolbar", "CTA"],
    description: "Inline button set for toolbar usage.",
    html: `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Buttons Inline</title>
  </head>
  <body class="bg-white p-6">
    <div class="flex flex-wrap items-center gap-3">
      <button type="button" class="inline-flex items-center justify-center rounded-lg bg-[#2563EB] px-3 py-2 text-sm font-medium text-white hover:brightness-110">Primary</button>
      <button type="button" class="inline-flex items-center justify-center rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:brightness-110">Secondary</button>
      <button type="button" class="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400">Outline</button>
    </div>
  </body>
</html>
`,
  },
  {
    id: "button-group-component",
    title: "Button Group Component",
    category: "forms",
    type: "component",
    tags: ["Buttons", "Group", "Component", "Card"],
    description: "Component-only group of three buttons for embedding.",
    html: `<!-- Button Group Component -->
<div class="w-full max-w-sm rounded-xl shadow border border-gray-300 bg-white p-3">
  <div class="flex flex-col items-center gap-2">
    <button type="button" class="inline-flex items-center justify-center rounded-lg bg-[#2563EB] px-3 py-2 text-sm font-medium text-white hover:brightness-110">
      Primary
    </button>
    <button type="button" class="inline-flex items-center justify-center rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:brightness-110">
      Secondary
    </button>
    <button type="button" class="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400">
      Outline
    </button>
  </div>
</div>
`,
  },

  // Search input with icon (kept)
  {
    id: "search-input-with-icon",
    title: "Search Input with Icon",
    category: "forms",
    type: "component",
    tags: ["input", "search", "icon"],
    description: "Input with leading search icon and focus ring.",
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
      <input type="text" placeholder="Search..." class="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]" />
    </div>
  </body>
</html>`,
  },

  // Header with search (kept)
  {
    id: "header-with-search",
    title: "Header with Search",
    category: "navigation",
    type: "block",
    tags: ["header", "search", "navbar"],
    description: "Header bar containing brand, search field, and actions.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50"><header class="w-full bg-white border-b border-gray-200"><div class="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-3"><div class="flex items-center gap-2"><div class="w-7 h-7 rounded-md bg-gradient-to-br from-blue-500 to-amber-400"></div><span class="font-semibold text-gray-900">UI Library</span></div><div class="flex-1 max-w-md"><div class="relative"><svg class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l3.387 3.387a1 1 0 01-1.414 1.414l-3.387-3.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z" clip-rule="evenodd" /></svg><input placeholder="Search..." class="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]"/></div></div><div class="hidden md:flex items-center gap-4 text-sm"><a href="#" class="text-gray-700 hover:text-gray-900">Docs</a><a href="#" class="text-gray-700 hover:text-gray-900">GitHub</a></div></div></header><main class="max-w-6xl mx-auto p-6"><div class="rounded-lg border border-dashed border-gray-300 bg-white p-8 text-gray-500 text-sm">Content…</div></main></body></html>`,
  },

  // Tabs (contained) already added generic one earlier, keep a general tabs too
  {
    id: "tabs",
    title: "Tabs",
    category: "navigation",
    type: "component",
    tags: ["tabs", "navigation", "switcher"],
    description: "Segmented tabs with container and content area.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><div class="w-full max-w-md"><div class="inline-flex rounded-lg border border-gray-200 bg-white p-1 text-sm"><button class="px-3 py-1.5 rounded-md bg-[#2563EB] text-white">Overview</button><button class="px-3 py-1.5 rounded-md hover:bg-gray-50">Code</button><button class="px-3 py-1.5 rounded-md hover:bg-gray-50">Docs</button></div><div class="mt-4 rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-700">Tab content area…</div></div></body></html>`,
  },

  // Pricing / Hero / Feature blocks (keep a couple essentials)
  {
    id: "simple-hero",
    title: "Simple Hero",
    category: "layout",
    type: "block",
    tags: ["hero", "marketing", "header"],
    description: "Gradient-backed hero with heading and actions.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50"><section class="bg-gradient-to-br from-blue-50 to-white border border-gray-100 rounded-2xl mx-auto max-w-6xl mt-10 p-10"><span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700">Ocean Professional</span><h2 class="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Build with Tailwind components</h2><p class="mt-2 text-gray-600 max-w-2xl">A modern collection of accessible components and blocks. Copy, paste, and ship.</p><div class="mt-6 space-x-3"><a class="inline-flex items-center rounded-lg bg-[#2563EB] px-4 py-2 text-sm font-medium text-white hover:bg-blue-700" href="#">Get Started</a><a class="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" href="#">View Docs</a></div></section></body></html>`,
  },
  {
    id: "pricing-grid",
    title: "Pricing Grid",
    category: "layout",
    type: "block",
    tags: ["pricing", "plans", "grid"],
    description: "Three-card pricing layout with emphasis ring.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6"><div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-6"><div class="bg-white border border-gray-200 rounded-xl p-6"><h3 class="text-lg font-semibold text-gray-900">Starter</h3><p class="mt-1 text-gray-600">$29/mo</p><ul class="mt-4 space-y-2 text-sm text-gray-600"><li>• Feature one</li><li>• Feature two</li><li>• Feature three</li></ul><button class="mt-5 inline-flex items-center justify-center rounded-lg bg-[#2563EB] px-4 py-2 text-sm text-white hover:bg-blue-700 w-full">Choose Starter</button></div><div class="bg-white border border-gray-200 rounded-xl p-6 ring-2 ring-[#2563EB]"><h3 class="text-lg font-semibold text-gray-900">Pro</h3><p class="mt-1 text-gray-600">$59/mo</p><ul class="mt-4 space-y-2 text-sm text-gray-600"><li>• Feature one</li><li>• Feature two</li><li>• Feature three</li></ul><button class="mt-5 inline-flex items-center justify-center rounded-lg bg-[#2563EB] px-4 py-2 text-sm text-white hover:bg-blue-700 w-full">Choose Pro</button></div><div class="bg-white border border-gray-200 rounded-xl p-6"><h3 class="text-lg font-semibold text-gray-900">Enterprise</h3><p class="mt-1 text-gray-600">Custom</p><ul class="mt-4 space-y-2 text-sm text-gray-600"><li>• Feature one</li><li>• Feature two</li><li>• Feature three</li></ul><button class="mt-5 inline-flex items-center justify-center rounded-lg bg-[#2563EB] px-4 py-2 text-sm text-white hover:bg-blue-700 w-full">Contact Sales</button></div></div></body></html>`,
  },

  // Pagination (kept earlier), Breadcrumbs (kept earlier)

  // Dropdown (added), Toggle (added), Checkbox/Radio (added), Tooltip (added)

  // Simple feature/content blocks
  {
    id: "feature-list",
    title: "Feature List",
    category: "content",
    type: "component",
    tags: ["list", "features", "content"],
    description: "List of features with check icons.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6 flex items-center justify-center"><ul class="bg-white border border-gray-200 rounded-xl p-5 w-96 space-y-2 text-sm text-gray-700"><li class="flex items-center gap-2"><span class="inline-flex h-5 w-5 items-center justify-center rounded bg-green-100 text-green-700">✓</span> Fast and lightweight</li><li class="flex items-center gap-2"><span class="inline-flex h-5 w-5 items-center justify-center rounded bg-green-100 text-green-700">✓</span> Responsive out of the box</li><li class="flex items-center gap-2"><span class="inline-flex h-5 w-5 items-center justify-center rounded bg-green-100 text-green-700">✓</span> Accessible components</li></ul></body></html>`,
  },
  {
    id: "stats-cards",
    title: "Stats Cards",
    category: "content",
    type: "block",
    tags: ["stats", "dashboard", "cards"],
    description: "Grid of stat cards for dashboards.",
    html: `<!doctype html><html><head><meta charset="utf-8"/><script src="https://cdn.tailwindcss.com"></script></head><body class="min-h-screen bg-gray-50 p-6"><div class="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6"><div class="bg-white border border-gray-200 rounded-xl p-5"><div class="text-sm text-gray-500">Revenue</div><div class="mt-1 text-2xl font-semibold text-gray-900">$24,500</div></div><div class="bg-white border border-gray-200 rounded-xl p-5"><div class="text-sm text-gray-500">Customers</div><div class="mt-1 text-2xl font-semibold text-gray-900">1,248</div></div><div class="bg-white border border-gray-200 rounded-xl p-5"><div class="text-sm text-gray-500">Churn</div><div class="mt-1 text-2xl font-semibold text-gray-900">2.3%</div></div><div class="bg-white border border-gray-200 rounded-xl p-5"><div class="text-sm text-gray-500">MRR</div><div class="mt-1 text-2xl font-semibold text-gray-900">$8,120</div></div></div></body></html>`,
  },

  // Simple card and badges (already represented above)

  // Existing generic tabs/pagination/breadcrumbs already covered

  // Buttons — consolidated play-ready fragment (kept)
  {
    id: "buttons-primary-secondary-outline-play",
    title: "Buttons — Primary/Secondary/Outline (Play-ready)",
    category: "forms",
    type: "component",
    tags: ["buttons","primary","secondary","outline","play"],
    description: "Inline buttons ready to paste into a Play canvas section.",
    html: `<section class="min-h-screen bg-gray-50 p-6">
  <div class="bg-white rounded-xl shadow border border-gray-200 p-4">
    <div class="flex gap-3">
      <button class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-[#2563EB] text-white hover:brightness-110">Primary</button>
      <button class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-[#F59E0B] text-white hover:brightness-110">Secondary</button>
      <button class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50">Outline</button>
    </div>
  </div>
</section>`
  },
];
