import '../styles/App.css';
import usePokemonData from '../hooks/usePokemonData';
import usePokemonBattleStats from '../hooks/usePokemonBattleStats';
import useDefendingPokemon from '../hooks/useDefendingPokemon';
import typeEffectivenessTable, {
  TypeEffectivenessTable,
} from '../components/typeEffectivenessTable';
import { SinglePokemonType } from '../models/pokemonTypes';
import { useState, useEffect } from 'react';
import OpponentHealthBox from './OpponentHealthBox';
import { MoveDetailType } from '../models/pokemonTypes';
import DefenceAnimation from './DefenceAnimation';
import AttackAnimation from './AttackAnimation';
import HealthBox from './HealthBox';
import TextBox from './TextBox';

function getTypeEffectiveness(
  attackType: string | number,
  defenderTypes: string[]
) {
  let effectiveness = 1;

  defenderTypes.forEach((defenderType) => {
    const typeModifier =
      (typeEffectivenessTable as TypeEffectivenessTable)[attackType]?.[
        defenderType
      ] ?? 1;
    effectiveness *= typeModifier;
  });

  return effectiveness;
}
export default function MainSection({
  moveDetails,
}: {
  moveDetails: MoveDetailType;
}) {
  const pokemonData: SinglePokemonType | null = usePokemonData();
  const defendingPokemonData: SinglePokemonType | null = useDefendingPokemon();
  const level = pokemonData?.level ?? 5;
  const { attack: attackerAttack } = usePokemonBattleStats(pokemonData);
  const { defence: defenderDefence } =
    usePokemonBattleStats(defendingPokemonData);
  const [playerHp, setPlayerHp] = useState(35);
  const [opponentHp, setOpponentHp] = useState(35);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [damage, setDamage] = useState<number>(0);
  const [opponentDamage, setOpponentDamage] = useState<number>(0);
  const oppStartingHp = 100;
  const [isTextBoxVisible, setIsTextBoxVisible] = useState(false);
  const [isSuperEffective, setIsSuperEffective] = useState(false);

  useEffect(() => {
    if (!isPlayerTurn) {
      const timer = setTimeout(() => {
        handleOpponentAttack();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isPlayerTurn]);

  if (!moveDetails || !pokemonData || !defendingPokemonData) {
    return <div>Loading data...</div>;
  }

  function calculateDamage() {
    const stab = pokemonData?.types?.some(
      (type) => type.type.name === moveDetails?.type?.name
    )
      ? 1.5
      : 1;
    const randomFactor = Math.random() * 0.15 + 0.85;
    const criticalHit = Math.random() < 0.0625 ? 1.5 : 1.0;
    const attackValue = attackerAttack ?? 0;
    const defenceValue = defenderDefence ?? 1;
    const power = moveDetails?.power ?? 0;

    const defendingTypes =
      defendingPokemonData?.types?.map((type) => type.type.name as string) ??
      [];

    const typeEffectiveness = getTypeEffectiveness(
      moveDetails?.type?.name,
      defendingTypes
    );

    const modifier = stab * typeEffectiveness * criticalHit * randomFactor;

    setIsSuperEffective(typeEffectiveness > 1);

    return Math.floor(
      ((((2 * level) / 5 + 2) * power * (attackValue / defenceValue)) / 50 +
        2) *
        modifier
    );
  }

  function handlePlayerAttack() {
    const calculatedDamage = calculateDamage();
    setOpponentHp((prevHp) => Math.max(prevHp - calculatedDamage, 0));
    setDamage(calculatedDamage);
    setIsPlayerTurn(false);
    setIsTextBoxVisible(true);
  }

  function handleOpponentAttack() {
    const attackValue = Math.round(
      Math.random() * (oppStartingHp * 0.05) + oppStartingHp * 0.04
    );
    setPlayerHp((prevHp) => Math.max(prevHp - attackValue, 0));
    setOpponentDamage(attackValue);
    setIsPlayerTurn(true);
  }

  const handleApplyDamage = () => {
    if (isPlayerTurn) {
      handlePlayerAttack();
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-[#3e8ede] max-h-[800px] min-h-[800px] p-6 w-full min-w-full rounded-md ">
      <div className="pt-1 pb-5 flex flex-row">
        <div className="pr-10">
          <HealthBox currentHp={playerHp} damage={opponentDamage} />
        </div>
        <div>
          <OpponentHealthBox
            name="squirtle"
            level={5}
            gender="male"
            baseStat={35}
            maxStat={35}
            damage={damage}
          />
        </div>
      </div>
      <div className="flex flex-row mb-[-50px]">
        <div>
          <AttackAnimation />
        </div>
        <div className="">
          <DefenceAnimation />
        </div>
      </div>

      <div className="flex flex-row content-center items-center justify-between">
        <button
          className={` w-[250px] text-xl font-bold py-2 mr-2 px-1 rounded-xl border-4 ${
            isPlayerTurn
              ? 'hover:bg-white hover:text-slate-700 border-[#01456c] bg-red-400 text-white transition delay-50 ease-in-out'
              : 'bg-gray-300 text-gray-500 border-gray-500 cursor-not-allowed'
          }`}
          onClick={handleApplyDamage}
          disabled={!isPlayerTurn}
        >
          {isPlayerTurn
            ? "Player's Turn: Click to Attack"
            : "Waiting: Computer's Turn"}
        </button>
        <TextBox
          playerPokemonName="Pikachu"
          computerPokemonName="Squirtle"
          isVisible={isTextBoxVisible}
          computerDamage={damage}
          moveType={moveDetails.type.name}
          playerDamage={opponentDamage}
          isSuperEffective={isSuperEffective}
        />
      </div>
    </div>
  );
}
