import React from 'react';
import PoliticalStanceTable from './PoliticalStanceTable';

function App() {
  return (
    <div className="App p-4">
      <h1 className="text-2xl font-bold mb-1">2024 IssueTracker for British Columbia</h1>
      <p>Tracking issues that matter most to British Columbians, and parties views on the issues.</p>
      <p className="mb-4 italic">Best viewed in landscape on mobile devices.</p>
      <PoliticalStanceTable />
    </div>
  );
}

export default App;