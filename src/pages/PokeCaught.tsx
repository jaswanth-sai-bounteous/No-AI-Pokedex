import { Link } from "react-router-dom";
import { useAtom, useSetAtom } from "jotai";
import {  caughtPokemonAtom,
  releasePokemonAtom,
  caughtCountAtom, } from "../store/store";
const PokeCaught = () => {
  const [caught] = useAtom(caughtPokemonAtom);
  const releasePokemon = useSetAtom(releasePokemonAtom);
  const [count] = useAtom(caughtCountAtom);

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            My Caught Pokémon ({count})
          </h1>

          <Link to="/">
            <button className="btn btn-primary">Back to Home</button>
          </Link>
        </div>

        {caught.length === 0 ? (
          <div className="text-center mt-20">
            <h2 className="text-xl font-semibold">
              You haven't caught any Pokémon yet 😢
            </h2>
            <p className="mt-2 text-gray-500">
              Go catch some!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {caught.map((pokemon) => (
              <div
                key={pokemon.id}
                className="card bg-base-100 shadow-xl p-4 items-center"
              >
                <img
                  src={pokemon.img}
                  alt={pokemon.name}
                  className="w-24 h-24 object-contain"
                />

                <h2 className="capitalize font-semibold mt-2">
                  {pokemon.name}
                </h2>

                <div className="flex gap-2 mt-4">
                  <Link to={`/detail/${pokemon.id}`}>
                    <button className="btn btn-sm btn-info">
                      View
                    </button>
                  </Link>

                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => releasePokemon(pokemon.id)}
                  >
                    Release
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PokeCaught;
