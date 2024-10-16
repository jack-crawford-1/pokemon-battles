export default function MoveDetailContainer({
  moveDetails,
}: {
  moveDetails: any;
}) {
  return (
    <>
      {/* <div className="w-[440px] flex flex-row flex-wrap"> */}
      <div className="move-pp-details-container rounded-xl border-8 border-gray-200 p-1 rounded-xl w-[440px] flex flex-row flex-wrap text-center">
        <p className="text-2xl bg-white h-[50px] w-[200px] p-2 m-1 rounded-lg  border-4 border-gray-400 ">
          PP: {moveDetails?.pp || 'N/A'}
        </p>
        <p className="text-2xl bg-white h-[50px] w-[200px] p-2 m-1 rounded-lg border-4 border-gray-400  ">
          Power: {moveDetails?.power || 'N/A'}
        </p>
        <p className="text-2xl bg-white h-[50px] w-[200px] p-2 m-1 rounded-lg border-4 border-gray-400  ">
          Type: {moveDetails?.type?.name || 'N/A'}
        </p>
        <p className="text-2xl bg-white h-[50px] w-[200px] p-2 m-1 rounded-lg border-4 border-gray-400  ">
          Accuracy: {moveDetails?.accuracy || 'N/A'}
        </p>
      </div>
      {/* </div> */}
    </>
  );
}
