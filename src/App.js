import React from 'react';
import PoliticalStanceTable from './PoliticalStanceTable';

function App() {
  return (
    <div className="App p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-1">2024 IssueTracker for British Columbia</h1>
      <p className="dark:text-gray-300">Tracking issues that matter most to British Columbians, and parties views on the issues.</p>
      <p className="mb-4 italic dark:text-gray-400">Best viewed in landscape on mobile devices. | "Election importance" is a subjective judgement made by the author.</p>
      <PoliticalStanceTable />
      <p className="mt-2 dark:text-gray-300">Source code available at <a href='https://github.com/aidenmitchell/issuetracker' className='underline'>https://github.com/aidenmitchell/issuetracker</a>. Contributions appreciated!</p>
      <p className="mt-2 dark:text-gray-300">Favicon credit: <a href='https://commons.wikimedia.org/wiki/File:%22Spirit_of_BC%22_flag.svg' className='underline'>Spirit of BC flag.svg</a> by Yagya Parihar, used under CC BY-SA 4.0 / Transparent background expanded from original</p>
    </div>
  );
}

export default App;