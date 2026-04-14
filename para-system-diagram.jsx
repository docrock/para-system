import { useState } from "react";

const captures = [
  { label: "Voice / Wispr Flow", icon: "🎙️", sub: "3–5x daily on Max Rebo" },
  { label: "Gmail", icon: "📧", sub: "2-touch triage rule" },
  { label: "ClickUp", icon: "✅", sub: "Ecamm team tasks" },
  { label: "Apple Notes", icon: "📝", sub: "Transit lounge → migrate" },
  { label: "Darth Revan", icon: "🟠", sub: "Notion widget capture" },
];

const paraData = [
  {
    letter: "P",
    label: "Projects",
    color: "bg-violet-600",
    light: "bg-violet-50",
    border: "border-violet-300",
    text: "text-violet-700",
    accent: "bg-violet-100",
    items: [
      "Circle.so Community Migration",
      "Doc Popps → Shopify",
      "Claude Mastery",
      "YT 50K Campaign",
      "$50K Revenue Push",
    ],
    note: "Finish lines. Linked to Goals.",
  },
  {
    letter: "A",
    label: "Areas",
    color: "bg-emerald-600",
    light: "bg-emerald-50",
    border: "border-emerald-300",
    text: "text-emerald-700",
    accent: "bg-emerald-100",
    items: [
      "My Content (YT + Social)",
      "Ecamm (YT + Partners + Community)",
      "Doc Popps",
      "LGL Community",
      "Health · Finances · Home · Travel",
    ],
    note: "No finish line. Ongoing standards.",
  },
  {
    letter: "R",
    label: "Resources",
    color: "bg-amber-500",
    light: "bg-amber-50",
    border: "border-amber-300",
    text: "text-amber-700",
    accent: "bg-amber-100",
    items: [
      "AI / Claude learning notes",
      "Content research & ideas",
      "Gear & tech stack refs",
      "Business templates",
      "Travel research",
    ],
    note: "Might find again someday.",
  },
  {
    letter: "A",
    label: "Archive",
    color: "bg-slate-500",
    light: "bg-slate-50",
    border: "border-slate-300",
    text: "text-slate-600",
    accent: "bg-slate-100",
    items: [
      "Completed projects",
      "Old Ecamm campaigns",
      "Past community content",
      "Previous Doc Popps seasons",
      "Apple Notes migration",
    ],
    note: "Never delete. Just archive.",
  },
];

const devices = [
  {
    name: "Max Rebo",
    spec: "Mac Studio M1 Max",
    icon: "🎹",
    role: "Command Center + Cowork Primary",
    note: "Wispr Flow · Full Notion · Personal Claude + Cowork",
    tier: "primary",
    badge: "Cowork ✦",
  },
  {
    name: "Darth Revan",
    spec: "iPhone 17 Pro Max",
    icon: "🟠",
    role: "Mobile Capture",
    note: "Notion widget · Voice notes · Always on hand",
    tier: "primary",
    badge: null,
  },
  {
    name: "Darth Nihilus",
    spec: "MacBook Pro M2 Pro",
    icon: "💀",
    role: "Cowork Secondary",
    note: "Personal Claude + Cowork · Away from Rebo",
    tier: "cowork",
    badge: "Cowork ✦",
  },
  {
    name: "Lumiya",
    spec: "iPad Pro M4",
    icon: "⬛",
    role: "Review & Read",
    note: "Full Notion app · Weekly review · Reference",
    tier: "secondary",
    badge: null,
  },
  {
    name: "Darth Tenebrous",
    spec: "Mac Mini M4",
    icon: "🎬",
    role: "Road Studio",
    note: "Video production · Notion via cloud · Off-bench",
    tier: "secondary",
    badge: null,
  },
];

