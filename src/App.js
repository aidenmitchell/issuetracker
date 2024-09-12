import React from 'react';
import PoliticalStanceTable from './PoliticalStanceTable';

function App() {
  return (
    <div className="App p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-1">2024 IssueTracker for British Columbia</h1>
      <p className="dark:text-gray-300">Tracking issues that matter most to British Columbians, and parties views on the issues.</p>
      <p className="mb-4 italic dark:text-gray-400">Best viewed in landscape on mobile devices. | "2024 importance" is a subjective judgement made by the author.</p>
      <PoliticalStanceTable />
    </div>
  );
}

export default App;