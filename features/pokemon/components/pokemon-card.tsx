import { useRouter } from "next/navigation";
import { Grid, Card, Row, Text } from "@nextui-org/react";
import { PokemonListSingle } from "../domain/types/pokemon-list-single";

type PokemonCardProps = {
  pokemon: PokemonListSingle;
};

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <Grid xs={12} sm={3} md={2} lg={1}>
      <Card isHoverable isPressable onClick={handleCardClick}>
        <Card.Body
          css={{
            padding: 1,
          }}
        >
          <Card.Image src={pokemon.image} width="100%" height={140} />
          <Card.Footer>
            <Row justify="space-between">
              <Text transform="capitalize">{pokemon.name}</Text>
              <Text>#{pokemon.id}</Text>
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Grid>
  );
};
