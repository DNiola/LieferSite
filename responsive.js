/// Responsive
function openBasket() {
  let openBasketBox = document.getElementById("openBasket");
  let payBox = document.getElementById("mediaBasket");
  payBox.classList.remove("d-none");
  openBasketBox.classList.add("d-none");
  
  removeSideBasketForRE();
}


function removeSideBasketForRE() {
  let payBox = document.getElementById("mediaBasket");
  payBox.classList.remove("shadowLeftRe");
  payBox.classList.remove("aSideRe");
  payBox.classList.add("buttonOpenBasketPosi");

  addBlockContent();
}


function closeBasket() {
  let openBasketBox = document.getElementById("openBasket");
  let payBox = document.getElementById("mediaBasket");
  payBox.classList.add("shadowLeftRe");
  payBox.classList.add("aSideRe");
  payBox.classList.remove("d-none");
  openBasketBox.classList.remove("d-none");
  
  removeBlockContent();
  basketShowPrice();
  render();
}
