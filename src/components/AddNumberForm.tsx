import React, { useState } from 'react';
import useAppState from 'lib/hooks/useAppState';

/**
 * Add a number to the global state data set.
 */
const AddNumberForm: React.FC = () => {
  const { dispatch } = useAppState();
  const [number, setNumber] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (number) {
      dispatch({ type: 'ADD_NUMBER', number: Number(number) });
      setNumber('');
    }
  };

  return (
    <div className="AddNumberForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={number}
          placeholder="Add number to set"
          onChange={e => setNumber(e.target.value)}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default AddNumberForm;
