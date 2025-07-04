
import React from 'react';
import VoterForm from './components/VoterForm';
import CandidateList from './components/CandidateList';
import VoteSection from './components/VoteSection';

function App() {
  return (
    <div className="App">
      <h1>🗳️ Blockchain Voting DApp</h1>
      <VoterForm />
      <CandidateList />
      <VoteSection />
    </div>
  );
}

export default App;
