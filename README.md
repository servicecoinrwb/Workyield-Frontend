# Work Yield Dashboard

A web-based decentralized application (dApp) for interacting with the WorkYield Token V2 smart contract. This dashboard provides a user-friendly interface for both regular token holders and contract administrators.

---

## 🧠 Core Concept

The **WorkYield Token (WYT)** is a digital asset whose supply and value are linked to productive, real-world projects, represented as **"Work Orders"** on the blockchain.

- **Work Orders**: An administrator can create a Work Order to represent a project expected to generate future revenue. When a Work Order is created, WYT tokens are minted against it.
- **Stablecoin Backing**: Users purchase WYT using a stablecoin (e.g., `pUSD`), which helps fund Work Orders.
- **Yield Generation**: As real-world projects complete and generate revenue, funds are paid back on-chain, backing the value of WYT and enabling redemptions.

> This creates a transparent, on-chain system where token value is tied to the successful completion of tangible work.

---

## ✨ Features

### 👤 User Features

- **Connect Wallet**: Use MetaMask or another wallet to connect securely.
- **View Token Stats**: See total supply, available WYT, and contract balance.
- **Buy WYT**: Purchase tokens using the payment stablecoin.
- **Redeem WYT**: Convert tokens back to stablecoin (with fee).
- **Work Order Viewer**: View all work orders and their yield, reserve, and status.
- **Export to PDF**: Download a full report of all work orders.

---

### ⚙️ Admin Features

(*Visible only to the owner wallet*)

- **Mint Work Order**: Create a new work order and mint WYT.
- **Fund Work Order**: Send stablecoin from the contract to a work order.
- **Withdraw Fees**: Collect redemption fees.
- **Set Redemption Fee**: Change the fee charged for redeeming WYT.
- **Cancel Work Order**: Mark a work order as invalid or canceled.

---

## 🛠️ Technology Stack

| Layer       | Tech Used                      |
|-------------|--------------------------------|
| Frontend    | HTML5, CSS3, JavaScript (ES6+) |
| Styling     | Tailwind CSS + custom `style.css` |
| Blockchain  | `ethers.js` for smart contract interaction |
| PDF Export  | `jsPDF`, `jsPDF-AutoTable`     |
| Network     | Ethereum-compatible chain (e.g., Plume) |

---

## ⚙️ How It Works (Architecture)

1. **Interface (`index.html`, `style.css`)**
   - Renders the UI and layout for the dApp.

2. **Logic (`script.js`)**
   - Connects to wallet via `ethers.js`
   - Fetches real-time data like `availableTokens()` and `workOrders()`
   - Sends transactions for buy/mint/fund/redeem/cancel

3. **Smart Contract**
   - Deployed WorkYieldTokenV2 contract handles logic, minting, fee distribution, and redemption.

---

## 🚀 Setup and Installation

1. **Clone this repo**

```bash
git clone https://github.com/your-username/workyield-dashboard.git
cd workyield-dashboard



Welcome to the Work Yield Arcade!
Thanks for taking a break from stacking yield to touch some grass and play some games. Here's everything you need to know to compete for weekly prizes.

How It Works
1. Play & Get a High Score 🚀

Choose any game from the menu and do your best to get a high score.

Your score is converted into "Tickets" 🎟️ at the end of each game.

2. Connect Your Wallet 🔗

To submit your tickets to the weekly leaderboard, you'll need to connect your wallet.

Click the "Connect Wallet" button in the top right corner. This lets us know who you are!

3. Submit Your Score ✅

After a game ends, you'll see a "Submit Score" button.

Clicking this will send your score to our secure server. The server acts as a referee to validate the score and then posts it to the on-chain leaderboard.

You can submit a new score every 12 hours to add to your weekly total!

4. Climb the Leaderboard 🏆

Click the "Leaderboard" button on the main menu to see where you rank against other players.

The leaderboard shows the total accumulated tickets for the current weekly season.

5. Win Weekly Rewards 🎉

At the end of each week, the leaderboard is finalized.

The top 3 players will automatically receive token rewards for their high scores!

After the prizes are sent, the leaderboard resets for a new week of competition.

Good luck, and have fun!
