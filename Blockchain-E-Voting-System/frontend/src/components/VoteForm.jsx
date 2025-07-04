import { useState } from "react";

export default function VoteForm({ candidates, vote }) {
  const [selected, setSelected] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (selected) {
      vote(selected);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <select
        className="p-2 rounded text-black"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        required
      >
        <option value="" disabled>
          Select Candidate
        </option>
        {candidates.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="ml-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
      >
        Vote
      </button>
    </form>
  );
}
