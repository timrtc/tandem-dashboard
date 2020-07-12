import React from 'react';
import { DataSetUrl } from 'lib/common';
import useAppState from 'lib/hooks/useAppState';

/**
 * A drop-down to change the loaded data set.
 */
const SelectDataSetUrl: React.FC = () => {
  const { state, dispatch } = useAppState();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const newUrl = e.target.value as DataSetUrl;
    dispatch({ type: 'SET_URL', url: newUrl });
  };

  const options: DataSetUrl[] = ['data-1234.json', 'data-4321.json'];

  return (
    <div className="SelectDataSetUrl">
      <label>Load data set</label>
      <select onChange={handleChange}>
        {options.map((o, i) => (
          <option key={i} value={o} selected={state.url === o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDataSetUrl;
