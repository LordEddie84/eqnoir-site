// ---------------------------------------------
// EQNOIR: Global Launch v2.2
// Live GeckoTerminal Integration
// ---------------------------------------------

const API_URL = "https://api.geckoterminal.com/api/v2/networks/bsc/pools/0x47ab12e013f1289c8c5f83f962fc01bb496beaa4";
const tickerElement = document.getElementById("ticker-data");

// Fetch live data from GeckoTerminal
async function fetchLiveData() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    const attr = data.data.attributes;

    const price = parseFloat(attr.base_token_price_usd).toFixed(12);
    const change = parseFloat(attr.price_change_percentage_24h).toFixed(2);
    const vol = Number(attr.volume_usd_24h).toLocaleString();
    const liq = Number(attr.reserve_in_usd).toLocaleString();
    const fdv = Number(attr.fdv_usd).toLocaleString();
    const marketcap = attr.market_cap_usd ? Number(attr.market_cap_usd).toLocaleString() : "—";

    const now = new Date();
    const localTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const changeSign = change >= 0 ? "▲" : "▼";
    const changeColor = change >= 0 ? "🟢" : "🔴";

    tickerElement.textContent = `💰 PRICE: ${price} USD ${changeColor} ${changeSign}${change}% • 24H VOL: $${vol} • LIQUIDITY: $${liq} • FDV: $${fdv} • MARKET CAP: $${marketcap} • THE FUTURE IS BLACK • THE FUTURE IS EQNOIR • Updated ${localTime}`;
  } catch (err) {
    console.error("Error fetching EQNOIR data:", err);
    tickerElement.textContent = "⚠️ Error loading live data from GeckoTerminal...";
  }
}

// Refresh every 60s
fetchLiveData();
setInterval(fetchLiveData, 60000);

// Language Switcher
const langSelect = document.getElementById("language-switch");
if (langSelect) {
  langSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    switch (lang) {
      case "fr":
        alert("Langue changée en Français (bientôt disponible).");
        break;
      case "th":
        alert("ภาษาเปลี่ยนเป็นไทย (จะพร้อมใช้งานเร็วๆ นี้).");
        break;
      case "sw":
        alert("Lugha imebadilishwa kuwa Kiswahili (inakuja hivi karibuni).");
        break;
      default:
        alert("Language set to English.");
    }
  });
}
