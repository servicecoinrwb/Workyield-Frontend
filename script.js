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
    allWorkOrders: [], // <-- MODIFICATION: Added to store all work orders
    elements: {},

    // --- INITIALIZATION ---
    init() {
        this.cacheDOMElements();
        this.addEventListeners();
        console.log("App initialized.");

        // Check if already connected on page load
        this.checkExistingConnection();
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

        // <-- MODIFICATION: Added event listeners for tab clicks and search input
        this.elements.workOrderTable?.addEventListener('click', (e) => this.handleWorkOrderTabClick(e));
        this.elements.workOrderTable?.addEventListener('input', (e) => this.handleWorkOrderSearch(e));

        if (window.ethereum) {
            window.ethereum.on('accountsChanged', (accounts) => {
                if (accounts.length > 0) {
                    this.connectWallet();
                } else {
                    this.disconnectWallet();
                }
            });

            window.ethereum.on('chainChanged', (chainId) => {
                // Reload the page when network changes
                window.location.reload();
            });
        }
    },

    // Check if wallet is already connected
    async checkExistingConnection() {
        if (!window.ethereum) return;

        try {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length > 0) {
                await this.connectWallet();
            }
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

        if (this.elements.adminPanel) {
            this.elements.adminPanel.classList.add('hidden');
        }
    },

    // --- WEB3 INTERACTIONS ---
    async checkAndSwitchNetwork() {
        try {
            const currentChainId = await window.ethereum.request({ method: 'eth_chainId' });
            console.log('Current chain ID:', currentChainId);
            console.log('Expected chain ID:', PLUME_MAINNET.chainId);

            if (currentChainId === PLUME_MAINNET.chainId) {
                console.log('Already on Plume mainnet');
                return;
            }

            console.log('Attempting to switch to Plume mainnet...');

            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: PLUME_MAINNET.chainId }],
                });
                console.log('Successfully switched to Plume mainnet');
            } catch (switchError) {
                console.log('Switch error:', switchError);

                // This error code indicates that the chain has not been added to MetaMask
                if (switchError.code === 4902) {
                    console.log('Adding Plume mainnet to wallet...');
                    try {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [PLUME_MAINNET],
                        });
                        console.log('Successfully added Plume mainnet');
                    } catch (addError) {
                        console.error('Failed to add network:', addError);
                        throw new Error("Failed to add the Plume network to your wallet. Please add it manually using these details:\n\nNetwork Name: Plume\nRPC URL: https://rpc.plume.org\nChain ID: 98866\nCurrency Symbol: PLUME\nBlock Explorer: https://explorer.plume.org");
                    }
                } else if (switchError.code === 4001) {
                    // User rejected the request
                    throw new Error("Network switch was rejected. Please manually switch to Plume network in your wallet.");
                } else {
                    console.error('Network switch error:', switchError);

                    // For any other error, provide manual instructions instead of failing
                    this.showNotification('Please manually switch to Plume network in your wallet.', 'warning');

                    // Instead of throwing, let's continue and see if the connection works anyway
                    const retryChainId = await window.ethereum.request({ method: 'eth_chainId' });
                    if (retryChainId !== PLUME_MAINNET.chainId) {
                        throw new Error("Please manually switch to Plume network in your wallet.\n\nNetwork Name: Plume\nRPC URL: https://rpc.plume.org\nChain ID: 98866\nCurrency Symbol: PLUME\nBlock Explorer: https://explorer.plume.org");
                    }
                }
            }
        } catch (error) {
            console.error('Network check/switch error:', error);
            throw error;
        }
    },

    async connectWallet() {
        if (!window.ethereum) {
            return this.showNotification('Please install MetaMask or another Web3 wallet.', 'error');
        }

        try {
            this.showNotification('Connecting wallet...', 'info');

            await this.checkAndSwitchNetwork();

            this.provider = new ethers.providers.Web3Provider(window.ethereum);
            const accounts = await this.provider.send("eth_requestAccounts", []);

            if (accounts.length === 0) {
                throw new Error('No accounts found. Please unlock your wallet.');
            }

            this.signer = this.provider.getSigner();
            this.userAddress = accounts[0];

            // Verify we can get the address from signer
            const signerAddress = await this.signer.getAddress();
            console.log('Connected address:', signerAddress);

            this.contract = new ethers.Contract(contractAddress, contractABI, this.signer);

            const shortAddress = `${this.userAddress.slice(0, 6)}...${this.userAddress.slice(-4)}`;
            this.elements.connectButton.textContent = `Connected: ${shortAddress}`;
            this.elements.connectButton.disabled = true;

            this.showNotification('Wallet connected successfully!', 'success');
            await this.loadContractData();
            this.switchTab('buy');
        } catch (err) {
            console.error('Wallet connection error:', err);
            this.showNotification(err.message || 'Wallet connection failed.', 'error');
            this.disconnectWallet();
        }
    },

    async loadContractData() {
        try {
            this.showNotification('Loading contract data...', 'info');

            // Test contract connection first
            try {
                await this.contract.name();
            } catch (contractError) {
                console.error('Contract connection error:', contractError);
                throw new Error('Failed to connect to contract. Please verify the contract address and network.');
            }

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

            this.showNotification('Contract data loaded successfully!', 'success');
        } catch (error) {
            console.error("Error loading contract data:", error);
            this.showNotification('Failed to load contract data: ' + error.message, 'error');
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
            this.elements.mintAmountInput.value = '';
            this.elements.mintDescriptionInput.value = '';
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
            // Fixed method name
            const tx = await this.contract.fundWorkOrder(id, parsedAmount);
            await tx.wait();
            this.elements.fundIdInput.value = '';
            this.elements.fundAmountInput.value = '';
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
            this.elements.feeInput.value = '';
            return 'Redemption fee updated!';
        });
    },

    async cancelWorkOrder() {
        await this.handleTransaction(this.elements.cancelButton, async () => {
            const id = parseInt(this.elements.cancelIdInput.value);
            if (isNaN(id) || id <= 0) throw new Error("Please enter a valid Work Order ID.");
            const tx = await this.contract.cancelWorkOrder(id);
            await tx.wait();
            this.elements.cancelIdInput.value = '';
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

    // <-- MODIFICATION: Replaced original renderWorkOrders with this simplified one
    async renderWorkOrders() {
        this.elements.workOrderTable.innerHTML = '<p>Loading work orders...</p>';
        try {
            const nextId = await this.contract.nextWorkOrderId();
            const promises = [];
            for (let i = 1; i < nextId; i++) {
                promises.push(this.contract.workOrders(i));
            }
            // Store the full list of orders in our App state
            this.allWorkOrders = (await Promise.all(promises)).filter(wo => wo.id > 0);
    
            // Call the new display function with the full list
            this.displayWorkOrders(this.allWorkOrders);
    
        } catch (err) {
            console.error("Could not render work orders", err);
            this.elements.workOrderTable.innerHTML = '<p class="text-red-500">Error loading work orders.</p>';
        }
    },
    
    // <-- MODIFICATION: Added new displayWorkOrders function
    displayWorkOrders(orders, isSearchResult = false) {
    // MODIFICATION: Changed input type to "text" and updated placeholder
    let searchHtml = `
        <div class="wo-search-container">
            <input type="text" id="workOrderSearchInput" placeholder="Search by ID or Description...">
        </div>
    `;

    if (orders.length === 0) {
        const message = isSearchResult ? 'No matching work order found.' : 'No work orders found.';
        this.elements.workOrderTable.innerHTML = searchHtml + `<p>${message}</p>`;
        return;
    }

    // If it's a search result, display a simple table without tabs
    if (isSearchResult) {
        const tableHtml = `
            <table>
                <thead>
                    <tr>
                        <th>ID</th><th>Gross Yield</th><th>Reserve</th><th>Issued</th>
                        <th>Active</th><th>Paid</th><th>Description</th><th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    ${orders.map(wo => `
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
            </table>`;
        // Set the table HTML and ensure the user's search term remains in the box
        this.elements.workOrderTable.innerHTML = searchHtml + tableHtml;
        const searchInput = document.getElementById('workOrderSearchInput');
        if (searchInput && orders.length > 0) {
             // We keep the focus and what the user typed, no need to pre-fill anymore.
        }
        return;
    }

    // --- Default Tabbed View ---
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
        const tableBody = `<tbody>${ordersForMonth.map(wo => `
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
        `).join('')}</tbody>`;
        return `<div id="wo-content-${monthKey}" class="wo-content-panel ${index > 0 ? 'hidden' : ''}"><table>${tableHeader}${tableBody}</table></div>`;
    }).join('');

    this.elements.workOrderTable.innerHTML = `
        ${searchHtml}
        <div class="wo-tabs">${tabsHtml}</div>
        <div class="wo-content">${contentHtml}</div>
    `;
},

    // <-- MODIFICATION: Added new handleWorkOrderTabClick function
    handleWorkOrderTabClick(event) {
        const tabButton = event.target.closest('.wo-tab-btn');
        if (!tabButton) return;
        this.elements.workOrderTable.querySelectorAll('.wo-tab-btn').forEach(btn => btn.classList.remove('active'));
        this.elements.workOrderTable.querySelectorAll('.wo-content-panel').forEach(panel => panel.classList.add('hidden'));
        tabButton.classList.add('active');
        const monthKey = tabButton.dataset.month;
        const contentPanel = document.getElementById(`wo-content-${monthKey}`);
        if (contentPanel) {
            contentPanel.classList.remove('hidden');
        }
    },
    
    // <-- MODIFICATION: Added new handleWorkOrderSearch function
    handleWorkOrderSearch(event) {
    if (event.target.id !== 'workOrderSearchInput') return;

    // Get the search term and clean it for case-insensitive matching
    const cleanedSearchTerm = event.target.value.trim().toLowerCase();

    if (!cleanedSearchTerm) {
        // If search is cleared, display all orders in the default tabbed view
        this.displayWorkOrders(this.allWorkOrders);
    } else {
        // MODIFICATION: Updated filter logic to check both ID and description
        const filteredOrders = this.allWorkOrders.filter(wo => {
            const workOrderId = wo.id.toString();
            const workOrderDesc = wo.description.toLowerCase();

            // Return true if the ID is an exact match OR if the description includes the search term
            return workOrderId === cleanedSearchTerm || workOrderDesc.includes(cleanedSearchTerm);
        });

        // Display the filtered results, marking it as a search result
        this.displayWorkOrders(filteredOrders, true);
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
        if (typeof jspdf === 'undefined' || typeof jspdf.plugin.autotable === 'undefined') {
            return this.showNotification('PDF library is not available.', 'error');
        }
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
    
        const tableElement = this.elements.workOrderTable.querySelector('table');
        if (!tableElement) {
            return this.showNotification('No work order table to export.', 'info');
        }
    
        doc.autoTable({
            html: tableElement,
            startY: 20,
            theme: 'grid',
            headStyles: { fillColor: [22, 160, 133] },
        });
    
        doc.text("Work Yield - Work Order Report", 14, 15);
        doc.save('work-yield-orders.pdf');
    },

    async handleTransaction(button, transactionCallback) {
        if (!this.userAddress) {
            this.showNotification('Please connect your wallet first.', 'error');
            return;
        }

        this.setButtonLoading(button, true);
        try {
            const result = await transactionCallback();
            this.showNotification(result, 'success');
            await this.loadContractData(); // Refresh data after transaction
        } catch (error) {
            console.error('Transaction error:', error);
            let errorMessage = 'Transaction failed.';
            
            if (error.code === 4001) {
                errorMessage = 'Transaction rejected by user.';
            } else if (error.data && error.data.message) {
                errorMessage = error.data.message;
            } else if (error.message) {
                errorMessage = error.message;
            }
            
            this.showNotification(errorMessage, 'error');
        } finally {
            this.setButtonLoading(button, false);
        }
    },

    setButtonLoading(button, isLoading) {
        if (!button) return;

        if (isLoading) {
            button.disabled = true;
            button.dataset.originalText = button.textContent;
            button.innerHTML = '<span class="spinner"></span> Processing...';
        } else {
            button.disabled = false;
            button.textContent = button.dataset.originalText || button.textContent;
        }
    },

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        // Add to page
        document.body.appendChild(notification);

        // Remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 5000);

        console.log(`[${type.toUpperCase()}] ${message}`);
    },

    formatTokenValue(value, decimals) {
        try {
            const formatted = ethers.utils.formatUnits(value, decimals);
            const number = parseFloat(formatted);
            return number.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 4
            });
        } catch (error) {
            console.error('Error formatting token value:', error);
            return '0.00';
        }
    }
};

// --- CSS FOR UTILITIES (Spinner and Notifications) ---
// <-- MODIFICATION: Added new CSS for tabs and search
const styles = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        max-width: 300px;
        word-wrap: break-word;
        animation: slideIn 0.3s ease-out;
    }
    
    .notification-success { background-color: #10b981; }
    .notification-error { background-color: #ef4444; }
    .notification-info { background-color: #3b82f6; }
    .notification-warning { background-color: #f59e0b; }
    
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .spinner {
        display: inline-block;
        width: 12px;
        height: 12px;
        border: 2px solid #ffffff30;
        border-top: 2px solid #ffffff;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-right: 8px;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .hidden { display: none !important; }

    /* --- Work Order Tabs & Search --- */
    .wo-search-container {
        margin-bottom: 1rem;
    }

    #workOrderSearchInput {
        width: 100%;
        padding: 0.5rem 0.75rem;
        background-color: #2d3748; /* Corresponds to Tailwind's gray-800 */
        border: 1px solid #4a5568;  /* Corresponds to Tailwind's gray-700 */
        border-radius: 0.375rem; /* Corresponds to Tailwind's rounded-md */
        color: white;
    }

    #workOrderSearchInput::placeholder {
        color: #a0aec0; /* Corresponds to Tailwind's gray-500 */
    }

    .wo-tabs {
        display: flex;
        flex-wrap: wrap;
        border-bottom: 2px solid #4a5568; /* gray-700 */
        margin-bottom: 1rem;
    }

    .wo-tab-btn {
        padding: 0.5rem 1rem;
        border: none;
        background-color: transparent;
        color: #a0aec0; /* gray-500 */
        cursor: pointer;
        font-weight: 600;
        border-bottom: 2px solid transparent;
        transform: translateY(2px);
        transition: all 0.2s ease-in-out;
    }

    .wo-tab-btn:hover {
        color: #cbd5e0; /* gray-400 */
    }

    .wo-tab-btn.active {
        color: #ffffff;
        border-bottom-color: #3b82f6; /* blue-500 */
    }

    .wo-content-panel.hidden {
        display: none !important;
    }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// --- START THE APP ---
window.addEventListener('DOMContentLoaded', () => App.init());
