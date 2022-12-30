import { Card, Container, Grid, Text } from "@nextui-org/react";
import { Layout } from "components/layouts";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Favorites } from "utils";

const NoResults = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text h1>No favorites</Text>
    </Container>
  );
};

const getFavorites = (): number[] => new Favorites().get();

const FavoritesPage = () => {
  const router = useRouter();
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  const onFavoriteClick = (pokemonId: number) => {
    router.push(`/pokemon/${pokemonId}`);
  };

  useEffect(() => {
    const favorites = getFavorites();
    setFavoritesPokemons(favorites);
  }, []);

  return (
    <Layout title="Pokemons - Favorites">
      {favoritesPokemons.length > 0 ? (
        <Grid.Container gap={2} direction="row" justify="flex-start">
          {favoritesPokemons.map((pokemonId) => (
            <Grid key={pokemonId} xs={6} sm={3} md={2} xl={1}>
              <Card
                isHoverable
                isPressable
                css={{ padding: 10 }}
                onClick={() => onFavoriteClick(pokemonId)}
              >
                <Card.Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                  width="100%"
                  height={140}
                />
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      ) : (
        <NoResults />
      )}
    </Layout>
  );
};

export default FavoritesPage;
