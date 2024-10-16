import { useState, useEffect } from 'react';

export default function useMoveDetails(selectedMove) {
  const [moveDetails, setMoveDetails] = useState(null);

  useEffect(() => {
    if (selectedMove) {
      const dummyMoveData = {
        scratch: {
          pp: 35,
          power: 40,
          type: { name: 'normal' },
          accuracy: 100,
        },
        'thunder-shock': {
          pp: 30,
          power: 40,
          type: { name: 'electric' },
          accuracy: 100,
        },
        spark: {
          pp: 20,
          power: 65,
          type: { name: 'electric' },
          accuracy: 100,
        },
        tackle: {
          pp: 35,
          power: 40,
          type: { name: 'normal' },
          accuracy: 100,
        },
      };

      setMoveDetails(dummyMoveData[selectedMove.toLowerCase()]);
    }
  }, [selectedMove]);

  return moveDetails;
}
