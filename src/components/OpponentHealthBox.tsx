import { useEffect, useState } from 'react';

export default function OpponentHealthBox({
  name,
  level,
  gender,
  baseStat,
  maxStat,
  damage,
}: {
  name: string;
  level: number;
  gender: string;
  baseStat: number;
  maxStat: number;
  damage: number;
}) {
  const [currentHp, setCurrentHp] = useState(baseStat || maxStat);
  const maxHp = maxStat || 35;
  const hpPercentage = maxHp !== 0 ? (currentHp / maxHp) * 100 : 100;
  const [status, setStatus] = useState<string>('None');

  const healthBarColor =
    hpPercentage < 20
      ? 'bg-red-500'
      : hpPercentage < 50
      ? 'bg-yellow-500'
      : 'bg-green-500';

  useEffect(() => {
    if (!isNaN(damage)) {
      setCurrentHp((prevHp) => Math.max(prevHp - damage, 0));
    }
  }, [damage]);

  useEffect(() => {
    if (currentHp <= 0 && status !== 'FNT') {
      setStatus('FNT');
      alert('Opponent’s Pokémon fainted!');
    }
  }, [currentHp]);

  return (
    <div className="border-8 border-[#767a76] bg-[#FEFBD9] rounded-3xl w-96 p-4 flex justify-between items-center">
      <div className="flex flex-col w-full">
        <div className="flex items-center space-x-2">
          <div className="font-bold text-3xl text-black">
            {name.toUpperCase()}
          </div>
          <div className={`text-${gender === 'male' ? 'blue' : 'pink'}-500`}>
            {gender === 'male' ? '♂' : '♀'}
          </div>
          <div className="ml-2 text-3xl text-black">Lv {level}</div>
        </div>

        <div className="mt-2 flex items-center">
          <div className="bg-yellow-300 rounded-full px-2 py-1 text-center text-lg text-black font-bold mr-2">
            {status}
          </div>

          <div className="bg-gray-200 rounded-full h-4 w-full relative">
            <div className="border-2 border-black rounded-full">
              <div
                className={`${healthBarColor} h-4 rounded-full border-4 border-white`}
                style={{ width: `${hpPercentage || 100}%` }}
              />
            </div>
          </div>

          <div className="ml-2 text-md text-black font-bold inline-flex">
            <div>{currentHp || 0}</div>
            <div className="mx-1">/</div>
            <div>{maxStat || 35}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
