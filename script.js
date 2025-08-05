// --- CONFIGURATION ---
const contractAddress = '0xccF4eaa301058Ec5561a07Cc38A75F47a2912EA5';

const PLUME_MAINNET = {
    chainId: '0x18232', // Correct hex for 98866 (actual Plume mainnet)
    chainName: 'Plume',
    nativeCurrency: {
        name: 'PLUME',
        symbol: 'PLUME',
        decimals: 18
    },
    rpcUrls: ['https://rpc.plume.org'], // Official Plume mainnet RPC
    blockExplorerUrls: ['https://explorer.plume.org'],
};

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
    allWorkOrders: [],
    elements: {},

    // --- INITIALIZATION ---
    init() {
        this.cacheDOMElements();
        this.addEventListeners();
        console.log("App initialized.");
        this.checkExistingConnection();
    },

    cacheDOMElements() {
        this.elements = {
            connectButton: document.getElementById('connectButton'),
            totalSupply: document.getElementById('totalSupply'),
            availableTokens: document.getElementById('availableTokens'),
            paymentBalance: document.getElementById('paymentBalance'),
            adminPanel: document.getElementById('adminPanel'),
            workOrderSearchContainer: document.getElementById('workOrderSearchContainer'),
            workOrderResults: document.getElementById('workOrderResults'),
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

        // CORRECTED: Listeners are now attached to the correct, separated containers
        this.elements.workOrderSearchContainer?.addEventListener('input', (e) => this.handleWorkOrderSearch(e));
        this.elements.workOrderResults?.addEventListener('click', (e) => this.handleWorkOrderTabClick(e));

        if (window.ethereum) {
            window.ethereum.on('accountsChanged', (accounts) => {
                if (accounts.length > 0) {
                    this.connectWallet();
                } else {
                    this.disconnectWallet();
                }
            });
            window.ethereum.on('chainChanged', () => window.location.reload());
        }
    },

    async checkExistingConnection() {
        if (!window.ethereum) return;
        try {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length > 0) await this.connectWallet();
        } catch (error) {
            console.log('No existing connection found');
        }
    },

    disconnectWallet() {
        this.userAddress = null;
        this.provider = null;
        this.signer = null;
        this.contract = null;
        if (this.elements.connectButton) {
            this.elements.connectButton.textContent = 'Connect Wallet';
            this.elements.connectButton.disabled = false;
        }
        if (this.elements.adminPanel) this.elements.adminPanel.classList.add('hidden');
    },

    async checkAndSwitchNetwork() {
        if (!window.ethereum) throw new Error("Wallet not found");
        try {
            const currentChainId = await window.ethereum.request({ method: 'eth_chainId' });
            if (currentChainId === PLUME_MAINNET.chainId) return;
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: PLUME_MAINNET.chainId }],
                });
            } catch (switchError) {
                if (switchError.code === 4902) {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [PLUME_MAINNET],
                    });
                } else {
                    throw switchError;
                }
            }
        } catch (error) {
            console.error('Network switch failed:', error);
            this.showNotification('Failed to switch to Plume Network. Please do it manually.', 'error');
            throw error;
        }
    },

    async connectWallet() {
        if (!window.ethereum) return this.showNotification('Please install a Web3 wallet.', 'error');
        try {
            this.showNotification('Connecting wallet...', 'info');
            await this.checkAndSwitchNetwork();
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            if (accounts.length === 0) throw new Error('No accounts found.');
            this.provider = new ethers.providers.Web3Provider(window.ethereum);
            this.signer = this.provider.getSigner();
            this.userAddress = await this.signer.getAddress();
            this.contract = new ethers.Contract(contractAddress, contractABI, this.signer);
            const shortAddress = `${this.userAddress.slice(0, 6)}...${this.userAddress.slice(-4)}`;
            this.elements.connectButton.textContent = `Connected: ${shortAddress}`;
            this.elements.connectButton.disabled = true;
            this.showNotification('Wallet connected!', 'success');
            await this.loadContractData();
            this.switchTab('buy');
        } catch (err) {
            console.error('Connection Error:', err);
            this.showNotification(err.message || 'Connection failed.', 'error');
            this.disconnectWallet();
        }
    },

    async loadContractData() {
        try {
            this.showNotification('Loading contract data...', 'info');
            await this.contract.name();
            const paymentTokenAddress = await this.contract.paymentToken();
            const paymentTokenContract = new ethers.Contract(paymentTokenAddress, tokenABI, this.provider);
            const [wytDecimals, paymentDecimals, totalSupply, available, paymentBalance, owner, userWytBalance, userPusdBalance, collectedFees] = await Promise.all([
                this.contract.decimals(),
                paymentTokenContract.decimals(),
                this.contract.totalSupply(),
                this.contract.availableTokens(),
                this.contract.contractPaymentTokenBalance(),
                this.contract.owner(),
                this.contract.balanceOf(this.userAddress),
                paymentTokenContract.balanceOf(this.userAddress),
                this.contract.collectedFees()
            ]);
            this.wytDecimals = wytDecimals;
            this.paymentTokenDecimals = paymentDecimals;
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
            this.renderSearchBar();
            await this.renderWorkOrders();
            await this.renderTransactionHistory();
            this.updateReceiveAmount();
            this.showNotification('Contract data loaded.', 'success');
        } catch (error) {
            console.error("Error loading contract data:", error);
            this.showNotification('Failed to load contract data.', 'error');
        }
    },
    
    // All other functions from getPaymentTokenContract() down to formatTokenValue() remain.
    // To save space, they are omitted here but should be in your final file.
    // The key changes are in the Work Order rendering section below.

    // --- WORK ORDER RENDERING & UTILITIES ---

    renderSearchBar() {
        if (!this.elements.workOrderSearchContainer) return;
        this.elements.workOrderSearchContainer.innerHTML = `
            <div class="wo-search-container">
                <input type="text" id="workOrderSearchInput" placeholder="Search by ID or Description...">
            </div>`;
    },

    async renderWorkOrders() {
        if (!this.elements.workOrderResults) return;
        this.elements.workOrderResults.innerHTML = '<p>Loading work orders...</p>';
        try {
            const nextId = await this.contract.nextWorkOrderId();
            const promises = [];
            for (let i = 1; i < nextId; i++) promises.push(this.contract.workOrders(i));
            this.allWorkOrders = (await Promise.all(promises)).filter(wo => wo.id > 0);
            this.displayWorkOrders(this.allWorkOrders);
        } catch (err) {
            console.error("Could not render work orders", err);
            this.elements.workOrderResults.innerHTML = '<p class="text-red-500">Error loading work orders.</p>';
        }
    },

    displayWorkOrders(orders, isSearchResult = false) {
        if (!this.elements.workOrderResults) return;
        if (orders.length === 0) {
            this.elements.workOrderResults.innerHTML = `<p>${isSearchResult ? 'No matching work order found.' : 'No work orders found.'}</p>`;
            return;
        }
        if (isSearchResult) {
            const tableHtml = `
                <table>
                    <thead><tr><th>ID</th><th>Gross Yield</th><th>Reserve</th><th>Issued</th><th>Active</th><th>Paid</th><th>Description</th><th>Created</th></tr></thead>
                    <tbody>${orders.map(wo => `<tr><td>${wo.id}</td><td>${this.formatTokenValue(wo.grossYield, this.paymentTokenDecimals)}</td><td>${this.formatTokenValue(wo.reserveAmount, this.paymentTokenDecimals)}</td><td>${this.formatTokenValue(wo.tokensIssued, this.wytDecimals)}</td><td>${wo.isActive ? '✅' : '❌'}</td><td>${wo.isPaid ? '✅' : '❌'}</td><td>${wo.description}</td><td>${new Date(wo.createdAt * 1000).toLocaleDateString()}</td></tr>`).join('')}</tbody>
                </table>`;
            this.elements.workOrderResults.innerHTML = tableHtml;
            return;
        }
        const groupedOrders = orders.reduce((acc, wo) => {
            const date = new Date(wo.createdAt * 1000);
            const key = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;
            if (!acc[key]) acc[key] = [];
            acc[key].push(wo);
            return acc;
        }, {});
        const sortedMonths = Object.keys(groupedOrders).sort().reverse();
        const tabsHtml = sortedMonths.map((monthKey, index) => {
            const [year, monthNum] = monthKey.split('-');
            const monthName = new Date(year, monthNum - 1).toLocaleString('default', { month: 'long', year: 'numeric' });
            return `<button class="wo-tab-btn ${index === 0 ? 'active' : ''}" data-month="${monthKey}">${monthName}</button>`;
        }).join('');
        const contentHtml = sortedMonths.map((monthKey, index) => {
            const ordersForMonth = groupedOrders[monthKey];
            const tableHeader = `<thead><tr><th>ID</th><th>Gross Yield</th><th>Reserve</th><th>Issued</th><th>Active</th><th>Paid</th><th>Description</th><th>Created</th></tr></thead>`;
            const tableBody = `<tbody>${ordersForMonth.map(wo => `<tr><td>${wo.id}</td><td>${this.formatTokenValue(wo.grossYield, this.paymentTokenDecimals)}</td><td>${this.formatTokenValue(wo.reserveAmount, this.paymentTokenDecimals)}</td><td>${this.formatTokenValue(wo.tokensIssued, this.wytDecimals)}</td><td>${wo.isActive ? '✅' : '❌'}</td><td>${wo.isPaid ? '✅' : '❌'}</td><td>${wo.description}</td><td>${new Date(wo.createdAt * 1000).toLocaleDateString()}</td></tr>`).join('')}</tbody>`;
            return `<div id="wo-content-${monthKey}" class="wo-content-panel ${index > 0 ? 'hidden' : ''}"><table>${tableHeader}${tableBody}</table></div>`;
        }).join('');
        this.elements.workOrderResults.innerHTML = `<div class="wo-tabs">${tabsHtml}</div><div class="wo-content">${contentHtml}</div>`;
    },
    
    handleWorkOrderTabClick(event) {
        const tabButton = event.target.closest('.wo-tab-btn');
        if (!tabButton) return;
        this.elements.workOrderResults.querySelectorAll('.wo-tab-btn').forEach(btn => btn.classList.remove('active'));
        this.elements.workOrderResults.querySelectorAll('.wo-content-panel').forEach(panel => panel.classList.add('hidden'));
        tabButton.classList.add('active');
        const monthKey = tabButton.dataset.month;
        const contentPanel = document.getElementById(`wo-content-${monthKey}`);
        if (contentPanel) contentPanel.classList.remove('hidden');
    },
    
    handleWorkOrderSearch(event) {
        if (event.target.id !== 'workOrderSearchInput') return;
        const cleanedSearchTerm = event.target.value.trim().toLowerCase();
        if (!cleanedSearchTerm) {
            this.displayWorkOrders(this.allWorkOrders);
        } else {
            const filteredOrders = this.allWorkOrders.filter(wo => {
                const workOrderId = wo.id.toString();
                const workOrderDesc = wo.description.toLowerCase();
                return workOrderId === cleanedSearchTerm || workOrderDesc.includes(cleanedSearchTerm);
            });
            this.displayWorkOrders(filteredOrders, true);
        }
    },

    async renderTransactionHistory() {
        // ... (This function remains unchanged)
    },
    exportPDF() {
        // ... (This function remains unchanged)
    },
    async handleTransaction(button, transactionCallback) {
        // ... (This function remains unchanged)
    },
    setButtonLoading(button, isLoading) {
        // ... (This function remains unchanged)
    },
    showNotification(message, type = 'info') {
        // ... (This function remains unchanged)
    },
    formatTokenValue(value, decimals) {
        // ... (This function remains unchanged)
    }
};

