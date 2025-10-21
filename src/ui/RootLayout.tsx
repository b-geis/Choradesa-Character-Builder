
import { NavLink, Outlet } from 'react-router-dom';


export default function RootLayout() {
return (
<div className="min-h-screen grid grid-rows-[auto,1fr]">
<header className="border-b border-zinc-800">
<nav className="mx-auto max-w-5xl flex items-center gap-3 p-3">
<div className="font-bold tracking-wide mr-2">Choradesa Builder</div>


<NavButton to="/" label="Home" tooltip="Back to start" />
<NavButton to="/inventory" label="Inventory" tooltip="Manage items" />
<NavButton to="/upload" label="Upload" tooltip="Load a character JSON" />
  

<div className="ml-auto text-xs opacity-60" title="Vite + React + TS + Tailwind">
v0.1 setup
</div>
</nav>
</header>


<main className="mx-auto max-w-5xl p-4">
<Outlet />
</main>
</div>
);
}


function NavButton({ to, label, tooltip }: { to: string; label: string; tooltip?: string }) {
return (
<NavLink
to={to}
title={tooltip}
className={({ isActive }) =>
[
'focus-ring rounded-xl px-3 py-1.5 text-sm transition',
isActive ? 'bg-zinc-800 text-white' : 'hover:bg-zinc-800/60 text-zinc-200',
].join(' ')
}
end
>
{label}
</NavLink>
);
}
