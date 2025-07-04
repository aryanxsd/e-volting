
import React, { useState } from 'react';

const VoterForm = () => {
  const [name, setName] = useState("");

  const addCandidate = async () => {
    // Call smart contract to add candidate (admin only)
  };

  return (
    <div>
      <input type="text" value={name} placeholder="Candidate Name" onChange={e => setName(e.target.value)} />
      <button onClick={addCandidate}>Add Candidate</button>
    </div>
  );
};

export default VoterForm;
