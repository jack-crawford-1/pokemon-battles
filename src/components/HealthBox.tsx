import usePokemonData from '../hooks/usePokemonData';
import { useState, useEffect } from 'react';

export default function HealthBox({
  currentHp,
  damage,
}: {
  currentHp: number;
  damage: number;
}) {
  const pokemonData = usePokemonData();
  const [hp, setHp] = useState(currentHp);
  const maxHp = pokemonData?.stats[0].base_stat || 35;
  const hpPercentage = (hp / maxHp) * 100;
  const [status, setStatus] = useState<string>('None');

  const healthBarColor =
    hpPercentage < 20
      ? 'bg-red-500'
      : hpPercentage < 50
      ? 'bg-yellow-500'
      : 'bg-green-500';

  useEffect(() => {
    if (!isNaN(damage)) {
      setHp((prevHp) => Math.max(prevHp - damage, 0));
    }
  }, [damage]);

  useEffect(() => {
    if (hp <= 0 && status !== 'FNT') {
      setStatus('FNT');
      alert('Your Pokémon fainted!');
    }
  }, [hp]);

  return (
    <div className="border-8 border-[#767a76] bg-[#FEFBD9] rounded-3xl w-96 p-4 flex justify-between items-center">
      <div className="flex flex-col w-full">
        <div className="flex items-center space-x-2">
          <div className="font-bold text-3xl text-black">
            {pokemonData?.name.toUpperCase()}
          </div>
          <div className="text-blue-500">♂</div>
          <div className="ml-2 text-3xl text-black">Lv {5}</div>
        </div>

        <div className="mt-2 flex items-center">
          <div className="bg-yellow-300 rounded-full px-2 py-1 text-center text-lg text-black font-bold mr-2">
            {status}
          </div>

          <div className="bg-gray-200 rounded-full h-4 w-full relative">
            <div className="border-2 border-black rounded-full">
              <div
                className={`${healthBarColor} h-4 rounded-full border-4 border-white`}
                style={{ width: `${hpPercentage}%` }}
              />
            </div>
          </div>

          <div className="ml-2 text-md text-black font-bold inline-flex">
            <div>{hp}</div>
            <div className="mx-1">/</div>
            <div>{maxHp}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
