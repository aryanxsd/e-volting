import React, { useEffect, useState } from "react";
import Web3 from "web3";
import VotingContract from "./contracts/Voting.json";
import CandidateList from "./components/CandidateList";
import VoteForm from "./components/VoteForm";

function App() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);

        const networkId = await web3.eth.net.getId();
        const deployedNetwork = VotingContract.networks[networkId];
        if (deployedNetwork) {
          const voting = new web3.eth.Contract(VotingContract.abi, deployedNetwork.address);
          setContract(voting);

          const count = await voting.methods.candidatesCount().call();
          const loadedCandidates = [];
          for (let i = 1; i <= count; i++) {
            const candidate = await voting.methods.candidates(i).call();
            loadedCandidates.push(candidate);
          }
          setCandidates(loadedCandidates);

          const voted = await voting.methods.voters(accounts[0]).call();
          setHasVoted(voted);
        } else {
          alert("Smart contract not deployed to detected network.");
        }
      } else {
        alert("Please install MetaMask!");
      }
    };

    init();
  }, []);

  const vote = async (candidateId) => {
    if (contract) {
      await contract.methods.vote(candidateId).send({ from: account });
      setHasVoted(true);
      // Refresh candidates to update vote count
      const count = await contract.methods.candidatesCount().call();
      const updatedCandidates = [];
      for (let i = 1; i <= count; i++) {
        const candidate = await contract.methods.candidates(i).call();
        updatedCandidates.push(candidate);
      }
      setCandidates(updatedCandidates);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-900 min-h-screen text-white rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Blockchain E-Voting System</h1>
      <p className="mb-4">Account: {account}</p>
      {hasVoted ? (
        <>
          <h2 className="text-xl font-semibold mb-2">Voting Results</h2>
          <CandidateList candidates={candidates} />
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-2">Cast Your Vote</h2>
          <VoteForm candidates={candidates} vote={vote} />
        </>
      )}
    </div>
  );
}

export default App;
