import confetti from "canvas-confetti";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Favorites } from "utils";
import { Pokemon } from "../domain/types";

const getFavorites = () => new Favorites().get();
const favoritesLocalStorage = new Favorites();

export const useFavoritePokemon = ({ pokemon }: { pokemon?: Pokemon } = {}) => {
  const router = useRouter();
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);
  const [isInFavorites, setIsInFavorites] = useState<boolean>(() =>
    pokemon && typeof window !== "undefined"
      ? favoritesLocalStorage.exists(pokemon.id)
      : false
  );

  const onToggleFavorite = () => {
    if (pokemon) {
      favoritesLocalStorage.toggle(pokemon.id);
      setIsInFavorites(!isInFavorites);

      if (!isInFavorites) {
        confetti({
          zIndex: 999,
          particleCount: 100,
          spread: 160,
          angle: -100,
          origin: {
            x: 1,
            y: 0,
          },
        });
      }
    }

    return false;
  };
  const onFavoriteClick = (pokemonId: number) => {
    router.push(`/pokemon/${pokemonId}`);
  };

  useEffect(() => {
    const favorites = getFavorites();
    setFavoritesPokemons(favorites);
  }, []);

  return {
    favoritesPokemons,
    onFavoriteClick,
    onToggleFavorite,
    isInFavorites,
  };
};
