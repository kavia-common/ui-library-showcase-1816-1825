export const categories = [
  { id: "all", label: "All" },
  { id: "forms", label: "Forms" },
  { id: "navigation", label: "Navigation" },
  { id: "feedback", label: "Feedback" },
  { id: "layout", label: "Layout" },
];

export const componentsData = [
  {
    id: "button",
    name: "Button",
    category: "forms",
    keywords: ["button", "cta", "action"],
    preview: () => (
      <div className="space-x-3">
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn border border-gray-300 bg-white hover:bg-gray-50">Ghost</button>
      </div>
    ),
    code: `<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>
<button className="btn border border-gray-300 bg-white hover:bg-gray-50">Ghost</button>`,
  },
  {
    id: "badge",
    name: "Badge",
    category: "feedback",
    keywords: ["badge", "status", "label"],
    preview: () => (
      <div className="space-x-2">
        <span className="badge">New</span>
        <span className="badge bg-amber-50 text-amber-700">Warning</span>
        <span className="badge bg-red-50 text-red-700">Error</span>
      </div>
    ),
    code: `<span className="badge">New</span>
<span className="badge bg-amber-50 text-amber-700">Warning</span>
<span className="badge bg-red-50 text-red-700">Error</span>`,
  },
  {
    id: "card",
    name: "Card",
    category: "layout",
    keywords: ["card", "container", "panel"],
    preview: () => (
      <div className="card p-4">
        <h4 className="text-lg font-semibold text-gray-900">Card Title</h4>
        <p className="text-gray-600 mt-1">Supporting text for a card.</p>
        <div className="mt-3">
          <button className="btn btn-primary">Action</button>
        </div>
      </div>
    ),
    code: `<div className="card p-4">
  <h4 className="text-lg font-semibold text-gray-900">Card Title</h4>
  <p className="text-gray-600 mt-1">Supporting text for a card.</p>
  <div className="mt-3">
    <button className="btn btn-primary">Action</button>
  </div>
</div>`,
  },
  {
    id: "alert",
    name: "Alert",
    category: "feedback",
    keywords: ["alert", "notification"],
    preview: () => (
      <div className="rounded-lg border border-amber-200 bg-amber-50 text-amber-900 p-3">
        <strong className="font-semibold">Heads up:</strong> This is a warning alert.
      </div>
    ),
    code: `<div className="rounded-lg border border-amber-200 bg-amber-50 text-amber-900 p-3">
  <strong className="font-semibold">Heads up:</strong> This is a warning alert.
</div>`,
  },
];

export const blocksData = [
  {
    id: "hero",
    name: "Hero",
    category: "layout",
    keywords: ["hero", "header", "marketing"],
    preview: () => (
      <div className="bg-ocean-gradient rounded-2xl p-8 md:p-12 shadow-soft border border-gray-100">
        <div className="max-w-2xl">
          <span className="badge mb-3">Ocean Professional</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Build faster with a modern UI library
          </h2>
          <p className="text-gray-600 mt-3">
            A Tailwind-based component collection with production-ready blocks.
          </p>
          <div className="mt-6 space-x-3">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">View Docs</button>
          </div>
        </div>
      </div>
    ),
    code: `<div className="bg-ocean-gradient rounded-2xl p-8 md:p-12 shadow-soft border border-gray-100">
  <div className="max-w-2xl">
    <span className="badge mb-3">Ocean Professional</span>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
      Build faster with a modern UI library
    </h2>
    <p className="text-gray-600 mt-3">
      A Tailwind-based component collection with production-ready blocks.
    </p>
    <div className="mt-6 space-x-3">
      <button className="btn btn-primary">Get Started</button>
      <button className="btn btn-secondary">View Docs</button>
    </div>
  </div>
</div>`,
  },
  {
    id: "pricing",
    name: "Pricing",
    category: "layout",
    keywords: ["pricing", "plans"],
    preview: () => (
      <div className="grid md:grid-cols-3 gap-6">
        {["Starter", "Pro", "Enterprise"].map((plan, idx) => (
          <div key={plan} className="card p-6">
            <h4 className="text-lg font-semibold text-gray-900">{plan}</h4>
            <p className="text-gray-600 mt-2">${idx * 19 + 29}/mo</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>• Feature one</li>
              <li>• Feature two</li>
              <li>• Feature three</li>
            </ul>
            <button className="btn btn-primary mt-5 w-full">Choose {plan}</button>
          </div>
        ))}
      </div>
    ),
    code: `<div className="grid md:grid-cols-3 gap-6">
  {/* Repeat card for each plan */}
</div>`,
  },
  {
    id: "features",
    name: "Feature Grid",
    category: "layout",
    keywords: ["features", "grid"],
    preview: () => (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Fast", "Responsive", "Customizable", "Accessible", "Modern", "Typed"].map((t) => (
          <div key={t} className="card p-5">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">✔</div>
            <h5 className="font-semibold text-gray-900">{t}</h5>
            <p className="text-gray-600 text-sm mt-1">Short description of the {t.toLowerCase()} capability.</p>
          </div>
        ))}
      </div>
    ),
    code: `<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Feature cards */}
</div>`,
  },
];
