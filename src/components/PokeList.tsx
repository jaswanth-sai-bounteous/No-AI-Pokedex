import { useEffect, useState } from "react"
import { PokeService } from "../services/PokeService"
import type{ PokemonAll } from "../types/Pokemon";
import PokeCard from "./PokeCard";
const PokeList = () => {
    const [pokemon,setpokemon]=useState<PokemonAll[]>([]);
    useEffect(()=>{
        PokeService.getAll().then((data)=>{
            setpokemon(data)
        })
    },[])

    useEffect(()=>{
          PokeService.getId(4).then((data)=>{
            console.log(data.weight)
     
    });
    },[])
  
    
  return (
<div className="max-w-7xl mx-auto px-4 py-6">
  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {pokemon.map((poke,id) => (
      <PokeCard key={poke.name} id={id+=1} name={poke.name} />
    ))}
  </div>
</div>



  )
}

export default PokeList
