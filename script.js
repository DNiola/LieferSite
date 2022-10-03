//basket arrays

let names = [];
let prices = [];
let amounts = [];
let extraCost = [5.0];
load();

//rendert alle gerichte und den Warenkorb
function render() {
  courtPopular();
  courtSalat();
  courtBurger();
  courtPasta();
  courtPizza();
  courtGetränke();
  save();
  templateEmptyBasket();
  renderFullBasket();
}

//Rendert jeweiliges gericht
function courtPopular() {
  let popular = document.getElementById("courtPopular");
  popular.innerHTML = `<h3 class="paddLeft12px">Beliebte Gerichte</h3>`;
  for (let i = 0; i < lovleyCourt.length; i++) {
    const court = lovleyCourt[i];
    popular.innerHTML += courtPopularHTML(i, court);
  }
}

//Rendert jeweiliges gericht
function courtSalat() {
  let salat = document.getElementById("courtSalat");
  salat.innerHTML = `<h3 class="paddLeft12px">Salat</h3>`;
  for (let i = 0; i < salad.length; i++) {
    const court = salad[i];
    salat.innerHTML += courtSalatHTML(i, court);
  }
}

//Rendert jeweiliges gericht
function courtBurger() {
  let bburger = document.getElementById("courtBurger");
  bburger.innerHTML = `<h3 class="paddLeft12px">Burger</h3>`;
  for (let i = 0; i < burger.length; i++) {
    const court = burger[i];
    bburger.innerHTML += courtBurgerHTML(i, court);
  }
}

//Rendert jeweiliges gericht
function courtPasta() {
  let ppasta = document.getElementById("courtPasta");
  ppasta.innerHTML = `<h3 class="paddLeft12px">Pasta</h3>`;
  for (let i = 0; i < pasta.length; i++) {
    const court = pasta[i];
    ppasta.innerHTML += courtPastaHTML(i, court);
  }
}

//Rendert jeweiliges gericht
function courtPizza() {
  let ppizza = document.getElementById("courtPizza");
  ppizza.innerHTML = `<h3 class="paddLeft12px">Pizza</h3>`;
  for (let i = 0; i < pizza.length; i++) {
    const court = pizza[i];
    ppizza.innerHTML += courtPizzaHTML(i, court);
  }
}

//Rendert jeweiliges gericht
function courtGetränke() {
  let ggetränke = document.getElementById("courtGetränke");
  ggetränke.innerHTML = `<h3 class="paddLeft12px">Getränke</h3>`;
  for (let i = 0; i < getränke.length; i++) {
    const court = getränke[i];
    ggetränke.innerHTML += courtGetränkeHTML(i, court);
  }
}

//Prüft und rendert
function renderFullBasket() {
  let basketContent = document.getElementById("basket"); // die ID basket wird zu basketContent
  basketContent.innerHTML = ""; // basketContent leert die HTML von der ID basket
  if (amounts.length <= 0) {
    // ist der array amouts länge kleiner gleich 0 dann
    basketContent.innerHTML = templateEmptyBasket(); //  basketContent ruft function auf
  } else {
    //wen amouts mehr wie 0 ist dann
    for (let i = 0; i < names.length; i++) {
      //für (variable i wird festgelegt. i = 0; wen i kleiner als array names.länge; array wird um 1 erhören)
      basketContent.innerHTML += templateFullBasket(i); // basketContent ruft function auf mit parrameter
    }
    if (proofMinOrder > 0) basketContent.innerHTML += templateBasketCalc(); // basketContent ruft function auf
  }
}

// Rechner
function calcPrice(a, b) {
  let price = a * b;
  return price;
}

function subTotal() {
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    sum += prices[i] * amounts[i];
  }
  if (sum <= 40) {
    extraCost = 5.0;
  } else {
    extraCost = 0;
  }
  proofMinOrder = sum - 20;
  proofExtraCost(sum);
  proofSumForDeliver(sum);
  basketShowPrice(sum);
  return sum;
}

function total(c, d) {
  let endSum = c + d;
  return endSum;
}

//Prüf funktionen
function proofExtraCost(sum) {
  let extraCostInfo = document.getElementById("extraCostInfo");
  extraCostInfo.innerHTML = "";
  if (sum <= 40) {
    extraCostInfo.innerHTML += " <I> Kostenfreie Lieferung ab 40,00 € </ i>";
  }
}

function proofSumForDeliver(sum) {
  let deliverCostInfo = document.getElementById("deliverCostInfo");
  deliverCostInfo.innerHTML = "";
  if (sum <= 20) {
    deliverCostInfo.innerHTML += `<I>Aktueller Gesamtpreis ${sum.toFixed(
      2
    )} €<br> Lieferung möglich ab 20,00 € </ i>`;
  }
}

//fügt gericht den warenkorb hinzu
function addToBasket(name, price) {
  let index = names.indexOf(name);
  if (index == -1) {
    names.push(name);
    prices.push(price);
    amounts.push(1);
  } else {
    amounts[index]++;
  }
  save();
  renderFullBasket();
}

//Rendert Button fur RE auflösung
function basketShowPrice(sum) {
  let besketCountainer = document.getElementById("totalShowBasket");
  besketCountainer.innerHTML = "Warenkorb";
  if (sum >= 0) {
    besketCountainer.innerHTML += ` (${sum.toFixed(2)} €)`;
  } else {
    besketCountainer.innerHTML = "Warenkorb";
  }
}

//Button mehr essen(+)
function moreCourt(i) {
  amounts[i]++;
  save();
  renderFullBasket();
}

//Button weniger essen (-)
function lessCourt(i) {
  if (amounts[i] > 1) {
    amounts[i]--;

    save();
    proofExtraCost();
    proofSumForDeliver();
    renderFullBasket();
  } else {
    amounts.splice(i, 1);
    names.splice(i, 1);
    prices.splice(i, 1);

    save();
    proofExtraCost();
    proofSumForDeliver();
    renderFullBasket();
  }
}

//PayButton
function payBox() {
  let payBox = document.getElementById("pay");
  payBox.classList.remove("d-none");
  addBlockContent();
}

function closePay() {
  let payBox = document.getElementById("pay");
  payBox.classList.add("d-none");
  removeBlockContent();
}

///InfoButton
function showInfo() {
  let infoBox = document.getElementById("infoBox");
  infoBox.classList.remove("d-none");
  addBlockContent();
}

function removeInfo() {
  let infoBox = document.getElementById("infoBox");
  infoBox.classList.add("d-none");
  removeBlockContent();
}

function addBlockContent() {
  let blockAll = document.getElementById("blockContent");
  blockAll.classList.add("OverflowHidden");
}

function removeBlockContent() {
  let blockAll = document.getElementById("blockContent");
  blockAll.classList.remove("OverflowHidden");
}

///Love Button
function addLove() {
  document.getElementById('btnHeart').classList.add('d-none');
    document.getElementById('btnRedHeart').classList.remove('d-none');
 
}

function removeLove(){
  document.getElementById('btnRedHeart').classList.add('d-none');
    document.getElementById('btnHeart').classList.remove('d-none');
}
