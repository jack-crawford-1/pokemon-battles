import { useState, useEffect } from 'react';

export default function TextBox({
  playerPokemonName,
  computerPokemonName,
  computerDamage,
  playerDamage,
  isVisible,
  moveType,
  isSuperEffective,
}: {
  playerPokemonName: string;
  computerPokemonName: string;
  computerDamage: number;
  playerDamage: number;
  isVisible: boolean;
  moveType: string;
  isSuperEffective: boolean;
}) {
  const [displayedPlayerText, setDisplayedPlayerText] = useState('');
  const [displayedComputerText, setDisplayedComputerText] = useState('');
  const [index, setIndex] = useState(0);
  const [showComputerText, setShowComputerText] = useState(false);

  const playerText = `${playerPokemonName} attacked with a ${moveType} type move, and caused ${computerDamage} damage! ${
    isSuperEffective ? 'It was super effective!' : ''
  }`;
  const computerText = `${computerPokemonName} counter-attacked and it caused ${playerDamage} damage!`;

  useEffect(() => {
    if (isVisible) {
      setDisplayedPlayerText('');
      setDisplayedComputerText('');
      setIndex(0);
      setShowComputerText(false);
    }
  }, [isVisible, playerText, computerText]);

  useEffect(() => {
    if (isVisible && index < playerText.length) {
      const timer = setTimeout(() => {
        setDisplayedPlayerText((prev) => prev + playerText[index]);
        setIndex((prev) => prev + 1);
      }, 10);
      return () => clearTimeout(timer);
    } else if (isVisible && index >= playerText.length && !showComputerText) {
      setTimeout(() => {
        setShowComputerText(true);
      }, 1000);
    }
  }, [isVisible, index, playerText, showComputerText]);

  useEffect(() => {
    if (
      showComputerText &&
      displayedComputerText.length < computerText.length
    ) {
      const timer = setTimeout(() => {
        setDisplayedComputerText(
          (prev) => prev + computerText[displayedComputerText.length]
        );
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [showComputerText, displayedComputerText, computerText]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-gray-800 p-3 rounded-2xl w-[500px] h-[200px] mb-2 flex flex-col justify-start border-8 border-white">
      <div className="text-white text-xl text-left mt-2 font-bold">
        <div className="text-green-400">{displayedPlayerText}</div>
        {showComputerText && (
          <div className="text-red-400 mt-2">{displayedComputerText}</div>
        )}
      </div>
    </div>
  );
}
