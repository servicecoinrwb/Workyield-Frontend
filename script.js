// script.js

import { createConfig, configureChains, mainnet, WagmiConfig } from '@wagmi/core';
import { publicProvider } from '@wagmi/core/providers/public';
import { getDefaultWallets } from '@reown/appkit-adapter-wagmi';
import { ethers } from 'ethers';

const contractAddress = '0x97500Ac1B27931b0a36fe4713B6Af455F5308545';
const contractABI = [/* your ABI array here, use placeholder or load from JSON */];

let provider, signer, contract, userAddress;

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
    alert('MetaMask not found');
  }
}

document.getElementById('connectButton').addEventListener('click', connectWallet);

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
}

window.buyTokens = async function () {
  const amount = document.getElementById('buyAmount').value;
  const token = await contract.paymentToken();
  const paymentContract = new ethers.Contract(token, contractABI, signer);
  const parsedAmount = ethers.utils.parseUnits(amount);

  await paymentContract.approve(contractAddress, parsedAmount);
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
}

window.fundWorkOrder = async function () {
  const id = document.getElementById('fundId').value;
  const amt = ethers.utils.parseUnits(document.getElementById('fundAmount').value);
  await contract.fundFromWorkOrderPayment(id, amt);
  alert('Work order funded');
}

window.withdrawFees = async function () {
  await contract.withdrawFees();
  alert('Fees withdrawn');
}

window.exportPDF = function () {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text('Work Orders - PDF Export Placeholder', 10, 10);
  doc.save('work_orders.pdf');
}
