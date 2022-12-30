export type Pokemon = {
  id: number;
  name: string;
  sprites: Sprites;
};

export type Sprites = {
  front_default: string;
  back_default: string;
  front_shiny: string;
  back_shiny: string;
  other?: Other;
};

export type Other = {
  dream_world: DreamWorld;
};

export type DreamWorld = {
  front_default: string;
};
