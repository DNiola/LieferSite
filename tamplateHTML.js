// Render leerer Warenkorb
function templateEmptyBasket() {
  return /*html*/ `
<div class="basketNoneCourt">
    <!--button nur in RE auflösung-->
    <button class="closeButtonRE" onclick="closeBasket()">
        <img src="icon/close.png" class="logoSeller1">
    </button>
    <!--Bttn ende-->
    <img src="icon/basket.png" class="logoBasket">
        <h4>
         Fülle deinen Warenkorb
        </h4>
    <div class="aSideInfo secColor">
        Füge einige leckere Gerichte aus der Speisekarte hinzu
        und bestelle dein Essen.
    </div>
</div>`;
}


//rendert Warenkorb und rechnet die summe des jeweiligen gericht.${calcPrice}
function templateFullBasket(i) {
  const basketName = names[i];
  const basketAmount = amounts[i];
    return /*html*/ `
<div>
<!--button nur in RE auflösung-->
    <button class="closeButtonRE" onclick="closeBasket()">
        <img src="icon/close.png" class="logoSeller1">
    </button>
    <!--Bttn ende-->
    <div class="basketOrder">
        <div class="basketAmoutsPosi">
            <div>
                <b class="paddAll12">${basketAmount}</b> 
                <b class="textUnderline">${basketName}</b>
            </div>
            <div>
                <div>${calcPrice(amounts[i], prices[i]).toFixed(2)}€</div>   
            </div>
        </div>
    </div>
</div>
<!--Mänge "-" und "+" -->
<div class="feedbackPosition">
    <div class="basketOrderBtn">
        <div>
            <button class="basketRemoveAmountsImgCointainer" onclick="lessCourt(${i})">
                <img src="icon/minus.png" class="basketAddAmountsImg">
            </button>
        </div>
        <div class="paddLeft12px">
            <button class="basketAddAmountsImgCointainer" onclick="moreCourt(${i})">
                <img src="icon/plus.png"  class="basketAddAmountsImg">
            </button>
        </div>
    </div>
</div>

<!--PayBox (öffent sich nach dem Bezahlen Button)-->
<div id="pay" class="InfoClass  d-none">
    <div id="InfoCountainerRe" class="Info_1kB1uC InfoCountainer">
        <div class="fixedInfo">
            <div class="aboutRestaurant">
                <div>
                  <h2>Vielen Dank Für Ihre Bestellung!</h2>
                    <div><b>Gesamt: ${total(subTotal(), extraCost).toFixed(2)}€ </b>
                    </div>
                </div>
                <button class="closeButton" onclick="closePay()"><img src="icon/close.png" class="logoSeller1">
                </button>
            </div>
            <div class="borderTop">
                Vielen Dank für Ihren Besuch auf meiner TEST-Lieferseite. <br>
                Alle Elemente, Funktionen, Gerichte und Bestellungen sind nur zu Testzwecken. <br>
                Es wird nichts gekauft und nichts geliefert !
                <br>
                <br>
               <p> Mehr Infos im <a href="impressum.html">Impressum</a>.</p>
            </div>
        </div>
    </div>
</div>`;
}


//rendert und rechnet die summe der jeweiligen gerichte aus mit subTotal.
function templateBasketCalc() {
  return /*html*/ `
<div class="costFull">
    <div class="costCountainer"> 
        <div>Zwischensumme:</div>
        <div>${subTotal().toFixed(2)}€</div> 
    </div>
    <div class="costCountainer "> 
        <div id="extraCost">zzgl. Lieferkosten:</div> 
        <div>${extraCost.toFixed(2)}€</div>
    </div>
    <div class="shadowBottom"></div>
    <div class="costCountainer costFullPosi"> 
        <div> <b>Gestamt:</b> </div> 
        <div><b>${total(subTotal(), extraCost).toFixed(2)}€</b></div>
    </div>  
</div>  

<div id="tests" class="payButtonCountainer">
    <button onclick="payBox()" class="payButton">
        <h3>Bezahlen (${total(subTotal(), extraCost).toFixed(2)}€)</h3>
    </button>
</div>`;
}


