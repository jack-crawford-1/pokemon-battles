import { useEffect, useState } from 'react';
import { SinglePokemonType } from '../models/pokemonTypes';
import { fetchDefendingPokemon } from '../api/fetchDefendingPokemon';

export default function useDefendingPokemon() {
  const [pokemonData, setPokemonData] = useState<SinglePokemonType | null>(
    null
  );

  useEffect(() => {
    async function getPokemonData() {
      const result = await fetchDefendingPokemon();
      setPokemonData(result);
    }
    getPokemonData();
  }, []);

  return pokemonData;
}
