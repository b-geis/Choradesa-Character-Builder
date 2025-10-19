// App shell: persistent nav + outlet for child pages
import { NavLink, Outlet } from 'react-router-dom';


export default function RootLayout() {
return (
<div className="min-h-screen grid grid-rows-[auto,1fr]">
{/* Top navigation bar */}
<header className="border-b border-zinc-800">
<nav className="mx-auto max-w-5xl flex items-center gap-3 p-3">
{/* Logo / Title */}
<div className="font-bold tracking-wide mr-2">Choradesa Builder</div>


{/* Nav buttons: NavLink automatically gives an 'active' state */}
<NavButton to="/" label="Home" tooltip="Back to start" />
<NavButton to="/inventory" label="Inventory" tooltip="Manage items" />


{/* Spacer pushes info to the right */}
<div className="ml-auto text-xs opacity-60" title="Vite + React + TS + Tailwind">
v0.1 setup
</div>
</nav>
</header>


{/* Page content renders here */}
<main className="mx-auto max-w-5xl p-4">
<Outlet />
</main>
</div>
);
}


// Small helper for consistent nav buttons with tooltips
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
