import { Link } from "react-router-dom";

interface cardProps {
  id: number;
  name: string;
}


const PokeCard = ({ id, name }: cardProps) => {

    

  return (
    <Link to={`/detail/${id}`}>
    <div className="card bg-base-100 w-full shadow-sm">
      <figure className="px-4 pt-4">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
          className="w-full h-40 object-contain"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title capitalize">{name}</h2>
        <div className="card-actions justify-end">
          
          <button className="btn btn-primary">view</button>
         
        </div>
      </div>
    </div>
    </Link>
  );
};

export default PokeCard;
