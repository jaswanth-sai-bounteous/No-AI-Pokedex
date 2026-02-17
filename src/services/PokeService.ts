import type { PokemonAll, Pokemon } from "../types/Pokemon";
import { z } from "zod";

const API_URI = "https://pokeapi.co/api/v2/pokemon";


const PokemonAllSchema = z.object({
    name: z.string(),
    url: z.string().url(),
});

const PokemonSchema = z.object({
    name: z.string(),
    img: z.string().nullable(),
    poketypes: z.array(z.string()),
    ability: z.string(),
    height: z.number(),
    weight: z.number(),
    audio: z.string().nullable(),
});

const PokemonListResponseSchema = z.object({
    count: z.number(),
    next: z.string().url().nullable(),
    previous: z.string().url().nullable(),
    results: z.array(PokemonAllSchema),
});


export const PokeService = {
    getAll: async (page: number): Promise<{ results: PokemonAll[] }> => {
        const res = await fetch(`${API_URI}?limit=25&offset=${page}`);
        const data = await res.json();

        
        const validated = PokemonListResponseSchema.parse(data);
        return validated;
    },

    getId: async (id: number): Promise<Pokemon> => {
        const res = await fetch(`${API_URI}/${id}`);
        const data = await res.json();

        
        let types: string[];
        if (data.types.length > 1) {
            types = [data.types[0].type.name, data.types[1].type.name];
        } else {
            types = [data.types[0].type.name];
        }

        
        let pokemon: Pokemon = {
            name: data.forms[0].name,
            img: data.sprites.front_default || null,
            poketypes: types,
            ability: data.abilities[0].ability.name,
            height: data.height,
            weight: data.height,
            audio: data.cries?.latest || null,
        };

        
        return PokemonSchema.parse(pokemon);
    },
};
