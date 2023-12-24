import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrgChartComponent from './OrgChartComponent';
import PersonalInfoComponent from './PersonalInfoComponent';
import OrgData from './orgData';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OrgChartComponent />} />
        <Route path="/me" element={<PersonalInfoComponent />} />
        <Route path="/organization-chart" element={<OrgData />} />
      </Routes>
    </Router>
  );
}

export default App;
