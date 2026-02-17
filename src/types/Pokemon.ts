export interface PokemonAll {
    name: string;
    url: string;
}

export interface Pokemon {
    name: string;
    img: string | null;       
    poketypes: string[];
    ability: string;
    height: number;
    weight: number;
    audio: string | null;     
}