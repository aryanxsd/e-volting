export default function CandidateList({ candidates }) {
  return (
    <ul>
      {candidates.map((c) => (
        <li key={c.id} className="mb-2">
          {c.name}: {c.voteCount} votes
        </li>
      ))}
    </ul>
  );
}
