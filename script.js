console.log("App initialized.");

// --- Setup: Contract + Provider ---
const CONTRACT_ADDRESS = "0xccF4eaa301058Ec5561a07Cc38A75F47a2912EA5";
const ABI = [ /* your full ABI — already included */ ];
const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/arbitrum");
const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

// --- Load and Render Chart ---
async function loadChartData() {
  try {
    const minted = await contract.queryFilter("WorkOrderMinted");
    const redeemed = await contract.queryFilter("TokensRedeemed");

    const mintData = {};
    const redeemData = {};

    for (const e of minted) {
      const ts = (await e.getBlock()).timestamp;
      const date = new Date(ts * 1000).toLocaleDateString();
      const amount = Number(ethers.utils.formatUnits(e.args.tokensIssued, 18));
      mintData[date] = (mintData[date] || 0) + amount;
    }

    for (const e of redeemed) {
      const ts = (await e.getBlock()).timestamp;
      const date = new Date(ts * 1000).toLocaleDateString();
      const amount = Number(ethers.utils.formatUnits(e.args.wytAmount, 18));
      redeemData[date] = (redeemData[date] || 0) + amount;
    }

    const allDates = Array.from(new Set([...Object.keys(mintData), ...Object.keys(redeemData)])).sort((a, b) => new Date(a) - new Date(b));
    const mintSeries = allDates.map(d => mintData[d] || 0);
    const redeemSeries = allDates.map(d => redeemData[d] || 0);

    renderChart(allDates, mintSeries, redeemSeries);
  } catch (err) {
    console.error("Chart load error:", err);
  }
}

function renderChart(labels, minted, redeemed) {
  const ctx = document.getElementById("mintRedeemChart").getContext("2d");

  new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Minted",
          data: minted,
          borderColor: "#10b981",
          backgroundColor: "#10b98133",
          tension: 0.4,
          fill: true
        },
        {
          label: "Redeemed",
          data: redeemed,
          borderColor: "#f59e0b",
          backgroundColor: "#f59e0b33",
          tension: 0.4,
          fill: true
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          labels: { color: "#f3f4f6" }
        }
      },
      scales: {
        x: {
          ticks: { color: "#9ca3af" },
          grid: { color: "#374151" }
        },
        y: {
          ticks: { color: "#9ca3af" },
          grid: { color: "#374151" },
          beginAtZero: true
        }
      }
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  loadChartData();
});
