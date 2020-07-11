import React from 'react';
import { calculateMode } from 'lib/statistics';

interface Props {
  dataSet: number[];
}

const Mode: React.FC<Props> = ({ dataSet }) => {
  const mode = calculateMode(dataSet);

  return (
    <div>
      <h1>Mode</h1>
      <pre>{mode.toFixed(6)}</pre>
    </div>
  );
};

export default Mode;
