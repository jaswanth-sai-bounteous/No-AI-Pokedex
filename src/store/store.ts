import { atom } from "jotai";

/* =========================
   Types
========================= */

export interface CaughtPokemon {
  id: number;
  name: string;
  img: string;
}

/* =========================
   Atoms
========================= */

//  Base atom - holds caught Pokémon list
export const caughtPokemonAtom = atom<CaughtPokemon[]>([]);

/* =========================
   Derived Atoms (Actions)
========================= */

//  Catch Pokémon atom (write-only)
export const catchPokemonAtom = atom(
  null,
  (get, set, pokemon: CaughtPokemon) => {
    const caught = get(caughtPokemonAtom);

    const alreadyCaught = caught.find((p) => p.id === pokemon.id);
    if (alreadyCaught) {
      alert("You already caught this Pokémon!");
      return;
    }

    set(caughtPokemonAtom, [...caught, pokemon]);
  },
);

//  Release Pokémon atom (write-only)
export const releasePokemonAtom = atom(null, (get, set, id: number) => {
  const caught = get(caughtPokemonAtom);
  set(
    caughtPokemonAtom,
    caught.filter((p) => p.id !== id),
  );
});


export const caughtCountAtom = atom((get) => {
  return get(caughtPokemonAtom).length;
});
