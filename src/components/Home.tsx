import { useState } from 'react';
import '../styles/App.css';
import Bag from './Bag';
import MovesContainer from './MovesContainer';
import MainSection from '../components/MainSection';
import useMoveDetails from '../hooks/useMoveDetails';

function Home() {
  const [selectedMove, setSelectedMove] = useState('thunder-shock');
  const moveDetails = useMoveDetails(selectedMove);

  return (
    <div className="whole-page flex flex-row min-w-[100vw]">
      <div className="LHS flex flex-col items-center justify-center bg-slate-800 w-full border-l-8 border-r-8 border-white">
        <div className="bag h-[200px]  mb-10 w-[470px] rounded-xl">
          <Bag />
        </div>
        <div className="moves-container bg-gray-100 rounded-xl  border-8 border-white ">
          <MovesContainer
            selectedMove={selectedMove}
            setSelectedMove={setSelectedMove}
          />
        </div>
      </div>
      <div className="RHS">
        <div className="main-section">
          {moveDetails && <MainSection moveDetails={moveDetails} />}
        </div>
      </div>
    </div>
  );
}

export default Home;
