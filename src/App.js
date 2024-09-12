import React from 'react';
import PoliticalStanceTable from './PoliticalStanceTable';

function App() {
  return (
    <div className="App p-4">
      <h1 className="text-2xl font-bold mb-1">2024 IssueTracker for British Columbia</h1>
      <p className="mb-4">Tracking issues that matter most to British Columbians, and parties views on the issues.</p>
      <PoliticalStanceTable />
    </div>
  );
}

export default App;