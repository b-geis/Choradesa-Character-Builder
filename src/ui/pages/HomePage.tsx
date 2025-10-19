
export default function HomePage() {
return (
<section className="space-y-3">
<h1 className="text-2xl font-semibold">Welcome to Choradesa</h1>
<p className="text-zinc-300">
Use the buttons above to switch pages. We will add a file upload flow to load a character sheet.
</p>
<ul className="list-disc pl-6 text-zinc-300">
<li>Routing via React Router (hash mode for GitHub Pages).</li>
<li>Styling via Tailwind utilities.</li>
<li>Tooltips use the native <code>title</code> attribute for now.</li>
</ul>
</section>
);
}
