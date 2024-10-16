import usePokemonData from '../hooks/usePokemonData';

export default function AttackAnimation() {
  const pokemonData = usePokemonData();

  return (
    <div className="">
      <div className="flex flex-col justify-end">
        <div className="relative" style={{ width: '30vw', height: '30vw' }}>
          {pokemonData && (
            <img
              className="absolute object-contain animate-bounce"
              style={{
                width: '100%',
                height: '100%',
                animation: 'small-bounce 1.2s infinite',
              }}
              src={pokemonData.sprites?.back_default}
              alt={`${pokemonData.name} `}
            />
          )}
        </div>
      </div>
    </div>
  );
}
