import { Card, Grid, Text, Button, Container } from "@nextui-org/react";
import Image from "next/image";
import { Pokemon } from "../domain/types";
import { useFavoritePokemon } from "../hooks";

export const PokemonDetails = ({ pokemon }: { pokemon: Pokemon }) => {
  const { isInFavorites, onToggleFavorite } = useFavoritePokemon({ pokemon });
  return (
    <Grid.Container css={{ marginTop: "5px" }} gap={2}>
      <Grid xs={12} sm={4}>
        <Card isHoverable css={{ padding: "30px" }}>
          <Card.Body>
            <Card.Image
              src={pokemon.sprites.other?.dream_world.front_default || ""}
              width="100%"
              height={140}
              alt={pokemon.name}
            />
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={12} sm={8}>
        <Card>
          <Card.Header
            css={{ display: "flex", justifyContent: "space-between" }}
          >
            <Text h1 transform="capitalize">
              {pokemon.name}
            </Text>
            <Button
              color="gradient"
              ghost={!isInFavorites}
              onPress={onToggleFavorite}
            >
              {isInFavorites ? "Remove from favorites" : "Add to favorites"}
            </Button>
          </Card.Header>
          <Card.Body>
            <Text size={30}>Sprites:</Text>
            <Container direction="row">
              <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
              <Image
                src={pokemon.sprites.back_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
              />
            </Container>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  );
};
