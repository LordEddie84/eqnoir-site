async function fetchMarketData() {
try {
const poolUrl = 'https://api.geckoterminal.com/api/v2/networks/bsc/pools/0x47ab12e013f1289c8c5f83f962fc01bb496beaa4';
const response = await fetch(poolUrl);
const data = await response.json();


const pool = data.data.attributes;


const price = parseFloat(pool.price_usd).toFixed(10);
const liquidity = parseFloat(pool.liquidity_usd).toLocaleString();
const volume = parseFloat(pool.volume_24h_usd).toLocaleString();
const holders = pool.holders_count;
const fdv = parseFloat(pool.fdv_usd).toLocaleString();


const marketData = `🪙 EQNOIR / WBNB • Price: $${price} • 24h Volume: $${volume} • Liquidity: $${liquidity} • FDV: $${fdv} • Holders: ${holders}`;
document.getElementById('market-data').innerText = marketData;
} catch (err) {
console.error('Failed to fetch GeckoTerminal data:', err);
document.getElementById('market-data').innerText = 'EQNOIR market data unavailable';
}
}


fetchMarketData();
setInterval(fetchMarketData, 60000);