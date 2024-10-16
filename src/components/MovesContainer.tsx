import MoveSelectionContainer from './MoveSelectionContainer';
import MoveDetailContainer from './MoveDetailContainer';
import useMoveDetails from '../hooks/useMoveDetails';

export default function MovesContainer({
  selectedMove,
  setSelectedMove,
}: {
  selectedMove: string;
  setSelectedMove: (move: string) => void;
}) {
  const moveDetails = useMoveDetails(selectedMove);

  return (
    <div className="  border-4 border-white rounded-xl">
      <div className="p-1">
        <MoveDetailContainer moveDetails={moveDetails} />
      </div>
      <div className="pt-10">
        <MoveSelectionContainer
          selectedMove={selectedMove}
          setSelectedMove={setSelectedMove}
        />
      </div>
    </div>
  );
}
