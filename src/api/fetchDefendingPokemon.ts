export async function fetchDefendingPokemon() {
  const pokemonNumber = 7;

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
