import { Grid } from "@nextui-org/react";

import { PokemonListSingle } from "../domain/types/pokemon-list-single";
import { PokemonCard } from "./pokemon-card";

type PokemonListProps = {
  pokemons: PokemonListSingle[];
};

export const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Grid.Container>
  );
};
