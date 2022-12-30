import axios from "axios";
import { Pokemon } from "features/pokemon/domain/types/pokemon";
import { PokemonListSingle } from "features/pokemon/domain/types/pokemon-list-single";
import { PokemonRepository } from "features/pokemon/domain/types/pokemon-repository";
import { PokeApiPokemonResponse } from "../types/poke-api-pokemon-response";
import { PokeApiPokemonsResponse } from "../types/poke-api-pokemons-response";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon" as const;
const LIMIT = 151 as const;

export class PokeApiPokemonRepository implements PokemonRepository {
  private readonly url = BASE_URL;

  public async getPokemons(): Promise<PokemonListSingle[]> {
    const response = await axios.get<PokeApiPokemonsResponse>(
      `${this.url}?limit=${LIMIT}`
    );
    return response.data.results.map((pokemon) => ({
      name: pokemon.name,
      url: pokemon.url,
      id: parseInt(pokemon.url.split("/")[6]),
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${parseInt(
        pokemon.url.split("/")[6]
      )}.svg`,
    }));
  }

  public async getPokemon(name: string): Promise<Pokemon> {
    const response = await axios.get<PokeApiPokemonResponse>(
      `${this.url}/${name}`
    );
    return {
      id: response.data.id,
      name: response.data.name,
      sprites: {
        front_default: response.data.sprites.front_default,
        back_default: response.data.sprites.back_default,
        front_shiny: response.data.sprites.front_shiny,
        back_shiny: response.data.sprites.back_shiny,
        other: {
          dream_world: {
            front_default:
              response.data.sprites.other!.dream_world.front_default,
          },
        },
      },
    };
  }
}
