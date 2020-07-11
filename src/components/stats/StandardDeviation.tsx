import React from 'react';
import { calculateStdDeviation } from 'lib/statistics';

interface Props {
  dataSet: number[];
}

const StandardDeviation: React.FC<Props> = ({ dataSet }) => {
  const stdDeviation = calculateStdDeviation(dataSet);

  return (
    <div>
      <h1>Standard Deviation</h1>
      <pre>{stdDeviation.toFixed(6)}</pre>
    </div>
  );
};

export default StandardDeviation;
