import React, { useEffect, useState } from 'react';
import { Mean, Median, Mode, StandardDeviation } from 'components/stats';

interface Response {
  data: number[];
}

const App: React.FC = () => {
  const [numbers, setNumbers] = useState<number[] | null>(null);

  useEffect(() => {
    fetch('data-1234.json')
      .then<Response>(res => res.json())
      .then(result => setNumbers(result.data));
  }, []);

  return (
    <div className="App">
      {numbers && (
        <>
          <Mean dataSet={numbers} />
          <Median dataSet={numbers} />
          <StandardDeviation dataSet={numbers} />
          <Mode dataSet={numbers} />
        </>
      )}
    </div>
  );
};

export default App;
