import { useEffect, useState } from 'react';
import { fetchPokemon } from '../api/fetchPokemon';
import { SinglePokemonType } from '../models/pokemonTypes';

export default function usePokemonData() {
  const [pokemonData, setPokemonData] = useState<SinglePokemonType | null>(
    null
  );

  useEffect(() => {
    async function getPokemonData() {
      const result = await fetchPokemon();
      setPokemonData(result);
    }
    getPokemonData();
  }, []);

  return pokemonData;
}