/////function rendert HTML und gibt HTML zurück
function courtPopularHTML(i, court) {
  return ` 
<div class="courts">
    <div>
        <table>
            <tr>
                <td>
                    <h4 class="courtHeader" id="courtHeader${i}">${court["name"]}</h4>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="courtSubHeader" id="courtSubHeader${i}">${court["courtSubHeader"]}</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="courtSubHeader" id="choice${i}">${court["choice"]}</p>
                </td>
            </tr>
            <tr>
                <td id="price${i}"><i><b>${court["price"]}€</b></i></td>
            </tr>
        </table>
    </div>
    <div class="buttonPosition">
       <button onclick="addToBasket('${court["name"]}',${court["price"]})" class="buttonAdd">
           <img src="icon/add.png" class="buttonImgAdd">
       </button>
    </div>
</div>`;
}


// -//-
function courtSalatHTML(i, court) {
  return `
<div class="courts">
    <div>
        <table>
            <tr>
                <td>
                    <h4 class="courtHeader" id="courtHeader${i}">${court["name"]}</h4>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="courtSubHeader" id="courtSubHeader${i}">${court["courtSubHeader"]}</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="courtSubHeader" id="choice${i}">${court["choice"]}</p>
                </td>
            </tr>
            <tr>
                <td id="price${i}"><i><b>${court["price"]}€</b></i></td>
            </tr>
        </table>
    </div>
     <div class="buttonPosition">
        <button onclick="addToBasket('${court["name"]}',${court["price"]})" class="buttonAdd">
            <img src="icon/add.png" class="buttonImgAdd">
        </button>
    </div>
</div>`;
}


// -//-
function courtBurgerHTML(i, court) {
  return `
<div class="courts">
    <div>
        <table>
            <tr>
                <td>
                    <h4 class="courtHeader" id="courtHeader${i}">${court["name"]}</h4>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="courtSubHeader" id="courtSubHeader${i}">${court["courtSubHeader"]}</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="courtSubHeader" id="choice${i}">${court["choice"]}</p>
                </td>
            </tr>
            <tr>
                <td id="price${i}"><i><b>${court["price"]}€</b></i></td>
            </tr>
        </table>
    </div>
     <div class="buttonPosition">
        <button onclick="addToBasket('${court["name"]}',${court["price"]})" class="buttonAdd">
            <img src="icon/add.png" class="buttonImgAdd">
        </button>
    </div>
</div>`;
}


// -//-
function courtPastaHTML(i, court) {
  return `
<div class="courts">
    <div>
        <table>
            <tr>
                <td>
                    <h4 class="courtHeader" id="courtHeader${i}">${court["name"]}</h4>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="courtSubHeader" id="courtSubHeader${i}">${court["courtSubHeader"]}</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="courtSubHeader" id="choice${i}">${court["choice"]}</p>
                </td>
            </tr>
            <tr>
                <td id="price${i}"><i><b>${court["price"]}€</b></i></td>
            </tr>
      </table>
    </div>
    <div class="buttonPosition">
        <button onclick="addToBasket('${court["name"]}',${court["price"]})" class="buttonAdd">
             <img src="icon/add.png" class="buttonImgAdd">
         </button>
    </div>
</div>`;
}


// -//-
function courtPizzaHTML(i, court) {
  return `
<div class="courts">
    <div>
        <table>
            <tr>
                <td>
                    <h4 class="courtHeader" id="courtHeader${i}">${court["name"]}</h4>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="courtSubHeader" id="courtSubHeader${i}">${court["courtSubHeader"]}</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="courtSubHeader" id="choice${i}">${court["choice"]}</p>
              </td>
            </tr>
            <tr>
                <td id="price${i}"><i><b>${court["price"]}€</b></i></td>
            </tr>
        </table>
    </div>
    <div class="buttonPosition">
        <button onclick="addToBasket('${court["name"]}',${court["price"]})" class="buttonAdd">
            <img src="icon/add.png" class="buttonImgAdd">
        </button>
    </div>
</div>`;
}


// -//-
function courtGetränkeHTML(i, court) {
  return `
<div class="courts">
    <div>
        <table>
            <tr>
                <td>
                    <h4 class="courtHeader" id="courtHeader${i}">${court["name"]}</h4>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="courtSubHeader" id="courtSubHeader${i}">${court["courtSubHeader"]}</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="courtSubHeader" id="choice${i}">${court["choice"]}</p>
                </td>
            </tr>
            <tr>
                <td id="price${i}"><i><b>${court["price"]}€</b></i></td>
            </tr>
        </table>
    </div>
    <div class="buttonPosition">
        <button onclick="addToBasket('${court["name"]}',${court["price"]})" class="buttonAdd">
            <img src="icon/add.png" class="buttonImgAdd">
        </button>
    </div>
</div>`;
}
