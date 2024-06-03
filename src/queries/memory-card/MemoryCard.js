import { useQuery } from "@tanstack/react-query";
import { getPokemonByName } from "../../api/memory-card/MemoryCard";

export const useGetPokemonByName = (name) => {
  return useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => getPokemonByName(name),
  });
};
