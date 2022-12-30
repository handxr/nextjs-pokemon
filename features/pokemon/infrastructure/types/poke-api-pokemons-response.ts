export interface PokeApiPokemonsResponse {
  count: number;
  next?: string;
  previous?: null;
  results: SinglePokemonResponse[];
}

export interface SinglePokemonResponse {
  name: string;
  url: string;
}