// --- CSS INJECTION ---
const styles = `
    .notification { position: fixed; top: 20px; right: 20px; padding: 12px 20px; border-radius: 8px; color: white; font-weight: 500; z-index: 1000; max-width: 300px; word-wrap: break-word; animation: slideIn 0.3s ease-out; }
    .notification-success { background-color: #10b981; } .notification-error { background-color: #ef4444; } .notification-info { background-color: #3b82f6; } .notification-warning { background-color: #f59e0b; }
    @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
    .spinner { display: inline-block; width: 12px; height: 12px; border: 2px solid #ffffff30; border-top: 2px solid #ffffff; border-radius: 50%; animation: spin 1s linear infinite; margin-right: 8px; }
    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    .hidden { display: none !important; }
    .wo-search-container { margin-bottom: 1rem; }
    #workOrderSearchInput { width: 100%; padding: 0.5rem 0.75rem; background-color: #2d3748; border: 1px solid #4a5568; border-radius: 0.375rem; color: white; }
    #workOrderSearchInput::placeholder { color: #a0aec0; }
    .wo-tabs { display: flex; flex-wrap: wrap; border-bottom: 2px solid #4a5568; margin-bottom: 1rem; }
    .wo-tab-btn { padding: 0.5rem 1rem; border: none; background-color: transparent; color: #a0aec0; cursor: pointer; font-weight: 600; border-bottom: 2px solid transparent; transform: translateY(2px); transition: all 0.2s ease-in-out; }
    .wo-tab-btn:hover { color: #cbd5e0; }
    .wo-tab-btn.active { color: #ffffff; border-bottom-color: #3b82f6; }
    .wo-content-panel.hidden { display: none !important; }
`;
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// --- START THE APP ---
window.addEventListener('DOMContentLoaded', () => App.init());
