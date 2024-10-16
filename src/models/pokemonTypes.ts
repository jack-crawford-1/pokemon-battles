export interface SinglePokemonType {
  abilities: Ability[];
  base_experience: number;
  cries: Cries;
  forms: Species[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_abilities: string[];
  past_types: string[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
  level: number;
  type: {
    name: string;
  };
}

export interface Ability {
  ability: Species;
  is_hidden: boolean;
  slot: number;
}

export interface Species {
  name: string;
  url: string;
}

export interface Cries {
  latest: string;
  legacy: string;
}

export interface Move {
  name: string;
  power: number;
  pp: number;
  type: {
    name: string;
  };
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: Species;
  version_group: Species;
}

export interface Sprites {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  animated?: Sprites;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Species;
}

export interface Type {
  slot: number;
  type: Species;
}

export interface HeldItem {
  item: Species;
}

export interface AbilityData {
  effect_entries: EffectEntry[];
}

export interface EffectEntry {
  effect: string;
  short_effect: string;
  language: Species;
}

export interface MoveDetailType {
  name: string;
  power: number;
  type: {
    name: string;
  };
}
