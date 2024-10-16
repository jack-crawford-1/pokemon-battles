import { useMemo } from 'react';
import { SinglePokemonType } from '../models/pokemonTypes';

export default function usePokemonBattleStats(
  pokemonData: SinglePokemonType | null
) {
  const stats = useMemo(() => {
    if (!pokemonData)
      return {
        specialAtt: null,
        specialDef: null,
        attack: null,
        defence: null,
        hp: null,
      };

    const getStatValue = (statName: string) => {
      return (
        pokemonData.stats.find((stat) => stat.stat.name === statName)
          ?.base_stat || null
      );
    };

    return {
      specialAtt: getStatValue('special-attack'),
      specialDef: getStatValue('special-defense'),
      attack: getStatValue('attack'),
      defence: getStatValue('defense'),
      hp: getStatValue('hp'),
    };
  }, [pokemonData]);

  return stats;
}
