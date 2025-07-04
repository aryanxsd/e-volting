
import React, { useEffect, useState } from 'react';

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    // Fetch candidates from smart contract
  }, []);

  return (
    <div>
      <h2>Candidates</h2>
      {candidates.map((c, i) => (
        <p key={i}>{c.id}. {c.name} - {c.voteCount} votes</p>
      ))}
    </div>
  );
};

export default CandidateList;
