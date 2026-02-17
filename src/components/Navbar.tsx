import { Link } from "react-router-dom";
import { useAtomValue } from "jotai";
import { caughtCountAtom } from "../store/store";
const Navbar = () => {
  const caughtCount = useAtomValue(caughtCountAtom); // only subscribe to count

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div  className="flex-1">
      <Link to={"/"}>
      <div>
        <span className="btn btn-ghost text-xl">No AI POKEDEX</span>
      </div>
      </Link>
      </div>
      

      <div className="flex gap-2">
        <Link to="/caught" className="btn btn-ghost btn-circle relative">
          <img src="/POKEBALL.png" alt="Caught Pokémon" className="w-10 rounded-full" />

          {caughtCount > 0 && (
            <span className="badge badge-sm indicator-item absolute -top-1 -right-1">
              {caughtCount}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
