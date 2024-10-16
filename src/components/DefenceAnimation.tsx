import useDefendingPokemon from '../hooks/useDefendingPokemon';

export default function DefenceAnimation() {
  const pokemonData = useDefendingPokemon();

  return (
    <div className="">
      <div className="flex justify-center">
        <div className="relative" style={{ width: '25vw', height: '25vw' }}>
          {pokemonData && (
            <img
              className="absolute object-contain animate-bounce"
              style={{
                width: '100%',
                height: '100%',
                animation: 'small-bounce 1.1s infinite',
              }}
              src={pokemonData.sprites?.front_default}
              alt={`${pokemonData.name} `}
            />
          )}
        </div>
      </div>
    </div>
  );
}
