import React from 'react';
import DataCard from 'components/DataCard';
import AddNumberForm from 'components/AddNumberForm';

import {
  calculateMean,
  calculateMedian,
  calculateMode,
  calculateStdDeviation,
} from 'lib/statistics';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Tandem Dashboard</h1>
      <DataCard title="Mean" calculation={calculateMean} />
      <DataCard title="Median" calculation={calculateMedian} />
      <DataCard title="Mode" calculation={calculateMode} />
      <DataCard
        title="Standard Deviation"
        calculation={calculateStdDeviation}
      />
      <AddNumberForm />
    </div>
  );
};

export default App;
