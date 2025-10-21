import { useEffect, useState } from 'react';
import { getCharacter } from '../../state/character';


export default function HomePage() {
const [hasChar, setHasChar] = useState(!!getCharacter());
useEffect(() => {
const unsub = subscribeToCharacter(() => setHasChar(!!getCharacter()));
return () => unsub();
}, []);
const c = getCharacter();


return (
<section className="space-y-3">
<h1 className="text-2xl font-semibold">Welcome to Choradesa</h1>
{!hasChar ? (
<p className="text-zinc-300">No character loaded yet. Use the <strong>Upload</strong> button above.</p>
) : (
<div className="rounded-2xl border border-zinc-800 p-4">
<div className="text-sm uppercase tracking-wide text-zinc-400">Current Character</div>
<div className="mt-2 text-lg font-medium">{c!.name}</div>
<div className="text-zinc-300">Class: {c!.klass} · Level {c!.level}</div>
<div className="mt-3 text-sm text-zinc-400">Items: {c!.inventory.length}</div>
</div>
)}
</section>
);
}


function subscribeToCharacter(cb: () => void) {
const mod = require('../../state/character');
return mod.subscribe(cb);
}
