import { createBrowserRouter } from 'react-router-dom';
import App from '../components/Home';
import MovesContainer from '../components/MovesContainer';
import MainSection from '../components/MainSection';

const appRoute = {
  path: '/',
  element: <App />,
};

const mainSection = {
  path: '/mainSection',
  element: <MainSection moveDetails={undefined} />,
};

const movesContainer = {
  path: '/battle',
  element: (
    <MovesContainer
      selectedMove={''}
      setSelectedMove={function (move: string): void {
        throw new Error('Function not implemented.');
      }}
    />
  ),
};

export const router = createBrowserRouter([
  appRoute,
  movesContainer,
  mainSection,
]);
