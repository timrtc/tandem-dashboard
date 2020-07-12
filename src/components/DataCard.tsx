import React from 'react';
import useAppState from 'lib/hooks/useAppState';

import './DataCard.scss';

interface Props {
  title: string;
  calculation: (data: number[]) => number;
}

/**
 * Show the results of a statistical calculation preformed on the global state data set.
 */
const DataCard: React.FC<Props> = props => {
  const { state } = useAppState();

  return (
    <div className="DataCard">
      <div className="header">{props.title}</div>
      {state.data.length && (
        <div className="result">{props.calculation(state.data).toFixed(6)}</div>
      )}
    </div>
  );
};

export default DataCard;
