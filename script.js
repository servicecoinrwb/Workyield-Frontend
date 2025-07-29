// script.js - Updated with full admin functions and correct ABI

const contractAddress = '0x97500Ac1B27931b0a36fe4713B6Af455F5308545';
const contractABI = [
  {"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"availableTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"contractPaymentTokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"nextWorkOrderId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"workOrders","outputs":[
    {"internalType":"uint256","name":"id","type":"uint256"},
    {"internalType":"uint256","name":"grossYield","type":"uint256"},
    {"internalType":"uint256","name":"reserveAmount","type":"uint256"},
    {"internalType":"uint256","name":"tokensIssued","type":"uint256"},
    {"internalType":"bool","name":"isActive","type":"bool"},
    {"internalType":"bool","name":"isPaid","type":"bool"},
    {"internalType":"string","name":"description","type":"string"},
    {"internalType":"uint256","name":"createdAt","type":"uint256"}
  ],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"paymentToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"redeemTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"workOrderId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"fundFromWorkOrderPayment","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"grossYield","type":"uint256"},{"internalType":"string","name":"description","type":"string"}],"name":"mintFromWorkOrder","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"workOrderId","type":"uint256"}],"name":"cancelWorkOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"withdrawFees","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"newFeePercentage","type":"uint256"}],"name":"setRedemptionFee","outputs":[],"stateMutability":"nonpayable","type":"function"}
];

let provider, signer, contract, userAddress;

window.addEventListener('DOMContentLoaded', () => {
  const connectBtn = document.getElementById('connectButton');
  if (connectBtn) connectBtn.addEventListener('click', connectWallet);
});

async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      provider = new ethers.providers.Web3Provider(window.ethereum);
      signer = provider.getSigner();
      userAddress = accounts[0];
      contract = new ethers.Contract(contractAddress, contractABI, signer);

      document.getElementById('connectButton').textContent = 'Connected';
      loadContractData();
    } catch (err) {
      alert('Wallet connection failed');
    }
  } else {
    alert('Please install MetaMask.');
  }
}

async function loadContractData() {
  const totalSupply = await contract.totalSupply();
  const available = await contract.availableTokens();
  const paymentBalance = await contract.contractPaymentTokenBalance();

  document.getElementById('totalSupply').textContent = ethers.utils.formatUnits(totalSupply);
  document.getElementById('availableTokens').textContent = ethers.utils.formatUnits(available);
  document.getElementById('paymentBalance').textContent = ethers.utils.formatUnits(paymentBalance);

  const owner = await contract.owner();
  if (owner.toLowerCase() === userAddress.toLowerCase()) {
    document.getElementById('adminPanel').classList.remove('hidden');
  }

  renderWorkOrders();
}

// rest of the functions stay the same...
