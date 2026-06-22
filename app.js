
async function loadCoins(){
 let r=await fetch("http://127.0.0.1:5000/coins");
 let data=await r.json();
 document.getElementById("coins").innerHTML=data.map(
 c=>`<div class='coin'>${c.symbol} ${c.change}%</div>`
 ).join("");
}
loadCoins();
