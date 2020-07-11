import React from 'react';
import { calculateMedian } from 'lib/statistics';

interface Props {
  dataSet: number[];
}

const Median: React.FC<Props> = ({ dataSet }) => {
  const median = calculateMedian(dataSet);

  return (
    <div>
      <h1>Median</h1>
      <pre>{median.toFixed(6)}</pre>
    </div>
  );
};

export default Median;
