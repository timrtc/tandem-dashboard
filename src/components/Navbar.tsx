import React from 'react';
import SelectDataSetUrl from 'components/SelectDataSetUrl';

const Navbar: React.FC = () => (
  <div className="Navbar">
    <h1>Tandem Dashboard</h1>
    <SelectDataSetUrl />
  </div>
);

export default Navbar;
