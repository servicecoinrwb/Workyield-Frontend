// script.js - Updated with full admin functions

const contractAddress = '0x97500Ac1B27931b0a36fe4713B6Af455F5308545';
const contractABI = [/* your ABI goes here */];

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

window.buyTokens = async function () {
  const amount = document.getElementById('buyAmount').value;
  const parsedAmount = ethers.utils.parseUnits(amount);
  const tokenAddress = await contract.paymentToken();
  const paymentToken = new ethers.Contract(tokenAddress, contractABI, signer);

  await paymentToken.approve(contractAddress, parsedAmount);
  await contract.buyTokens(parsedAmount);
  alert('WYT purchased');
}

window.redeemTokens = async function () {
  const amount = document.getElementById('redeemAmount').value;
  const parsedAmount = ethers.utils.parseUnits(amount);
  await contract.redeemTokens(parsedAmount);
  alert('WYT redeemed');
}

window.mintWorkOrder = async function () {
  const grossYield = document.getElementById('mintAmount').value;
  const desc = document.getElementById('mintDescription').value;
  await contract.mintFromWorkOrder(ethers.utils.parseUnits(grossYield), desc);
  alert('Work order minted');
  renderWorkOrders();
}

window.fundWorkOrder = async function () {
  const id = document.getElementById('fundId').value;
  const amt = ethers.utils.parseUnits(document.getElementById('fundAmount').value);
  await contract.fundFromWorkOrderPayment(id, amt);
  alert('Work order funded');
  renderWorkOrders();
}

window.withdrawFees = async function () {
  await contract.withdrawFees();
  alert('Fees withdrawn');
}

window.setRedemptionFee = async function () {
  const newFee = parseInt(document.getElementById('feeInput').value);
  if (newFee >= 0 && newFee <= 20) {
    await contract.setRedemptionFee(newFee);
    alert('Redemption fee updated');
  } else {
    alert('Fee must be between 0 and 20');
  }
}

window.cancelWorkOrder = async function () {
  const id = parseInt(document.getElementById('cancelId').value);
  if (id > 0) {
    await contract.cancelWorkOrder(id);
    alert('Work order cancelled');
    renderWorkOrders();
  }
}

window.exportPDF = function () {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text('Work Orders - PDF Export Placeholder', 10, 10);
  doc.save('work_orders.pdf');
}

async function renderWorkOrders() {
  const nextId = await contract.nextWorkOrderId();
  const table = document.getElementById('workOrderTable');
  let html = `<table class='text-sm'><thead><tr>
    <th>ID</th><th>Gross Yield</th><th>Reserve</th><th>Issued</th>
    <th>Active</th><th>Paid</th><th>Description</th><th>Created</th>
  </tr></thead><tbody>`;

  for (let i = 1; i < nextId; i++) {
    const wo = await contract.workOrders(i);
    html += `<tr>
      <td>${wo.id}</td>
      <td>${ethers.utils.formatUnits(wo.grossYield)}</td>
      <td>${ethers.utils.formatUnits(wo.reserveAmount)}</td>
      <td>${ethers.utils.formatUnits(wo.tokensIssued)}</td>
      <td>${wo.isActive}</td>
      <td>${wo.isPaid}</td>
      <td>${wo.description}</td>
      <td>${new Date(wo.createdAt * 1000).toLocaleDateString()}</td>
    </tr>`;
  }

  html += '</tbody></table>';
  table.innerHTML = html;
}
