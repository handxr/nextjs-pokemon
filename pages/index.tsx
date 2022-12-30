import type { GetStaticProps } from "next";

import { Layout } from "components/layouts";

import { PokemonList } from "features/pokemon/components/pokemon-list";
import { PokeApiPokemonRepository } from "features/pokemon/infrastructure/repositories/poke-api-pokemon.repository";
import { PokemonListSingle } from "features/pokemon/domain/types/pokemon-list-single";

type HomePageProps = {
  pokemons: PokemonListSingle[];
};

const pokemonRepository = new PokeApiPokemonRepository();

const HomePage = ({ pokemons }: HomePageProps) => {
  return (
    <>
      <Layout title="Pokemon App">
        <PokemonList pokemons={pokemons} />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const pokemons = await pokemonRepository.getPokemons();

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
