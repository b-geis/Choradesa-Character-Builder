export type Character = {
name: string;
klass: string; // "class" is reserved in JS; use klass as the property name
level: number;
inventory: Array<{ id: string; label: string; qty?: number }>;
};


const STORAGE_KEY = 'choradesa.character.v1';


let currentCharacter: Character | null = null;
const listeners = new Set<() => void>();


export function getCharacter(): Character | null {
return currentCharacter;
}


export function setCharacter(c: Character | null) {
currentCharacter = c;
if (c) localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
else localStorage.removeItem(STORAGE_KEY);
listeners.forEach((l) => l());
}


export function subscribe(fn: () => void) {
listeners.add(fn);
return () => listeners.delete(fn);
}


export function loadFromStorage() {
try {
const raw = localStorage.getItem(STORAGE_KEY);
if (!raw) return;
const parsed = JSON.parse(raw);
if (isCharacter(parsed)) {
currentCharacter = parsed;
}
} catch (_) {}
}


export function isCharacter(v: any): v is Character {
return (
v &&
typeof v.name === 'string' &&
typeof v.klass === 'string' &&
typeof v.level === 'number' &&
Array.isArray(v.inventory) &&
v.inventory.every(
(it: any) => it && typeof it.id === 'string' && typeof it.label === 'string'
)
);
}
