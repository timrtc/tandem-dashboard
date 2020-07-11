import React from 'react';
import { calculateMean } from 'lib/statistics';

interface Props {
  dataSet: number[];
}

const Mean: React.FC<Props> = ({ dataSet }) => {
  const mean = calculateMean(dataSet);

  return (
    <div>
      <h1>Mean</h1>
      <pre>{mean.toFixed(6)}</pre>
    </div>
  );
};

export default Mean;
