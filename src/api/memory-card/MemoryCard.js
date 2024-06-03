import axios from "axios";

export const getPokemonByName = async (name) => {
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${name}/`;

  const result = await axios.get(pokemonUrl);

  return result.data;
};
