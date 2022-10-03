//Courts arrays// -> basket arrays in script.js//
let lovleyCourt = [
  {
    name: "Texas Burger",
    courtSubHeader: "mit Bacon und doppelt Cheddar.",
    choice:
      "Wahl aus: mit Bacon, mit Barbecuesauce, hausgemacht, mit Beef-Patty, extra, mit Bergkäse,würzig, mit Cheddar und mehr.",
    price: 12.99,
  },

  {
    name: "Carbonara",
    courtSubHeader: "mit Speck,Ei und Parmesan.",
    choice:
      "Wahl aus: mit Speck, extra Ei, mit Bergkäse, mit Cheddar und mehr.",
    price: 10.99,
  },

  {
    name: "Pizza Margerittha",
    courtSubHeader: "Mit frischer Mozzarella.",
    choice: "Wahl aus: Büffelmozzarella, Salami, Schinken, Annanas. ",
    price: 8.99,
  }
];


let salad = [
  {
    name: "Gemischter Salat",
    courtSubHeader:
      "mit verschiedenen Blattsalat, Gurken, Tomaten, Mais und Balsamico-Dressing",
    choice: "",
    price: 6.99,
  },

  {
    name: "Caesar Salad",
    courtSubHeader:
      "mit Eisbergsalat, Sardellen, Kapern, Parmesan und Croutons",
    choice: "",
    price: 7.99,
  },

  {
    name: "Caesar Salad (scharf)",
    courtSubHeader:
      " mit Eisbergsalat, Sardellen, Kapern, Parmesan, Croutons und Barbecue-Hähnchenbrustfilet",
    choice: "",
    price: 8.99,
  }
];


let burger = [
  {
    name: "Texas Burger",
    courtSubHeader: "mit Bacon und doppelt Cheddar.",
    choice:
      "Wahl aus: mit Bacon, mit Barbecuesauce, hausgemacht, mit Beef-Patty, extra, mit Bergkäse,würzig, mit Cheddar.",
    price: 12.99,
  },

  {
    name: "Cheesburger",
    courtSubHeader: "mit Cheddar und Frischen Salad",
    choice:
      "Wahl aus: mit Bacon, mit Barbecuesauce, hausgemacht, mit Beef-Patty, extra, mit Bergkäse,würzig, mit Cheddar.",
    price: 10.99,
  },

  {
    name: "Ei Burger",
    courtSubHeader: "mit Bacon und doppelt Cheddar und Ei",
    choice:
      "Wahl aus: mit Bacon, mit Barbecuesauce, hausgemacht, mit Beef-Patty, extra, mit Bergkäse,würzig, mit Cheddar..",
    price: 11.99,
  }
];


let pasta = [
  {
    name: "Carbonara",
    courtSubHeader: "mit Speck,Ei und Parmesan.",
    choice:
      "Wahl aus: mit Speck, extra Ei, mit Bergkäse, mit Cheddar und mehr.",
    price: 11.99,
  },

  {
    name: "Pasta Napoli",
    courtSubHeader: "mit frischer Tomatensoße und Basilikum",
    choice: "Wahl aus: extra Parmesan.",
    price: 9.99,
  },

  {
    name: "Pasta Bolognese",
    courtSubHeader: "Procutto cotto, mit käse ",
    choice: "Wahl aus: extra Parmesan.",
    price: 12.99,
  }
];


let pizza = [
  {
    name: "Pizza Margerittha",
    courtSubHeader: "Mit frischer Mozzarella.",
    choice: "Wahl aus: Büffelmozzarella, Salami, Schinken, Annanas. ",
    price: 8.99,
  },

  {
    name: "Pizza Salami",
    courtSubHeader: "mit Schweinesalami, Käse.",
    choice: "Wahl aus: Büffelmozzarella, Salami, Annanas,Rinder Salami.",
    price: 9.99,
  },

  {
    name: "Pizza Procutto",
    courtSubHeader: "Procutto cotto, mit käse ",
    choice: "Wahl aus: Büffelmozzarella, Salami, Annanas,Rinder Procutto.",
    price: 10.99,
  }
];


let getränke = [
  {
    name: "Cola",
    courtSubHeader: "Marke: Coca-Cola",
    choice: "Wahl aus: 0.33L, 0.50L,1L",
    price: 2.99,
  },

  {
    name: "Sprite",
    courtSubHeader: "Marke: Sprite",
    choice: "Wahl aus: 0.33L, 0.50L,1L",
    price: 2.99,
  },

  {
    name: "Wasser",
    courtSubHeader: "Marke: Lete",
    choice: "Wahl aus: 0.33L, 0.50L,1L",
    price: 1.99,
  }
];


//LOCAL STORAGE
function save() {
  let namesAsText = JSON.stringify(names);
  let pricesAsText = JSON.stringify(prices);
  let amountsAsText = JSON.stringify(amounts);
  localStorage.setItem("names", namesAsText);
  localStorage.setItem("prices", pricesAsText);
  localStorage.setItem("amounts", amountsAsText);
}


function load() {
  let namesAsText = localStorage.getItem("names");
  let pricesAsText = localStorage.getItem("prices");
  let amountsAsText = localStorage.getItem("amounts");
  if (namesAsText && pricesAsText && amountsAsText) 
  {
    names = JSON.parse(namesAsText);
    prices = JSON.parse(pricesAsText);
    amounts = JSON.parse(amountsAsText);
  }
}


//include function für template
async function includeHTML() {
  let includeElements = document.querySelectorAll("[w3-include-html]");
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html"); // "includes/header.html"
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = "Page not found";
    }
  }
}