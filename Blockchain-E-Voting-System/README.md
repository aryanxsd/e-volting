# Blockchain E-Voting System

This project is a decentralized blockchain-based voting system using Solidity smart contracts, React frontend, and Tailwind CSS styling.

---

## Features

- Users can vote on predefined candidates.
- Votes are recorded on the Ethereum blockchain.
- Real-time results after voting.
- Frontend connects to MetaMask and interacts with smart contract.

---

## Requirements

- Node.js and npm installed
- Truffle framework (`npm install -g truffle`)
- Ganache (for local Ethereum blockchain)
- MetaMask browser extension

---

## Setup

1. Clone the repo and navigate into it:

```bash
git clone <your-repo-url>
cd Blockchain-E-Voting-System
```

2. Start Ganache and run it on default port `7545`.

3. Compile and deploy the smart contract:

```bash
truffle migrate --network development
```

4. Install frontend dependencies and start:

```bash
cd frontend
npm install
npm start
```

5. Open your browser at `http://localhost:3000`.

6. Connect MetaMask to your local Ganache blockchain.

7. Vote and see results update in real time!

---

## Notes

- Make sure to configure MetaMask to use Ganache’s network.
- This project is for educational/demo purposes only.
