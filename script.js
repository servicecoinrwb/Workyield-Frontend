// script.js - Final version with simplified wallet connection and all features

// --- CONFIGURATION ---
const contractAddress = '0xccF4eaa301058Ec5561a07Cc38A75F47a2912EA5';

// Standard ERC20 ABI for interacting with the payment token
const tokenABI = [
  "function approve(address spender, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function balanceOf(address account) view returns (uint256)",
  "function totalSupply() view returns (uint256)",
  "function decimals() view returns (uint8)"
];

// Main contract ABI
const contractABI = [{"inputs":[{"internalType":"address","name":"initialOwner","type":"address"},{"internalType":"address","name":"paymentTokenAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"workOrderId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"OrderFunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newFeePercentage","type":"uint256"}],"name":"RedemptionFeeSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReserveFunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"holder","type":"address"},{"indexed":false,"internalType":"uint256","name":"wytAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pUSDAmount","type":"uint256"}],"name":"TokensRedeemed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"workOrderId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"yieldAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIssued","type":"uint256"}],"name":"WorkOrderMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"workOrderId","type":"uint256"},{"indexed":true,"internalType":"address","name":"payer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WorkOrderPaid","type":"event"},{"inputs":[],"name":"RESERVE_PERCENTAGE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"availableTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pUSDAmount","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"workOrderId","type":"uint256"}],"name":"cancelWorkOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"collectedFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractPaymentTokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"grossYield","type":"uint256"},{"internalType":"string","name":"description","type":"string"}],"name":"mintFromWorkOrder","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextWorkOrderId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paymentToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"workOrderId","type":"uint256"},{"internalType":"uint256","name":"payoutAmount","type":"uint256"}],"name":"payoutWorkOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"wytAmount","type":"uint256"}],"name":"redeemTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"redemptionFeePercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newFeePercentage","type":"uint256"}],"name":"setRedemptionFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReserveFund","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"workOrders","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"grossYield","type":"uint256"},{"internalType":"uint256","name":"reserveAmount","type":"uint256"},{"internalType":"uint256","name":"tokensIssued","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"bool","name":"isPaid","type":"bool"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"createdAt","type":"uint256"}],"stateMutability":"view","type":"function"}];

