// script.js - Final version configured for Plume Mainnet

// --- CONFIGURATION ---
const contractAddress = '0xccF4eaa301058Ec5561a07Cc38A75F47a2912EA5';

const PLUME_MAINNET = {
    chainId: '0x1823a', // Hexadecimal for 98866
    chainName: 'Plume',
    nativeCurrency: { name: 'PLUME', symbol: 'PLUME', decimals: 18 },
    rpcUrls: ['https://rpc.plume.org'],
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
    async checkAndSwitchNetwork() {
        try {
            const currentChainId = await window.ethereum.request({ method: 'eth_chainId' });
            if (currentChainId === PLUME_MAINNET.chainId) { return; }
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: PLUME_MAINNET.chainId }],
            });
        } catch (switchError) {
            if (switchError.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [PLUME_MAINNET],
                    });
                } catch (addError) {
                    throw new Error("Failed to add the Plume network to your wallet.");
                }
            } else {
                throw new Error("Failed to switch to the Plume network.");
            }
        }
    },

    async connectWallet() {
        if (!window.ethereum) {
            return this.showNotification('Please install MetaMask.', 'error');
        }
        try {
            await this.checkAndSwitchNetwork();
            
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
            this.showNotification(err.message || 'Wallet connection failed.', 'error');
        }
    },

    async loadContractData() {
        // ... (The rest of the script is the same as the last final version)
    }
};
// ... (The rest of the script continues)
