WorkYield Token V2 Dashboard
A web-based decentralized application (dApp) for interacting with the WorkYield Token V2 smart contract. This dashboard provides a user-friendly interface for both regular token holders and contract administrators.

Core Concept
The WorkYield Token (WYT) is a digital asset whose supply and value are linked to productive, real-world projects, represented as "Work Orders" on the blockchain.

Work Orders: An administrator can create a "Work Order" to represent a project that is expected to generate future revenue. When a Work Order is created, a corresponding amount of WYT is minted.

Stablecoin Backing: The system uses a payment token (like pUSD, a stablecoin) as its primary currency. Users buy WYT with this token, and these funds can be used to finance the Work Orders.

Yield Generation: As the real-world projects (Work Orders) are completed and generate revenue, funds are paid back into the contract, increasing the value backing the WYT tokens and allowing holders to redeem them.

This creates a transparent, on-chain system where token value is tied to the successful completion of tangible work.

Features
The dashboard has two distinct sets of features based on user role.

👤 User Features
Connect Wallet: Securely connect to the dApp using a browser wallet like MetaMask.

View Token Data: See real-time on-chain data, including the total supply of WYT, the number of available tokens, and the contract's balance of the payment token.

Buy WYT: Purchase WorkYield Tokens using the designated payment token (pUSD).

Redeem WYT: Exchange WYT back for the underlying payment token, subject to a small fee.

View Work Orders: See a detailed list of all active and past work orders, including their yield, funding status, and description.

Export to PDF: Download a PDF report of the work orders table.

⚙️ Admin Features
The admin panel is automatically revealed if the connected wallet is the owner of the smart contract.

Mint from Work Order: Create a new work order, minting new WYT tokens against its projected yield.

Fund Work Order: Allocate payment tokens from the contract's balance to a specific work order.

Withdraw Fees: Collect the redemption fees accumulated by the contract.

Set Redemption Fee: Adjust the percentage fee for redeeming WYT.

Cancel Work Order: Deactivate an existing work order if it's no longer valid.

Technology Stack
Frontend: HTML5, CSS3, JavaScript (ES6+)

Styling: Tailwind CSS for layout and utility classes, with a custom (style.css) stylesheet for the modern, dark theme.

Blockchain Interaction: ethers.js is used as the bridge between the frontend application and the Ethereum blockchain.

PDF Generation: jsPDF and jsPDF-AutoTable are used to create and download PDF reports.

Backend: An Ethereum-compatible Smart Contract (written in Solidity) deployed to a network like Ethereum, Polygon, or a testnet.

How It Works (Architecture)
The application follows a standard dApp architecture:

Interface (index.html, style.css): The browser renders the static HTML and CSS files to create the user interface.

Client-Side Logic (script.js): This is the core engine of the dApp.

Initialization: On page load, the script prepares the application, caching references to HTML elements and setting up event listeners for all the buttons.

Wallet Connection: When the user clicks "Connect Wallet," the script uses ethers.js to request a connection to the user's wallet.

Data Fetching: After connecting, the script makes read-only view calls to the smart contract to fetch data like totalSupply() and workOrders(). This populates the dashboard with live, on-chain information.

Transactions: When a user performs an action that changes the state of the blockchain (like buying or minting), the script builds a transaction. ethers.js sends this transaction to the user's wallet, which asks the user for confirmation (signing). Once signed, the transaction is sent to the blockchain to be processed.

Feedback: The script provides real-time feedback through non-blocking notifications (toasts) and by setting buttons to a "loading" state while transactions are being processed.

Setup and Installation
To run this project locally, follow these steps:

Clone the repository:

Bash

git clone <your-repository-url>
cd <repository-folder>
Run a local server:
You cannot open index.html directly in the browser due to security restrictions. You need a simple local server. If you have Node.js installed, you can use live-server.

Bash

# Install live-server globally
npm install -g live-server

# Run the server from your project directory
live-server
Your browser will automatically open to the correct local address.

Configuration:
Before the dApp can function, you must configure it to point to your specific smart contract.

Open the script.js file.

Update the contractAddress variable with the address of your deployed WorkYieldTokenV2 contract.

Ensure the contractABI variable contains the complete and correct JSON ABI from your compiled smart contract.


Sources











Video

Deep Research

Canvas

Image

