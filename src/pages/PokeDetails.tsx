import { useEffect, useState } from "react";
import { PokeService } from "../services/PokeService";
import {  useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import type { Pokemon } from "../types/Pokemon";
import { useSetAtom } from "jotai";
import { catchPokemonAtom } from "../store/store";

const PokeDetails = () => {
  const { id } = useParams<{ id: string }>();

  const [name, setName] = useState<string>("");
  const [types, setTypes] = useState<string[]>([]);
  const [ability, setAbility] = useState<string>("");
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [img, setImg] = useState<string | null>(null);
  const [audio, setAudio] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    PokeService.getId(Number(id)).then((data: Pokemon) => {
      console.log(data);
      setName(data.name);
      setTypes(data.poketypes);
      setAbility(data.ability);
      setHeight(data.height);
      setWeight(data.weight);
      setImg(data.img);
      setAudio(data.audio);
    });
  }, [id]);

  const playCry = () => {
    if (!audio) return;
    new Audio(audio).play();
  };
  const catchPokemon = useSetAtom(catchPokemonAtom);

  return (
    <>
      <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
        <Link to={Number(id) > 0 ? `/detail/${Number(id) - 1}` : `/detail/${Number(id)}`}>
          <button className="btn btn-info">{"<"}</button>
        </Link>
        <div className="card w-full max-w-2xl bg-base-100 shadow-2xl">
          <figure className="px-10 pt-10">
            <img
              src={img || ""}
              alt={name}
              className="rounded-xl w-64 h-64 object-contain bg-base-200 p-6"
            />
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl capitalize">{name}</h2>

            <div className="flex gap-2 flex-wrap justify-center mt-2">
              {types.map((type: string, index: number) => (
                <span key={index} className="badge badge-primary badge-lg capitalize">
                  {type}
                </span>
              ))}
            </div>

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
                <div className="stat-value text-accent capitalize">{ability}</div>
              </div>
            </div>

            <div className="card-actions mt-6">
              <button className="btn btn-primary btn-wide"   onClick={() => {
    playCry();
    catchPokemon({
      id: Number(id),
      name,
      img: img || "",
    });
  }} >
                Catch Pokémon
              </button>
            </div>
          </div>
        </div>
        <Link to={`/detail/${Number(id) + 1}`}>
          <button className="btn btn-info">{">"}</button>
        </Link>
      </div>
    </>
  );
};

export default PokeDetails;
