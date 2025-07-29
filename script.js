I've updated the `script.js` file to connect to your latest smart contract.

Please replace the entire content of your current `script.js` file with the code below. This will sync your dashboard with the new contract address and ABI you just provided.

-----

### ✅ Updated `script.js`

```javascript
// script.js - Final corrected version with latest contract address

// --- CONFIGURATION ---
const contractAddress = '0x5a9d7DF133a1426f78D17Ac2EE41DE2F8ECb1eF6';

// Standard ERC20 ABI for interacting with the payment token
const tokenABI = [
  "function approve(address spender, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function balanceOf(address account) view returns (uint256)",
  "function totalSupply() view returns (uint256)",
  "function decimals() view returns (uint8)"
];

// Main contract ABI (Now populated with the full, correct ABI)
const contractABI = [{"inputs":[{"internalType":"address","name":"initialOwner","type":"address"},{"internalType":"address","name":"paymentTokenAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"workOrderId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"OrderFunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newFeePercentage","type":"uint256"}],"name":"RedemptionFeeSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReserveFunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"holder","type":"address"},{"indexed":false,"internalType":"uint256","name":"wytAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pUSDAmount","type":"uint256"}],"name":"TokensRedeemed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"workOrderId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"yieldAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIssued","type":"uint256"}],"name":"WorkOrderMinted","type":"event"},{"inputs":[],"name":"RESERVE_PERCENTAGE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"availableTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pUSDAmount","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"workOrderId","type":"uint256"}],"name":"cancelWorkOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"collectedFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractPaymentTokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"workOrderId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"fundFromWorkOrderPayment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"grossYield","type":"uint256"},{"internalType":"string","name":"description","type":"string"}],"name":"mintFromWorkOrder","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextWorkOrderId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paymentToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"wytAmount","type":"uint256"}],"name":"redeemTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"redemptionFeePercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newFeePercentage","type":"uint256"}],"name":"setRedemptionFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReserveFund","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"workOrders","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"grossYield","type":"uint256"},{"internalType":"uint256","name":"reserveAmount","type":"uint256"},{"internalType":"uint256","name":"tokensIssued","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"bool","name":"isPaid","type":"bool"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"createdAt","type":"uint256"}],"stateMutability":"view","type":"function"}];

// --- APPLICATION STATE & ELEMENTS ---
const App = {
  provider: null,
  signer: null,
  contract: null,
  userAddress: null,
  wytDecimals: 18,
  paymentTokenDecimals: 18,
  elements: {},

  // --- INITIALIZATION ---
  init() {
    this.cacheDOMElements();
    this.addEventListeners();
    console.log("App initialized.");
  },

  cacheDOMElements() {
    this.elements = {
      connectButton: document.getElementById('connectButton'),
      totalSupply: document.getElementById('totalSupply'),
      availableTokens: document.getElementById('availableTokens'),
      paymentBalance: document.getElementById('paymentBalance'),
      adminPanel: document.getElementById('adminPanel'),
      workOrderTable: document.getElementById('workOrderTable'),
      userBalance: document.getElementById('userBalance'),
      wytPrice: document.getElementById('wytPrice'),
      // User Actions
      buyAmountInput: document.getElementById('buyAmount'),
      buyButton: document.getElementById('buyButton'),
      redeemAmountInput: document.getElementById('redeemAmount'),
      redeemButton: document.getElementById('redeemButton'),
      // Admin Actions
      mintAmountInput: document.getElementById('mintAmount'),
      mintDescriptionInput: document.getElementById('mintDescription'),
      mintButton: document.getElementById('mintButton'),
      fundIdInput: document.getElementById('fundId'),
      fundAmountInput: document.getElementById('fundAmount'),
      fundButton: document.getElementById('fundButton'),
      withdrawFeesButton: document.getElementById('withdrawFeesButton'),
      feeInput: document.getElementById('feeInput'),
      setFeeButton: document.getElementById('setFeeButton'),
      cancelIdInput: document.getElementById('cancelId'),
      cancelButton: document.getElementById('cancelButton'),
      exportPdfButton: document.getElementById('exportPdfButton')
    };
  },
  
  addEventListeners() {
    this.elements.connectButton?.addEventListener('click', () => this.connectWallet());
    this.elements.buyButton?.addEventListener('click', () => this.buyTokens());
    this.elements.redeemButton?.addEventListener('click', () => this.redeemTokens());
    this.elements.mintButton?.addEventListener('click', () => this.mintWorkOrder());
    this.elements.fundButton?.addEventListener('click', () => this.fundWorkOrder());
    this.elements.withdrawFeesButton?.addEventListener('click', () => this.withdrawFees());
    this.elements.setFeeButton?.addEventListener('click', () => this.setRedemptionFee());
    this.elements.cancelButton?.addEventListener('click', () => this.cancelWorkOrder());
    this.elements.exportPdfButton?.addEventListener('click', () => this.exportPDF());

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          this.connectWallet();
        } else {
          this.userAddress = null;
          this.elements.connectButton.textContent = 'Connect Wallet';
          this.elements.connectButton.disabled = false;
          this.elements.adminPanel.classList.add('hidden');
        }
      });
    }
  },

  // --- WEB3 INTERACTIONS ---
  async connectWallet() {
    if (!window.ethereum) {
      return this.showNotification('Please install MetaMask.', 'error');
    }
    try {
      this.provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await this.provider.send("eth_requestAccounts", []);
      this.signer = this.provider.getSigner();
      this.userAddress = accounts[0];
      this.contract = new ethers.Contract(contractAddress, contractABI, this.signer);
      
      const shortAddress = `${this.userAddress.slice(0, 6)}...${this.userAddress.slice(-4)}`;
      this.elements.connectButton.textContent = `Connected: ${shortAddress}`;
      this.elements.connectButton.disabled = true;
      
      this.showNotification('Wallet connected successfully!', 'success');
      this.loadContractData();
    } catch (err) {
      console.error(err);
      this.showNotification('Wallet connection failed.', 'error');
    }
  },

  async loadContractData() {
    try {
      this.wytDecimals = await this.contract.decimals();
      const paymentTokenAddress = await this.contract.paymentToken();
      const paymentTokenContract = new ethers.Contract(paymentTokenAddress, tokenABI, this.provider);
      this.paymentTokenDecimals = await paymentTokenContract.decimals();
      
      console.log(`WYT Decimals: ${this.wytDecimals}, Payment Token Decimals: ${this.paymentTokenDecimals}`);

      const [totalSupply, available, paymentBalance, owner, userBalance] = await Promise.all([
        this.contract.totalSupply(),
        this.contract.availableTokens(),
        this.contract.contractPaymentTokenBalance(),
        this.contract.owner(),
        this.contract.balanceOf(this.userAddress)
      ]);
      
      this.elements.totalSupply.textContent = this.formatTokenValue(totalSupply, this.wytDecimals);
      this.elements.availableTokens.textContent = this.formatTokenValue(available, this.wytDecimals);
      this.elements.paymentBalance.textContent = this.formatTokenValue(paymentBalance, this.paymentTokenDecimals);
      this.elements.userBalance.textContent = this.formatTokenValue(userBalance, this.wytDecimals);

      if (!totalSupply.isZero()) {
        const price = paymentBalance.mul(ethers.utils.parseUnits("1", this.wytDecimals)).div(totalSupply);
        this.elements.wytPrice.textContent = this.formatTokenValue(price, this.paymentTokenDecimals);
      } else {
        this.elements.wytPrice.textContent = '0.00';
      }
      
      if (owner.toLowerCase() === this.userAddress.toLowerCase()) {
        this.elements.adminPanel.classList.remove('hidden');
      }
      
      this.renderWorkOrders();
    } catch (error) {
      console.error("Error loading contract data:", error);
      this.showNotification('Failed to load contract data.', 'error');
    }
  },
  
  // --- USER & ADMIN ACTIONS ---
  async buyTokens() {
    await this.handleTransaction(this.elements.buyButton, async () => {
      const amount = this.elements.buyAmountInput.value;
      if (!amount || parseFloat(amount) <= 0) throw new Error("Please enter a valid amount.");

      const parsedAmount = ethers.utils.parseUnits(amount, this.paymentTokenDecimals);
      const tokenAddress = await this.contract.paymentToken();
      const paymentToken = new ethers.Contract(tokenAddress, tokenABI, this.signer);

      const approveTx = await paymentToken.approve(contractAddress, parsedAmount);
      this.showNotification('Approving spend... please wait.', 'info');
      await approveTx.wait();

      this.showNotification('Approval successful! Now buying...', 'info');
      const buyTx = await this.contract.buyTokens(parsedAmount);
      await buyTx.wait();
      
      return 'WYT purchased successfully!';
    });
  },

  async redeemTokens() {
    await this.handleTransaction(this.elements.redeemButton, async () => {
        const amount = this.elements.redeemAmountInput.value;
        if (!amount || parseFloat(amount) <= 0) throw new Error("Please enter a valid amount.");
        const parsedAmount = ethers.utils.parseUnits(amount, this.wytDecimals);
        const tx = await this.contract.redeemTokens(parsedAmount);
        await tx.wait();
        return 'WYT redeemed successfully!';
    });
  },
  
  async mintWorkOrder() {
    await this.handleTransaction(this.elements.mintButton, async () => {
      const grossYield = this.elements.mintAmountInput.value;
      const desc = this.elements.mintDescriptionInput.value;
      if (!grossYield || !desc) throw new Error("Gross yield and description are required.");
      
      const parsedGrossYield = ethers.utils.parseUnits(grossYield, this.paymentTokenDecimals);
      
      const tx = await this.contract.mintFromWorkOrder(parsedGrossYield, desc);
      await tx.wait();
      this.renderWorkOrders();
      return 'Work order minted!';
    });
  },

  async fundWorkOrder() {
    await this.handleTransaction(this.elements.fundButton, async () => {
        const id = this.elements.fundIdInput.value;
        const amount = this.elements.fundAmountInput.value;
        if (!id || !amount) throw new Error("Work Order ID and amount are required.");
        const tx = await this.contract.fundFromWorkOrderPayment(id, ethers.utils.parseUnits(amount, this.paymentTokenDecimals));
        await tx.wait();
        this.renderWorkOrders();
        return 'Work order funded!';
    });
  },

  async withdrawFees() {
    await this.handleTransaction(this.elements.withdrawFeesButton, async () => {
        const tx = await this.contract.withdrawFees();
        await tx.wait();
        return 'Fees withdrawn successfully!';
    });
  },

  async setRedemptionFee() {
    await this.handleTransaction(this.elements.setFeeButton, async () => {
        const newFee = parseInt(this.elements.feeInput.value);
        if (isNaN(newFee) || newFee < 0 || newFee > 20) {
            throw new Error("Fee must be a number between 0 and 20.");
        }
        const tx = await this.contract.setRedemptionFee(newFee);
        await tx.wait();
        return 'Redemption fee updated!';
    });
  },
  
  async cancelWorkOrder() {
      await this.handleTransaction(this.elements.cancelButton, async () => {
          const id = parseInt(this.elements.cancelIdInput.value);
          if (isNaN(id) || id <= 0) throw new Error("Please enter a valid Work Order ID.");
          const tx = await this.contract.cancelWorkOrder(id);
          await tx.wait();
          this.renderWorkOrders();
          return 'Work order cancelled!';
      });
  },
  
  // --- RENDERING & UTILITIES ---
  async renderWorkOrders() {
    this.elements.workOrderTable.innerHTML = '<table><tbody><tr><td>Loading work orders...</td></tr></tbody></table>';
    try {
      const nextId = await this.contract.nextWorkOrderId();
      if (nextId.eq(1)) {
        this.elements.workOrderTable.innerHTML = '<p>No work orders found.</p>';
        return;
      }
      
      const promises = [];
      for (let i = 1; i < nextId; i++) {
        promises.push(this.contract.workOrders(i));
      }
      const workOrders = await Promise.all(promises);

      const tableHtml = `
        <table>
          <thead>
            <tr>
              <th>ID</th><th>Gross Yield</th><th>Reserve</th><th>Issued</th>
              <th>Active</th><th>Paid</th><th>Description</th><th>Created</th>
            </tr>
          </thead>
          <tbody>
            ${workOrders.map(wo => `
              <tr>
                <td>${wo.id}</td>
                <td>${this.formatTokenValue(wo.grossYield, this.paymentTokenDecimals)}</td>
                <td>${this.formatTokenValue(wo.reserveAmount, this.paymentTokenDecimals)}</td>
                <td>${this.formatTokenValue(wo.tokensIssued, this.wytDecimals)}</td>
                <td>${wo.isActive ? '✅' : '❌'}</td>
                <td>${wo.isPaid ? '✅' : '❌'}</td>
                <td>${wo.description}</td>
                <td>${new Date(wo.createdAt * 1000).toLocaleDateString()}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
      this.elements.workOrderTable.innerHTML = tableHtml;
    } catch (err) {
      console.error("Could not render work orders", err);
      this.elements.workOrderTable.innerHTML = '<p class="text-red-500">Error loading work orders.</p>';
    }
  },

  exportPDF() {
    try {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      const tableElement = this.elements.workOrderTable.querySelector('table');
      if (!tableElement) {
          this.showNotification('No work order data to export.', 'error');
          return;
      }

      doc.text('WorkYield Token V2 - Work Orders', 14, 16);
      doc.setFontSize(10);
      doc.text(`Exported on: ${new Date().toLocaleString()}`, 14, 22);

      doc.autoTable({
        html: tableElement,
        startY: 28,
        theme: 'grid',
        headStyles: { fillColor: [249, 115, 22] }, // Orange header
      });

      doc.save(`work-orders-${new Date().toISOString().slice(0,10)}.pdf`);
      this.showNotification('PDF exported successfully!', 'success');
    } catch (err) {
        console.error("PDF Export failed", err);
        this.showNotification('PDF export failed.', 'error');
    }
  },

  async handleTransaction(button, transactionCallback) {
    this.setButtonLoading(button, true);
    try {
      const successMessage = await transactionCallback();
      this.showNotification(successMessage, 'success');
      this.loadContractData(); // Refresh data after successful transaction
    } catch (error) {
      const errorMessage = error.reason || error.message || "An unknown error occurred.";
      console.error("Transaction failed:", error);
      this.showNotification(errorMessage, 'error');
    } finally {
      this.setButtonLoading(button, false);
    }
  },

  setButtonLoading(button, isLoading) {
    if (!button) return;
    if (isLoading) {
      button.disabled = true;
      button.dataset.originalText = button.innerHTML;
      button.innerHTML = `<span class="spinner"></span> Processing...`;
    } else {
      button.disabled = false;
      button.innerHTML = button.dataset.originalText;
    }
  },

  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.classList.add('fade-out');
      setTimeout(() => notification.remove(), 500);
    }, 4000);
  },

  formatTokenValue(value, decimals) {
    if (!value) return '0.0';
    const formatted = ethers.utils.formatUnits(value, decimals);
    return parseFloat(formatted).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 4
    });
  }
};

// --- CSS FOR UTILITIES (Spinner and Notifications) ---
const styles = `
  .spinner {
    display: inline-block;
    width: 1em; height: 1em;
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s ease-in-out infinite;
    margin-right: 0.5em;
    vertical-align: middle;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  .notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 15px 25px;
    border-radius: 0.5rem;
    color: white;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    z-index: 1000;
    opacity: 1;
    transition: opacity 0.5s, transform 0.5s;
    transform: translateY(0);
  }
  .notification.info { background-color: #3b82f6; }
  .notification.success { background-color: #10b981; }
  .notification.error { background-color: #ef4444; }
  .notification.fade-out {
    opacity: 0;
    transform: translateY(20px);
  }
`;
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);


// --- START THE APP ---
window.addEventListener('DOMContentLoaded', () => App.init());
```
