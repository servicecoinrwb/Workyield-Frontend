// --- CONFIGURATION ---
const contractAddress = '0xccF4eaa301058Ec5561a07Cc38A75F47a2912EA5';

const PLUME_MAINNET = {
    chainId: '0x18232',
    chainName: 'Plume',
    nativeCurrency: { name: 'PLUME', symbol: 'PLUME', decimals: 18 },
    rpcUrls: ['https://rpc.plume.org'],
    blockExplorerUrls: ['https://explorer.plume.org'],
};

const tokenABI = [ "function approve(address spender, uint256 amount) returns (bool)", "function allowance(address owner, address spender) view returns (uint256)", "function balanceOf(address account) view returns (uint256)", "function totalSupply() view returns (uint256)", "function decimals() view returns (uint8)" ];
const contractABI = [{"inputs":[{"internalType":"address","name":"initialOwner","type":"address"},{"internalType":"address","name":"paymentTokenAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"workOrderId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"OrderFunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newFeePercentage","type":"uint256"}],"name":"RedemptionFeeSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReserveFunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"holder","type":"address"},{"indexed":false,"internalType":"uint256","name":"wytAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pUSDAmount","type":"uint256"}],"name":"TokensRedeemed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"workOrderId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"yieldAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIssued","type":"uint256"}],"name":"WorkOrderMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"workOrderId","type":"uint256"},{"indexed":true,"internalType":"address","name":"payer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WorkOrderPaid","type":"event"},{"inputs":[],"name":"RESERVE_PERCENTAGE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"availableTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"pUSDAmount","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"workOrderId","type":"uint256"}],"name":"cancelWorkOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"collectedFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractPaymentTokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"grossYield","type":"uint256"},{"internalType":"string","name":"description","type":"string"}],"name":"mintFromWorkOrder","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextWorkOrderId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paymentToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"workOrderId","type":"uint256"},{"internalType":"uint256","name":"payoutAmount","type":"uint256"}],"name":"payoutWorkOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"wytAmount","type":"uint256"}],"name":"redeemTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"redemptionFeePercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newFeePercentage","type":"uint256"}],"name":"setRedemptionFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReserveFund","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"workOrders","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"grossYield","type":"uint256"},{"internalType":"uint256","name":"reserveAmount","type":"uint256"},{"internalType":"uint256","name":"tokensIssued","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"bool","name":"isPaid","type":"bool"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"createdAt","type":"uint256"}],"stateMutability":"view","type":"function"}];

const App = {
    provider: null, 
    signer: null, 
    contract: null, 
    userAddress: null, 
    wytDecimals: 18, 
    paymentTokenDecimals: 18, 
    allWorkOrders: [], 
    elements: {},

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
        this.elements.workOrderSearchContainer?.addEventListener('input', (e) => this.handleWorkOrderSearch(e));
        this.elements.workOrderResults?.addEventListener('click', (e) => this.handleWorkOrderTabClick(e));
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', () => this.connectWallet());
            window.ethereum.on('chainChanged', () => window.location.reload());
        }
    },

    async checkExistingConnection() { 
        if (window.ethereum) { 
            try { 
                const accounts = await window.ethereum.request({ method: 'eth_accounts' }); 
                if (accounts.length > 0) await this.connectWallet(); 
            } catch (error) { 
                console.log('No existing connection found'); 
            } 
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
                this.contract.decimals(), paymentTokenContract.decimals(), this.contract.totalSupply(), this.contract.availableTokens(), this.contract.contractPaymentTokenBalance(), this.contract.owner(), this.contract.balanceOf(this.userAddress), paymentTokenContract.balanceOf(this.userAddress), this.contract.collectedFees() 
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
            this.showNotification('Failed to load contract data.', 'error'); 
        } 
    },

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
                this.showNotification('Approving spend...', 'info'); 
                const approveTx = await paymentToken.approve(contractAddress, parsedAmount); 
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
        this.elements.receiveAmount.textContent = receiveAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 }); 
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
            this.showNotification('Approving payout... please wait.', 'info'); 
            const approveTx = await paymentToken.approve(contractAddress, parsedAmount); 
            await approveTx.wait(); 
            this.showNotification('Approval successful! Submitting payout...', 'info'); 
            const tx = await this.contract.payoutWorkOrder(id, parsedAmount); 
            await tx.wait(); 
            this.elements.payoutOrderIdInput.value = ''; 
            this.elements.payoutAmountInput.value = ''; 
            return 'Work order payout successful!'; 
        }); 
    },

    renderSearchBar() { 
        if (!this.elements.workOrderSearchContainer) return; 
        this.elements.workOrderSearchContainer.innerHTML = `<div class="wo-search-container"><input type="text" id="workOrderSearchInput" placeholder="Search by ID or Description..."></div>`; 
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
            const tableHtml = `<table><thead><tr><th>ID</th><th>Gross Yield</th><th>Reserve</th><th>Issued</th><th>Active</th><th>Paid</th><th>Description</th><th>Created</th></tr></thead><tbody>${orders.map(wo => `<tr><td>${wo.id}</td><td>${this.formatTokenValue(wo.grossYield, this.paymentTokenDecimals)}</td><td>${this.formatTokenValue(wo.reserveAmount, this.paymentTokenDecimals)}</td><td>${this.formatTokenValue(wo.tokensIssued, this.wytDecimals)}</td><td>${wo.isActive ? '✅' : '❌'}</td><td>${wo.isPaid ? '✅' : '❌'}</td><td>${wo.description}</td><td>${new Date(wo.createdAt * 1000).toLocaleDateString()}</td></tr>`).join('')}</tbody></table>`; 
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
    this.elements.txHistoryTable.innerHTML = '<p>Loading history...</p>';
    try {
        // Get payment token contract
        const paymentTokenAddress = await this.contract.paymentToken();
        const paymentTokenContract = new ethers.Contract(paymentTokenAddress, tokenABI, this.provider);

        // Get different event filters
        const buyFilter = this.contract.filters.Transfer(this.contract.address, this.userAddress);
        const redeemFilter = this.contract.filters.TokensRedeemed(this.userAddress);
        const burnFilter = this.contract.filters.Transfer(this.userAddress, "0x0000000000000000000000000000000000000000");
        
        // Get approval events to find pUSD amounts for purchases
        const approvalFilter = paymentTokenContract.filters.Approval(this.userAddress, this.contract.address);

        const [buyEvents, redeemEvents, burnEvents, approvalEvents] = await Promise.all([
            this.contract.queryFilter(buyFilter, 0, 'latest'),
            this.contract.queryFilter(redeemFilter, 0, 'latest'),
            this.contract.queryFilter(burnFilter, 0, 'latest'),
            paymentTokenContract.queryFilter(approvalFilter, 0, 'latest')
        ]);

        let allEvents = [];

        // Process buy events and match with approval amounts
        for (const event of buyEvents) {
            // Find corresponding approval event around the same time
            const correspondingApproval = approvalEvents.find(approval => 
                Math.abs(approval.blockNumber - event.blockNumber) <= 2 // Within 2 blocks
            );

            allEvents.push({
                type: 'Buy',
                wytAmount: event.args.value,
                pUSDAmount: correspondingApproval ? correspondingApproval.args.value : null,
                blockNumber: event.blockNumber,
                txHash: event.transactionHash
            });
        }

        // Process redeem events (these already have pUSD amounts)
        redeemEvents.forEach(event => allEvents.push({
            type: 'Redeem',
            wytAmount: event.args.wytAmount,
            pUSDAmount: event.args.pUSDAmount,
            blockNumber: event.blockNumber,
            txHash: event.transactionHash
        }));

        // Process burn events
        burnEvents.forEach(event => allEvents.push({
            type: 'Burn',
            wytAmount: event.args.value,
            pUSDAmount: ethers.BigNumber.from(0),
            blockNumber: event.blockNumber,
            txHash: event.transactionHash
        }));

        // Sort by block number (newest first)
        allEvents.sort((a, b) => b.blockNumber - a.blockNumber);

        if (allEvents.length === 0) {
            this.elements.txHistoryTable.innerHTML = '<p>No transaction history found.</p>';
            return;
        }

        const tableHtml = `<table>
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
                        <td>
                            <span class="font-semibold ${event.type === 'Buy' ? 'text-green-400' : event.type === 'Redeem' ? 'text-red-400' : 'text-gray-400'}">
                                ${event.type}
                            </span>
                        </td>
                        <td>${this.formatTokenValue(event.wytAmount, this.wytDecimals)}</td>
                        <td>
                            ${event.pUSDAmount && !event.pUSDAmount.isZero() 
                                ? this.formatTokenValue(event.pUSDAmount, this.paymentTokenDecimals) 
                                : event.type === 'Burn' ? '0.00' : 'N/A'
                            }
                        </td>
                        <td>
                            <a href="${PLUME_MAINNET.blockExplorerUrls[0]}/tx/${event.txHash}" 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               class="footer-link">
                                View on Explorer
                            </a>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>`;

        this.elements.txHistoryTable.innerHTML = tableHtml;

    } catch (err) {
        console.error('Transaction history error:', err);
        this.elements.txHistoryTable.innerHTML = '<p class="text-red-500">Error loading history.</p>';
    }
}
    
    exportPDF() {
        const button = this.elements.exportPdfButton;
        this.setButtonLoading(button, true);

        // Add print styles if they don't exist
        if (!document.getElementById('printStyles')) {
            const printStyles = document.createElement('style');
            printStyles.id = 'printStyles';
            printStyles.innerHTML = `
                @media print {
                    body * { visibility: hidden; }
                    #workOrders, #workOrders * { visibility: visible; }
                    #workOrders { position: absolute; left: 0; top: 0; width: 100%; }
                    table { border-collapse: collapse; width: 100%; }
                    th, td { border: 1px solid #000; padding: 8px; text-align: left; font-size: 12px; }
                    th { background-color: #f0f0f0; font-weight: bold; }
                    .wo-tab-btn, .no-print { display: none !important; }
                }
            `;
            document.head.appendChild(printStyles);
        }

        setTimeout(() => {
            try {
                window.print();
                this.showNotification('Print dialog opened! Choose "Save as PDF"', 'info');
            } catch (error) {
                this.showNotification('Failed to open print dialog', 'error');
            } finally {
                this.setButtonLoading(button, false);
            }
        }, 300);
    },

    async handleTransaction(button, transactionCallback) { 
        if (!this.userAddress) return this.showNotification('Please connect your wallet first.', 'error'); 
        this.setButtonLoading(button, true); 
        try { 
            const result = await transactionCallback(); 
            this.showNotification(result, 'success'); 
            await this.loadContractData(); 
        } catch (error) { 
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
            button.textContent = button.dataset.originalText || 'Submit'; 
        } 
    },

    showNotification(message, type = 'info') { 
        const notification = document.createElement('div'); 
        notification.className = `notification notification-${type}`; 
        notification.textContent = message; 
        document.body.appendChild(notification); 
        setTimeout(() => { 
            if (notification.parentNode) { 
                notification.parentNode.removeChild(notification); 
            } 
        }, 5000); 
    },

    formatTokenValue(value, decimals) { 
        try { 
            const formatted = ethers.utils.formatUnits(value, decimals); 
            const number = parseFloat(formatted); 
            return number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 }); 
        } catch (error) { 
            return '0.00'; 
        } 
    }
};

const styles = `
    .notification { position: fixed; top: 20px; right: 20px; padding: 12px 20px; border-radius: 8px; color: white; font-weight: 500; z-index: 1000; max-width: 300px; word-wrap: break-word; animation: slideIn 0.3s ease-out; }
    .notification-success { background-color: #10b981; } 
    .notification-error { background-color: #ef4444; } 
    .notification-info { background-color: #3b82f6; } 
    .notification-warning { background-color: #f59e0b; }
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

// Use window.onload to ensure all external scripts are loaded before starting the app
window.addEventListener('load', () => App.init());
