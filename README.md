WorkYield Token V2 Dashboard
A web-based decentralized application (dApp) for interacting with the WorkYield Token V2 smart contract. This dashboard provides a user-friendly interface for both regular token holders and contract administrators.

🧠 Core Concept
The WorkYield Token (WYT) is a digital asset whose supply and value are backed by productive, real-world jobs called Work Orders. This creates a bridge between on-chain assets and off-chain labor.

Work Orders: Represent real projects expected to generate revenue. Admins mint WYT against their projected yield.

Stablecoin-Backed: Uses a stable payment token like pUSD to buy WYT, which funds those work orders.

Yield Redemption: As projects generate income, that yield is used to redeem WYT, backing the token with actual economic value.

This system ties token value directly to successful job completion — building a sustainable, transparent DeFi model.

✨ Features
👤 User Features
Connect Wallet – Secure login using MetaMask or any EVM-compatible wallet.

Buy WYT – Convert pUSD into WorkYield Tokens.

Redeem WYT – Burn WYT for stablecoin yield (less a redemption fee).

View Token Stats – See total supply, payment token reserves, and available WYT.

Explore Work Orders – Browse a live table of active and completed jobs.

Export to PDF – Download a PDF summary of all work orders.

⚙️ Admin Features
Automatically shown when the connected wallet is the contract owner.

Mint Work Order – Register a new job and mint WYT against projected yield.

Fund Work Order – Pay out funds from the contract to finance work orders.

Withdraw Fees – Collect accumulated redemption fees from the contract.

Set Redemption Fee – Adjust the percentage fee on redemptions.

Cancel Work Order – Deactivate a job if it's invalid or refunded.

🛠️ Tech Stack
Layer	Tools
Frontend	HTML5, JavaScript (ES6+), Tailwind CSS
Web3 Integration	ethers.js
PDF Export	jsPDF
Smart Contract	Solidity (WYT V2 Contract)

🏗️ Architecture Overview
HTML/CSS UI: index.html provides structure; style.css and Tailwind CSS deliver responsive styling.

Script Engine: script.js uses ethers.js to:

Connect to Ethereum-compatible wallets.

Read smart contract state (e.g., availableTokens(), workOrders()).

Send transactions to mutate state (e.g., buyTokens(), mintFromWorkOrder()).

Admin Detection: Admin panel reveals automatically if wallet matches contract owner().

Live Feedback: Button spinners, toast alerts, and real-time UI updates.

🚀 Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/YOUR_USERNAME/WorkYieldTokenV2-Dashboard.git
cd WorkYieldTokenV2-Dashboard
2. Run a Local Server
You cannot open index.html directly due to wallet provider restrictions. Use a dev server like live-server.

bash
Copy
Edit
npm install -g live-server
live-server
Your default browser should launch the dApp automatically.

3. Configuration
Inside script.js:

Update this line with your deployed contract:

js
Copy
Edit
const contractAddress = '0xYourContractAddress';
Ensure the contractABI block is complete and matches your contract's ABI.

📄 License
MIT © [Your Name or Team Name]

Let me know if you want it in .md format or want to add badges, screenshots, or deployment instructions (like GitHub Pages or Vercel).