const tierStyles = {
  primary: "bg-emerald-950 border-emerald-700",
  cowork: "bg-indigo-950 border-indigo-700",
  secondary: "bg-gray-900 border-gray-700",
};
const tierLabel = { primary: "text-emerald-300", cowork: "text-indigo-300", secondary: "text-gray-300" };
const tierSub = { primary: "text-emerald-500", cowork: "text-indigo-500", secondary: "text-gray-500" };
const tierNote = { primary: "text-emerald-600", cowork: "text-indigo-600", secondary: "text-gray-600" };

export default function PARADiagram() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 font-sans">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-1">Doc Rock's PARA System</h1>
          <p className="text-gray-400 text-sm">Notion LifeOS as the spine · Everything flows in · Nothing lives outside it</p>
        </div>

        {/* Dual Account Banner */}
        <div className="mb-5 grid grid-cols-2 gap-3">
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-3 flex items-center gap-3">
            <div className="text-2xl">👤</div>
            <div>
              <p className="text-xs font-bold text-white">Personal Claude Account</p>
              <p className="text-xs text-gray-400">docrock@gmail.com · PARA system lives here</p>
              <p className="text-xs text-gray-500 mt-0.5">Rebo · Nihilus · Lumiya · Darth Revan</p>
            </div>
          </div>
          <div className="bg-gray-900 border border-orange-800 rounded-xl p-3 flex items-center gap-3">
            <div className="text-2xl">🟠</div>
            <div>
              <p className="text-xs font-bold text-orange-300">Ecamm Claude Teams Account</p>
              <p className="text-xs text-orange-500">doc@ecamm.com · Team workflows live here</p>
              <p className="text-xs text-gray-600 mt-0.5">⚠️ Switching between accounts = friction to reduce</p>
            </div>
          </div>
          <div className="col-span-2 bg-violet-950 border border-violet-800 rounded-xl px-4 py-2 text-center">
            <p className="text-violet-300 text-xs">
              <span className="font-bold">Notion LifeOS is the neutral ground.</span>
              {" "}Both Claude accounts can read and write to it. PARA structure bridges personal + Ecamm worlds.
            </p>
          </div>
        </div>

        {/* Capture Layer */}
        <div className="mb-3">
          <p className="text-xs uppercase tracking-widest text-rose-400 font-semibold mb-3 text-center">Capture Inputs</p>
          <div className="grid grid-cols-5 gap-2">
            {captures.map((c) => (
              <div key={c.label} className="bg-rose-950 border border-rose-800 rounded-xl p-3 text-center">
                <div className="text-2xl mb-1">{c.icon}</div>
                <div className="text-xs font-semibold text-rose-200">{c.label}</div>
                <div className="text-xs text-rose-400 mt-1 leading-tight">{c.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center my-1">
          <div className="w-0.5 h-4 bg-rose-700"></div>
          <div className="text-rose-500 text-lg">▼</div>
        </div>

        {/* Quick Drop Inbox */}
        <div className="bg-rose-900 border-2 border-rose-600 rounded-2xl p-4 text-center mb-1">
          <p className="text-xs uppercase tracking-widest text-rose-400 font-semibold mb-1">Notion LifeOS</p>
          <h2 className="text-xl font-bold text-rose-100">⚡ Quick Drop Inbox</h2>
          <p className="text-rose-300 text-xs mt-1">Raw brain dumps land here. No organizing in the moment. Just capture.</p>
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center my-1">
          <div className="w-0.5 h-4 bg-gray-600"></div>
          <div className="text-gray-500 text-lg">▼</div>
        </div>

        {/* Weekly Review */}
        <div className="bg-indigo-950 border border-indigo-700 rounded-xl px-4 py-2 text-center mb-1">
          <span className="text-indigo-300 text-xs font-semibold uppercase tracking-widest">Weekly Review · Fridays · 15 min</span>
          <span className="text-indigo-400 text-xs ml-2">What shipped? What's next? What's rotting?</span>
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center my-1">
          <div className="w-0.5 h-4 bg-gray-600"></div>
          <div className="text-gray-500 text-lg">▼</div>
        </div>

        {/* PARA Buckets */}
        <div className="mb-3">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">The Four Buckets · All in Notion LifeOS</p>
          <div className="grid grid-cols-4 gap-3">
            {paraData.map((p, i) => (
              <div
                key={i}
                className={`border ${p.border} ${p.light} rounded-2xl p-4 cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105`}
                onClick={() => setActiveCard(activeCard === i ? null : i)}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={`${p.color} text-white font-black text-lg w-8 h-8 rounded-lg flex items-center justify-center`}>
                    {p.letter}
                  </div>
                  <span className={`font-bold ${p.text}`}>{p.label}</span>
                </div>
                <ul className="space-y-1 mb-3">
                  {p.items.map((item, j) => (
                    <li key={j} className={`text-xs ${p.text} opacity-80 leading-snug`}>· {item}</li>
                  ))}
                </ul>
                <div className={`${p.accent} rounded-lg px-2 py-1`}>
                  <p className={`text-xs ${p.text} italic`}>{p.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center my-1">
          <div className="w-0.5 h-4 bg-gray-600"></div>
          <div className="text-gray-500 text-lg">▼</div>
        </div>

        {/* Device Layer */}
        <div className="mb-4">
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-3 text-center">The Active Fleet · Notion syncs everything · ✦ = Cowork installed</p>
          <div className="grid grid-cols-5 gap-2">
            {devices.map((d) => (
              <div key={d.name} className={`rounded-xl p-3 text-center border ${tierStyles[d.tier]}`}>
                <div className="text-2xl mb-1">{d.icon}</div>
                <div className={`text-xs font-black ${tierLabel[d.tier]}`}>{d.name}</div>
                <div className={`text-xs ${tierSub[d.tier]} mt-0.5`}>{d.spec}</div>
                <div className={`text-xs font-semibold mt-1 ${tierLabel[d.tier]} opacity-80`}>{d.role}</div>
                <div className={`text-xs mt-1 leading-tight ${tierNote[d.tier]}`}>{d.note}</div>
                {d.badge && (
                  <div className="mt-2 bg-indigo-800 rounded-lg px-1 py-0.5">
                    <p className="text-indigo-200 text-xs font-semibold">{d.badge}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bench */}
          <div className="mt-2 bg-gray-900 border border-dashed border-gray-700 rounded-xl px-4 py-2 flex items-center justify-center gap-6">
            <span className="text-gray-600 text-xs uppercase tracking-widest font-semibold">Off the Bench</span>
            <span className="text-gray-600 text-xs">🟣 Mace Windu · iMac M1 · Casual browsing</span>
            <span className="text-gray-600 text-xs">🐸 Grogu · Mac Mini M1 · Mylio Photos DIT backup</span>
          </div>
        </div>

        {/* Cowork Layer */}
        <div className="bg-indigo-950 border border-indigo-800 rounded-2xl p-4">
          <p className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-2">✦ Cowork Layer · Max Rebo (primary) + Darth Nihilus (secondary)</p>
          <div className="grid grid-cols-3 gap-3 text-xs text-indigo-300">
            <div className="bg-indigo-900 rounded-lg p-2">
              <p className="font-semibold text-indigo-200 mb-1">Build & Maintain</p>
              <p>Structure PARA · Populate databases · Set up templates in LifeOS</p>
            </div>
            <div className="bg-indigo-900 rounded-lg p-2">
              <p className="font-semibold text-indigo-200 mb-1">Migrate & Convert</p>
              <p>Apple Notes rescue · ClickUp → Notion skill · Ecamm task bridge</p>
            </div>
            <div className="bg-indigo-900 rounded-lg p-2">
              <p className="font-semibold text-indigo-200 mb-1">System Audits</p>
              <p>Weekly review assist · Project health checks · Archive sweeps</p>
            </div>
          </div>
          <p className="text-indigo-500 text-xs mt-2 text-center italic">System runs without Cowork. Cowork just makes it smarter and faster.</p>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-gray-600 text-xs">
          Your brain is for having ideas, not holding them. · Doc Rock PARA v1.0 · May the Force be with your files.
        </div>

      </div>
    </div>
  );
}
