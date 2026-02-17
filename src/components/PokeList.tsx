import { useEffect, useState } from "react"
import { PokeService } from "../services/PokeService"
import type{ PokemonAll } from "../types/Pokemon";
import PokeCard from "./PokeCard";
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from "react-intersection-observer";


const PokeList = () => {
  const {ref,inView} = useInView();
  
   const [pokemon, setPokemon] = useState<PokemonAll[]>([])

  const fetchPokeList = async ({ pageParam = 0 }) => {
    const data = await PokeService.getAll(pageParam)
    return data.results
  }

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['pokemon'],
    queryFn: fetchPokeList,
    initialPageParam: 0,
  getNextPageParam: (lastPage, allPages) => {
  if (!lastPage || lastPage.length === 0) return undefined
 
  return allPages.reduce((acc, page) => acc + page.length, 0)
}
  })
useEffect(() => {
  if (data) {
    const allPokemons: PokemonAll[] = data.pages.flat()
    setPokemon(allPokemons)
  }
  
}, [data])
    useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])
  return (
    <>
     <div className="max-w-7xl mx-auto px-4 py-6">
  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {pokemon.map((poke,id) => (
      <PokeCard key={poke?.name } id={id+=1} name={poke?.name} />
    ))}
    <button onClick={()=>fetchNextPage()}
      ref={ref}
    >{isFetchingNextPage? 'loading more..':""}</button>
  </div>
</div> 



</>)





}


export default PokeList
