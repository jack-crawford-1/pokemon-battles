export default function MoveSelectionContainer({
  selectedMove,
  setSelectedMove,
}: {
  selectedMove: string;
  setSelectedMove: (move: string) => void;
}) {
  console.log('Selected move in MoveSelectionContainer:', selectedMove);

  return (
    <>
      <div className="p-2 bg-gray-100 rounded-xl h-[120px] w-[440px] flex-wrap flex-row flex text-center justify-between">
        <div
          className={` text-2xl bg-white h-[50px] p-2 w-[200px] rounded-lg border-4 ${
            selectedMove === 'scratch' ? 'active' : 'border-gray-400'
          }`}
          onClick={() => setSelectedMove('scratch')}
        >
          Scratch
        </div>
        <div
          className={` text-2xl bg-white  h-[50px] p-2 w-[200px] rounded-lg border-4 ${
            selectedMove === 'thunder-shock' ? 'active' : 'border-gray-400'
          }`}
          onClick={() => setSelectedMove('thunder-shock')}
        >
          Thunder-shock
        </div>
        <div
          className={` text-2xl bg-white  h-[50px] p-2  w-[200px] rounded-lg border-4 ${
            selectedMove === 'spark' ? 'active' : 'border-gray-400'
          }`}
          onClick={() => setSelectedMove('spark')}
        >
          Spark
        </div>
        <div
          className={` text-2xl bg-white  h-[50px] p-2 w-[200px] rounded-lg border-4 ${
            selectedMove === 'tackle' ? 'active' : 'border-gray-400'
          }`}
          onClick={() => setSelectedMove('tackle')}
        >
          Tackle
        </div>
      </div>
    </>
  );
}
