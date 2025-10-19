// Inventory page placeholder: we'll replace this with real logic later
export default function InventoryPage() {
return (
<section className="space-y-3">
<h1 className="text-2xl font-semibold">Inventory</h1>
<p className="text-zinc-300">
This is your inventory page. We’ll add item lists, filters, and editing soon.
</p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
{/* Example item cards to prove layout + hover text */}
{Array.from({ length: 6 }).map((_, i) => (
<div
key={i}
className="rounded-2xl border border-zinc-800 p-3 hover:bg-zinc-900/70"
title={`Item #${i + 1} — placeholder`}
>
<div className="text-sm font-medium">Item #{i + 1}</div>
<div className="text-xs text-zinc-400">Hover for tooltip (native)</div>
</div>
))}
</div>
</section>
);
}
