/* eslint-disable react/prop-types */
import { useGetPokemonByName } from "../../../queries/memory-card/MemoryCard";
import CardBack from "./CardBack";

export const Card = ({ pokemonName, onFlip, isFlipped }) => {
  const { data, isLoading, isError } = useGetPokemonByName(pokemonName);

  if (isLoading) return <p>Loading Pokemon data...</p>;
  if (isError) return <p>Error fetching Pokemon data.</p>;

  return (
    <>
      {isFlipped ? (
        <div
          className="border-4 p-3 h-60 w-56 text-center hover:cursor-pointer"
          onClick={onFlip}
        >
          <p className="font-bold font-serif text-xl">
            {data.name.toUpperCase()}
          </p>
          <div className="flex justify-center items-center">
            <img
              src={data.sprites.front_default}
              alt={data.name}
              height={100}
              width={100}
            />
          </div>
        </div>
      ) : (
        <CardBack onFlip={onFlip} />
      )}
    </>
  );
};

export default Card;
