async function loadTicker() {
  try {
    const res = await fetch(
      "https://api.geckoterminal.com/api/v2/networks/bsc/pools/0x47ab12e013f1289c8c5f83f962fc01bb496beaa4"
    );

    const data = await res.json();
    const a = data.data.attributes;

    const price = parseFloat(a.base_token_price_usd);
    const fdv = parseFloat(a.fdv_usd);
    const liquidity = parseFloat(a.reserve_in_usd);
    const volume24h = parseFloat(a.volume_usd.h24);

    document.getElementById("ticker-content").innerText =
      `EQNOIR | Price: $${price.toFixed(6)} | FDV: $${fdv.toLocaleString()} | Liquidity: $${liquidity.toLocaleString()} | 24h Volume: $${volume24h.toLocaleString()}`;
  } catch (e) {
    document.getElementById("ticker-content").innerText =
      "EQNOIR | Live market data unavailable";
  }
}

loadTicker();
