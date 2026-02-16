import type{ PokemonAll } from "../types/Pokemon";

const API_URI="https://pokeapi.co/api/v2/pokemon"


export const PokeService={

    getAll:async():Promise<PokemonAll[]>=>{
        const res = await fetch(`${API_URI}?limit=1025&offset=0`);
        const data= await res.json();
        return data.results as PokemonAll[];
    },
    getId:async(id:number):Promise<any>=>{
        const res= await fetch(`${API_URI}/${id}`);
        const data=await res.json();
        
        let types:String[]
        if (data.types.length>1){
            types=[data.types[0].type.name,data.types[1].type.name];}
        else{
            types=[data.types[0].type.name]
        }
        let pokemon=
         {
            name:data.forms[0].name,
            img:data.sprites.front_default,
            poketypes:types,
            ability:data.abilities[0].ability.name,
            height:data.height,
            weight:data.height,
            audio:data.cries.latest

        } 
       

        return pokemon
    }
    

}