// --- APPLICATION STATE & ELEMENTS ---
const App = {
    provider: null,
    signer: null,
    contract: null,
    userAddress: null,
    wytDecimals: 18,
    paymentTokenDecimals: 18,
    elements: {},

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
            txHistoryTable: document.getElementById('txHistoryTable'),
            userBalance: document.getElementById('userBalance'),
            wytPrice: document.getElementById('wytPrice'),
            buyTab: document.getElementById('buyTab'),
            redeemTab: document.getElementById('redeemTab'),
            buyPanel: document.getElementById('buyPanel'),
            redeemPanel: document.getElementById('redeemPanel'),
            pUSDBalance: document.getElementById('pUSDBalance'),
            wytUserBalance: document.getElementById('wytUserBalance'),
            receiveAmount: document.getElementById('receiveAmount'),
            swapButton: document.getElementById('swapButton'),
            buyAmountInput: document.getElementById('buyAmount'),
            redeemAmountInput: document.getElementById('redeemAmount'),
            burnWytBalance: document.getElementById('burnWytBalance'),
            burnAmountInput: document.getElementById('burnAmount'),
            burnButton: document.getElementById('burnButton'),
            payoutOrderIdInput: document.getElementById('payoutOrderId'),
            payoutAmountInput: document.getElementById('payoutAmount'),
            payoutButton: document.getElementById('payoutButton'),
            collectedFees: document.getElementById('collectedFees'),
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
        this.elements.swapButton?.addEventListener('click', () => this.executeSwap());
        this.elements.buyTab?.addEventListener('click', () => this.switchTab('buy'));
        this.elements.redeemTab?.addEventListener('click', () => this.switchTab('redeem'));
        this.elements.buyAmountInput?.addEventListener('input', () => this.updateReceiveAmount());
        this.elements.redeemAmountInput?.addEventListener('input', () => this.updateReceiveAmount());
        this.elements.burnButton?.addEventListener('click', () => this.burnTokens());
        this.elements.payoutButton?.addEventListener('click', () => this.payoutWorkOrder());
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
            await this.loadContractData();
            this.switchTab('buy');
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
            
            const [totalSupply, available, paymentBalance, owner, userWytBalance, userPusdBalance, collectedFees] = await Promise.all([
                this.contract.totalSupply(),
                this.contract.availableTokens(),
                this.contract.contractPaymentTokenBalance(),
                this.contract.owner(),
                this.contract.balanceOf(this.userAddress),
                paymentTokenContract.balanceOf(this.userAddress),
                this.contract.collectedFees()
            ]);
            
            this.elements.totalSupply.innerHTML = this.formatTokenValue(totalSupply, this.wytDecimals);
            this.elements.availableTokens.innerHTML = this.formatTokenValue(available, this.wytDecimals);
            this.elements.paymentBalance.innerHTML = this.formatTokenValue(paymentBalance, this.paymentTokenDecimals);
            this.elements.userBalance.innerHTML = this.formatTokenValue(userWytBalance, this.wytDecimals);
            this.elements.collectedFees.innerHTML = this.formatTokenValue(collectedFees, this.paymentTokenDecimals);
            this.elements.wytUserBalance.textContent = this.formatTokenValue(userWytBalance, this.wytDecimals);
            this.elements.pUSDBalance.textContent = this.formatTokenValue(userPusdBalance, this.paymentTokenDecimals);
            this.elements.burnWytBalance.textContent = this.formatTokenValue(userWytBalance, this.wytDecimals);

            if (!totalSupply.isZero()) {
                const price = paymentBalance.mul(ethers.utils.parseUnits("1", this.wytDecimals)).div(totalSupply);
                this.elements.wytPrice.innerHTML = this.formatTokenValue(price, this.paymentTokenDecimals);
            } else {
                this.elements.wytPrice.innerHTML = '0.00';
            }
            
            if (owner.toLowerCase() === this.userAddress.toLowerCase()) {
                this.elements.adminPanel.classList.remove('hidden');
            }
            
            await this.renderWorkOrders();
            await this.renderTransactionHistory();
            this.updateReceiveAmount();
        } catch (error) {
            console.error("Error loading contract data:", error);
            this.showNotification('Failed to load contract data.', 'error');
        }
    },
  
    // --- USER & ADMIN ACTIONS ---
    async getPaymentTokenContract() {
        const paymentTokenAddress = await this.contract.paymentToken();
        return new ethers.Contract(paymentTokenAddress, tokenABI, this.signer);
    },

    async executeSwap() {
        const isBuy = !this.elements.buyPanel.classList.contains('hidden');
        if (isBuy) {
            await this.handleTransaction(this.elements.swapButton, async () => {
                const amount = this.elements.buyAmountInput.value;
                if (!amount || parseFloat(amount) <= 0) throw new Error("Please enter a valid amount.");
                const parsedAmount = ethers.utils.parseUnits(amount, this.paymentTokenDecimals);
                const paymentToken = await this.getPaymentTokenContract();
                const approveTx = await paymentToken.approve(contractAddress, parsedAmount);
                this.showNotification('Approving spend... please wait.', 'info');
                await approveTx.wait();
                this.showNotification('Approval successful! Now buying...', 'info');
                const buyTx = await this.contract.buyTokens(parsedAmount);
                await buyTx.wait();
                this.elements.buyAmountInput.value = '';
                return 'WYT purchased successfully!';
            });
        } else {
            await this.handleTransaction(this.elements.swapButton, async () => {
                const amount = this.elements.redeemAmountInput.value;
                if (!amount || parseFloat(amount) <= 0) throw new Error("Please enter a valid amount.");
                const parsedAmount = ethers.utils.parseUnits(amount, this.wytDecimals);
                const tx = await this.contract.redeemTokens(parsedAmount);
                await tx.wait();
                this.elements.redeemAmountInput.value = '';
                return 'WYT redeemed successfully!';
            });
        }
    },

    switchTab(tab) {
        const isBuy = tab === 'buy';
        this.elements.buyTab.classList.toggle('active', isBuy);
        this.elements.redeemTab.classList.toggle('active', !isBuy);
        this.elements.buyPanel.classList.toggle('hidden', !isBuy);
        this.elements.redeemPanel.classList.toggle('hidden', isBuy);
        this.updateReceiveAmount();
    },

    updateReceiveAmount() {
        const priceText = this.elements.wytPrice.textContent.replace(/,/g, '');
        const price = parseFloat(priceText);
        
        if (isNaN(price)) {
            this.elements.swapButton.textContent = 'Price Unavailable';
            this.elements.swapButton.disabled = true;
            return;
        }

        const isBuy = !this.elements.buyPanel.classList.contains('hidden');
        let receiveAmount = 0;
        let buttonText = 'Enter an amount';
        let disabled = true;
        let amountInput = isBuy ? this.elements.buyAmountInput : this.elements.redeemAmountInput;
        const amount = parseFloat(amountInput.value);

        if (!isNaN(amount) && amount > 0) {
            if (isBuy) {
                if (price > 0) receiveAmount = amount / price;
                buttonText = 'Buy WYT';
            } else {
                receiveAmount = amount * price;
                buttonText = 'Redeem WYT';
            }
            disabled = false;
        }
        
        this.elements.receiveAmount.textContent = receiveAmount.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 4
        });
        this.elements.swapButton.textContent = buttonText;
        this.elements.swapButton.disabled = disabled;
    },
    
    async mintWorkOrder() {
        await this.handleTransaction(this.elements.mintButton, async () => {
            const grossYield = this.elements.mintAmountInput.value;
            const desc = this.elements.mintDescriptionInput.value;
            if (!grossYield || !desc) throw new Error("Gross yield and description are required.");
            const parsedGrossYield = ethers.utils.parseUnits(grossYield, this.paymentTokenDecimals);
            const tx = await this.contract.mintFromWorkOrder(parsedGrossYield, desc);
            await tx.wait();
            return 'Work order minted!';
        });
    },

    async fundWorkOrder() {
        await this.handleTransaction(this.elements.fundButton, async () => {
            const id = this.elements.fundIdInput.value;
            const amount = this.elements.fundAmountInput.value;
            if (!id || !amount) throw new Error("Work Order ID and amount are required.");
            
            const parsedAmount = ethers.utils.parseUnits(amount, this.paymentTokenDecimals);
            const paymentToken = await this.getPaymentTokenContract();
            const approveTx = await paymentToken.approve(contractAddress, parsedAmount);

            this.showNotification('Approving spend... please wait.', 'info');
            await approveTx.wait();

            this.showNotification('Approval successful! Now funding...', 'info');
            const tx = await this.contract.fundFromWorkOrderPayment(id, parsedAmount);
            await tx.wait();
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
            return 'Work order cancelled!';
        });
    },

    async burnTokens() {
        await this.handleTransaction(this.elements.burnButton, async () => {
            const amount = this.elements.burnAmountInput.value;
            if (!amount || parseFloat(amount) <= 0) throw new Error("Please enter a valid amount to burn.");
            
            const parsedAmount = ethers.utils.parseUnits(amount, this.wytDecimals);
            const tx = await this.contract.burn(parsedAmount);
            await tx.wait();
            
            this.elements.burnAmountInput.value = '';
            return 'Tokens burned successfully!';
        });
    },

    async payoutWorkOrder() {
        await this.handleTransaction(this.elements.payoutButton, async () => {
            const id = this.elements.payoutOrderIdInput.value;
            const amount = this.elements.payoutAmountInput.value;
            if (!id || !amount || parseFloat(amount) <= 0) {
                throw new Error("Please enter a valid Work Order ID and payout amount.");
            }
            
            const parsedAmount = ethers.utils.parseUnits(amount, this.paymentTokenDecimals);
            
            const paymentToken = await this.getPaymentTokenContract();
            const approveTx = await paymentToken.approve(contractAddress, parsedAmount);
            this.showNotification('Approving payout... please wait.', 'info');
            await approveTx.wait();

            this.showNotification('Approval successful! Submitting payout...', 'info');
            const tx = await this.contract.payoutWorkOrder(id, parsedAmount);
            await tx.wait();
            
            this.elements.payoutOrderIdInput.value = '';
            this.elements.payoutAmountInput.value = '';
            return 'Work order payout successful!';
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

    async renderTransactionHistory() {
        this.elements.txHistoryTable.innerHTML = '<p>Loading history...</p>';
        try {
            const buyFilter = this.contract.filters.Transfer(this.contract.address, this.userAddress);
            const redeemFilter = this.contract.filters.TokensRedeemed(this.userAddress);
            const burnFilter = this.contract.filters.Transfer(this.userAddress, "0x0000000000000000000000000000000000000000");

            const buyEvents = await this.contract.queryFilter(buyFilter, 0, 'latest');
            const redeemEvents = await this.contract.queryFilter(redeemFilter, 0, 'latest');
            const burnEvents = await this.contract.queryFilter(burnFilter, 0, 'latest');

            let allEvents = [];

            buyEvents.forEach(event => {
                allEvents.push({ type: 'Buy', wytAmount: event.args.value, pUSDAmount: null, blockNumber: event.blockNumber, txHash: event.transactionHash });
            });
            redeemEvents.forEach(event => {
                allEvents.push({ type: 'Redeem', wytAmount: event.args.wytAmount, pUSDAmount: event.args.pUSDAmount, blockNumber: event.blockNumber, txHash: event.transactionHash });
            });
            burnEvents.forEach(event => {
                allEvents.push({ type: 'Burn', wytAmount: event.args.value, pUSDAmount: ethers.BigNumber.from(0), blockNumber: event.blockNumber, txHash: event.transactionHash });
            });

            allEvents.sort((a, b) => b.blockNumber - a.blockNumber);

            if (allEvents.length === 0) {
                this.elements.txHistoryTable.innerHTML = '<p>No transaction history found.</p>';
                return;
            }

            const tableHtml = `
                <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>WYT Amount</th>
                        <th>pUSD Amount</th>
                        <th>Transaction</th>
                    </tr>
                </thead>
                <tbody>
                    ${allEvents.slice(0, 10).map(event => `
                    <tr>
                        <td><span class="font-semibold ${
                            event.type === 'Buy' ? 'text-green-400' : 
                            event.type === 'Redeem' ? 'text-red-400' : 'text-gray-400'
                        }">${event.type}</span></td>
                        <td>${this.formatTokenValue(event.wytAmount, this.wytDecimals)}</td>
                        <td>${event.pUSDAmount ? this.formatTokenValue(event.pUSDAmount, this.paymentTokenDecimals) : 'N/A'}</td>
                        <td>
                            <a href="${PLUME_MAINNET.blockExplorerUrls[0]}/tx/${event.txHash}" target="_blank" rel="noopener noreferrer" class="footer-link">
                               View on Explorer
                            </a>
                        </td>
                    </tr>
                    `).join('')}
                </tbody>
                </table>
            `;
            this.elements.txHistoryTable.innerHTML = tableHtml;

        } catch (err) {
            console.error("Could not render transaction history", err);
            this.elements.txHistoryTable.innerHTML = '<p class="text-red-500">Error loading history.</p>';
        }
    },

    exportPDF() {
        // ...
    },

    async handleTransaction(button, transactionCallback) {
        // ...
    },

    setButtonLoading(button, isLoading) {
        // ...
    },

    showNotification(message, type = 'info') {
        // ...
    },

    formatTokenValue(value, decimals) {
        // ...
    }
};

// --- CSS FOR UTILITIES (Spinner and Notifications) ---
const styles = `
// ...
`;
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// --- START THE APP ---
window.addEventListener('DOMContentLoaded', () => App.init());
