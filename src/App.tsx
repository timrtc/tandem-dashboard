import React from 'react';
import DataCard from 'components/DataCard';
import AddNumberForm from 'components/AddNumberForm';
import SelectDataSetUrl from 'components/SelectDataSetUrl';

import {
  calculateMean,
  calculateMedian,
  calculateMode,
  calculateStdDeviation,
} from 'lib/statistics';

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Tandem Dashboard</h1>
      <SelectDataSetUrl />

      <div className="data-cards">
        <DataCard title="Mean" calculation={calculateMean} />
        <DataCard title="Median" calculation={calculateMedian} />
        <DataCard
          title="Standard Deviation"
          calculation={calculateStdDeviation}
        />
        <DataCard title="Mode" calculation={calculateMode} />
      </div>

      <AddNumberForm />
    </div>
  );
};

export default App;
