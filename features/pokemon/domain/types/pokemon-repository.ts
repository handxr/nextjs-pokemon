import type { Pokemon } from "./pokemon";
import type { PokemonListSingle } from "./pokemon-list-single";

export type PokemonRepository = {
  getPokemons: () => Promise<PokemonListSingle[]>;
  getPokemon: (name: string) => Promise<Pokemon>;
};
