import { Layout } from "components/layouts";
import type { Pokemon } from "features/pokemon/domain/types/pokemon";
import { PokeApiPokemonRepository } from "features/pokemon/infrastructure/repositories/poke-api-pokemon.repository";
import { GetStaticPaths, GetStaticProps } from "next";
import { PokemonDetails } from "features/pokemon/components/pokemon-details";

type PokemonPageProps = {
  pokemon: Pokemon;
};

const pokemonRepository = new PokeApiPokemonRepository();

const PokemonPage = ({ pokemon }: PokemonPageProps) => {
  return (
    <Layout
      title={`Pokemon - ${
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
      }`}
    >
      <PokemonDetails pokemon={pokemon} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemonsPages: string[] = [...Array(151)].map(
    (_, index) => `${index + 1}`
  );

  return {
    paths: pokemonsPages.map((id) => ({ params: { id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const pokemon = await pokemonRepository.getPokemon(id);

  return {
    props: {
      pokemon,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default PokemonPage;
