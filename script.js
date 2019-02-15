/* Pizzas in een array zetten */
var pizzas = [
	{naam:"Pizza BBQ Bacon",foto:"images/pizza1.png",prijs:5.99,},
	{naam:"Pizza American Supreme Meatlover",foto:"images/pizza2.png",prijs:9.95,},
	{naam:"Pizza Double Cheese & Onion",foto:"images/pizza3.png",prijs:4.95,},
	{naam:"Pizza Chili Cheese & Beef",foto:"images/pizza4.png",prijs:5.95,}
];

/* Toppings in een array zetten */
var toppings = [
	{naam:"Bacon",prijs:0.99,},
	{naam:"Kaas",prijs:0.49,},
	{naam:"Tomaat",prijs:0.49,},
	{naam:"Uien",prijs:0.49,},
];


/* Pizza lijst maken doormiddel van een function */
function showPizzaList() {
	/* Unordered list toevoegen in HTML met createElement */
    var pizzaElement = document.createElement('ul');
    /* Bepalen waar de unordered list moet worden toegevoegd */
    	document.getElementById('pizza-list').appendChild(pizzaElement);
    /* De 4 pizzas loopen door een forloop en dan een li en a aanmaken per pizza */	
    for (var i = 0; i < pizzas.length; i++) {
        var pizzaList = document.createElement('li');
        var pizzaLink = document.createElement('a');
        pizzaLink.innerHTML = pizzas[i].naam;
    /* Onclick toevoegen op de pizza met verschillende ID's doormiddel van setAttribute */    
        pizzaLink.setAttribute("onclick", `showSpecificPizza(${i})`);
        pizzaElement.appendChild(pizzaList);
        pizzaList.appendChild(pizzaLink);
    }
}
/* Functie bij het laden van de pagina uitvoeren */
showPizzaList();    

/* Toppings lijst maken doormiddel van een function */
function showToppingsList() {
	/* Unordered list toevoegen in HTML met createElement */
	var toppingElement = document.createElement('ul');
	/* Bepalen waar de unordered list moet worden toegevoegd */
		document.getElementById('pizza-toppings').appendChild(toppingElement);
	/* De 4 toppings loopen door een forloop en dan een li en input aanmaken per topping */		
	for (var o = 0; o < toppings.length; o++) {
		var toppingList = document.createElement('li');
		var toppingLink = document.createElement('input');
	/* De input veranderen naar een checkbox */	
		toppingLink.type = "checkbox";
		toppingLink.innerHTML = toppings[o].naam;
		toppingElement.appendChild(toppingList);
		toppingList.appendChild(toppingLink);
	/* De toppings plaatsen met de prijs erbij */	
		toppingList.appendChild(document.createTextNode(toppings[o].naam + ' ' + '€' + toppings[o].prijs));
	}
}
/* Functie bij het laden van de pagina uitvoeren */
showToppingsList();

/* Specifieke pizza ophalen doormiddel van een function */
function showSpecificPizza(pizzaId) {
	/* Prijs showen doormiddel van de HTML te veranderen */
	var priceElement = document.getElementById('pizza-price');
	priceElement.innerHTML = '€' + pizzas[pizzaId].prijs;
	/* Foto showen doormiddel van de SRC te veranderen */
	var pictureElement = document.getElementById('pizza-image');
	pictureElement.src = pizzas[pizzaId].foto;
}
