import React from 'react';
import Navbar from 'components/Navbar';
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
      <Navbar />

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
