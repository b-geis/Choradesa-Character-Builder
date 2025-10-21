import React, { useEffect, useState } from "react";
import {
  isCharacter,
  setCharacter,
  getCharacter,
  subscribe,
  type Character,
} from "../../state/character";

export default function UploadPage() {
  const [status, setStatus] = useState<string>("");

  const [preview, setPreview] = useState<Character | null>(getCharacter());

  useEffect(() => {
    const unsub = subscribe(() => setPreview(getCharacter()));
    return () => unsub();
  }, []);

  function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    if (file.size > 1000000) {
      setStatus("File is too large (limit ~1MB for now).");
      return;
    }

    const reader = new FileReader();
    reader.onerror = () => setStatus("Failed to read file.");
    reader.onload = () => {
      try {
        const text = String(reader.result || "");
        const data = JSON.parse(text);

        if (!isCharacter(data)) {
          setStatus(
            "Invalid character shape. Expected { name, klass, level, inventory[] }"
          );
          return;
        }

        setCharacter(data);
        setStatus("Character loaded and saved.");
        setPreview(data);
      } catch (_err) {
        setStatus("Not valid JSON.");
      }
    };

    reader.readAsText(file);
  }

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Upload Character</h1>

      <p className="text-zinc-300">
        Choose a <code>.json</code> file. We’ll validate basic fields and store
        it locally so it persists across refreshes.
      </p>

      <label className="block">
        <span className="text-sm text-zinc-400">Select JSON</span>
        <input
          type="file"
          accept="application/json,.json"
          onChange={onFile}
          className="mt-1 block w-full rounded-xl border border-zinc-800 bg-zinc-900 p-3"
          title="Upload a JSON character sheet"
        />
      </label>

      {status !== "" && (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-3 text-sm">
          {status}
        </div>
      )}

      {preview && (
        <div className="rounded-2xl border border-zinc-800 p-4">
          <div className="text-sm uppercase tracking-wide text-zinc-400">
            Preview
          </div>
          <div className="mt-2 text-lg font-medium">{preview.name}</div>
          <div className="text-zinc-300">
            Class: {preview.klass} · Level {preview.level}
          </div>
          <div className="mt-3 text-sm text-zinc-400">
            Items: {preview.inventory.length}
          </div>
        </div>
      )}

      <SampleFormatCard />
    </section>
  );
}

function SampleFormatCard() {
  const example: Character = {
    name: "Ari of Choradesa",
    klass: "Skald",
    level: 3,
    inventory: [
      { id: "r-knife", label: "Ritual Knife", qty: 1 },
      { id: "ink", label: "Ironbloom Ink", qty: 2 },
    ],
  };

  return (
    <details className="rounded-2xl border border-zinc-800 p-4 open:bg-zinc-900/50">
      <summary className="cursor-pointer select-none text-sm text-zinc-300">
        Example JSON format (click to expand)
      </summary>
      <pre className="mt-2 overflow-x-auto rounded-xl bg-black/40 p-3 text-xs">
        {JSON.stringify(example, null, 2)}
      </pre>
    </details>
  );
}
