
import React, { useState } from 'react';

const VoteSection = () => {
  const [id, setId] = useState("");

  const vote = async () => {
    // Call contract vote function with ID
  };

  return (
    <div>
      <input type="number" placeholder="Candidate ID" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={vote}>Vote</button>
    </div>
  );
};

export default VoteSection;
