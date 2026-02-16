
import { useEffect, useState } from "react"
import { PokeService } from "../services/PokeService"
import { useParams } from "react-router-dom";
const PokeDetails = () => {
    const {id}= useParams<{id:string}>();
    let [name,setName]=useState("");
    let [types,setTypes]=useState([])
    let [ability,setAbility]=useState();
    let [height,setHeight]=useState(0);
    let [weight,setWeight]=useState(0);
    let[img,setImg]=useState("");
    let [audio,setAudio]=useState<string | null>(null);


  useEffect(()=>{
    if(!id) return;

          PokeService.getId(Number(id)).then((data)=>{
            console.log(data)
            setName(data.name);
            setTypes(data.poketypes);
            setAbility(data.ability);
            setHeight(data.height);
            setWeight(data.weight);
            setImg(data.img);
            setAudio(data.audio)
    });
    },[]);

 const playCry = () => {
  if (!audio) return;
  new Audio(audio).play();
};



  return (
    <>
      <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
    <div className="card w-full max-w-2xl bg-base-100 shadow-2xl">
      
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt={name}
          className="rounded-xl w-64 h-64 object-contain bg-base-200 p-6"
        />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl capitalize">
          {name}
        </h2>

        {/* Types */}
        <div className="flex gap-2 flex-wrap justify-center mt-2">
          {types.map((type: string, index: number) => (
            <span
              key={index}
              className="badge badge-primary badge-lg capitalize"
            >
              {type}
            </span>
          ))}
        </div>

        {/* Stats Section */}
        <div className="stats shadow mt-6 w-full">
          <div className="stat">
            <div className="stat-title">Height</div>
            <div className="stat-value text-primary">{height}</div>
          </div>

          <div className="stat">
            <div className="stat-title">Weight</div>
            <div className="stat-value text-secondary">{weight}</div>
          </div>

          <div className="stat">
            <div className="stat-title">Ability</div>
            <div className="stat-value text-accent capitalize">
              {ability}
            </div>
          </div>
        </div>

        <div className="card-actions mt-6">
          <button className="btn btn-primary btn-wide" onClick={ playCry} >
            Catch Pokémon
          </button>
        </div>
      </div>
    </div>
  </div>

    </>
    
  )
}

export default PokeDetails
