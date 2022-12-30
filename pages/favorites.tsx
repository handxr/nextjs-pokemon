import { Card, Container, Grid, Text } from "@nextui-org/react";
import { Layout } from "components/layouts";
import { useFavoritePokemon } from "features/pokemon/hooks";

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

const FavoritesPage = () => {
  const { favoritesPokemons, onFavoriteClick } = useFavoritePokemon();

  return (
    <Layout title="Pokemons - Favorites">
      {favoritesPokemons.length > 0 ? (
        <Grid.Container gap={2} direction="row" justify="flex-start">
          {favoritesPokemons.map((pokemonId: number) => (
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
