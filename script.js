/* 
Calvin Kleijn
Pizza Calculator
*/

/* Pizzas in een array zetten */
var pizzas = [
	{naam:"Pizza BBQ Bacon",foto:"images/pizza1.png",prijs:5.99,},
	{naam:"Pizza American Supreme Meatlover",foto:"images/pizza2.png",prijs:9.95,},
	{naam:"Pizza Double Cheese & Onion",foto:"images/pizza3.png",prijs:4.95,},
	{naam:"Pizza Chili Cheese & Beef",foto:"images/pizza4.png",prijs:5.95,}
];

/* Toppings in een array zetten */
var toppings = [
	{naam:"Bacon",prijs:0.79,},
	{naam:"Kaas",prijs:0.49,},
	{naam:"Tomaat",prijs:0.59,},
	{naam:"Uien",prijs:0.69,},
	{naam:"Geen",prijs:0.00,},
];

/* Slices in een array zetten */
var slices = [
	{titel:"Hele pizza",factor:100},
	{titel:"Drie kwart pizza",factor:75,},
	{titel:"Halve pizza",factor:50,},
	{titel:"Kwart pizza",factor:25},
];

/* Delivery in een array zetten */
var delivery = [
	{titel:"Thuisbezorgd",prijs:1.99},
	{titel:"Afhalen",prijs:0.00},
];

/* Payments in een array zetten */
var payments = [
	{titel:"Pinnen",korting:5,berekening:95},
	{titel:"Contant",korting:0,berekening:100},
];

/* 5 variables aanmaken om door te geven */
var currentPizza;
var currentPrice;
var currentMidPrice;
var deliveryVar;
var paymentVar;

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


/* Specifieke pizza ophalen doormiddel van een function */
function showSpecificPizza(id) {
	currentPizza = id;
	/* Prijs showen doormiddel van de HTML te veranderen */
	var priceElement = document.getElementById('pizza-price');
	priceElement.innerHTML =  pizzas[id].prijs;
	/* Foto showen doormiddel van de SRC te veranderen */
	var pictureElement = document.getElementById('pizza-image');
	pictureElement.src = pizzas[id].foto;
}

/* Slices uitlezen doormiddel van een function */
function showSlicesList() {
	/* Unordered list toevoegen in HTML met createElement */
	var sliceElement = document.createElement('ul');
	/* Bepalen waar de unordered list moet worden toegevoegd */
		document.getElementById('pizza-slices').appendChild(sliceElement);
	/* de 4 slices loopen door een forloop en dan een li en input aanmaken per slice */
	for (var p = 0; p < slices.length; p++)	{
		var sliceList = document.createElement('li');
		var sliceLink = document.createElement('input');
	/* De input veranderen naar een radio */	
		sliceLink.type = "radio";
	/* De radio een naam geven zodat er maar 1 tegelijkertijd aangeklikt kan worden */	
		sliceLink.name = "sliceLink";
	/* De naam uitlezen en in de HTML zetten */		
		sliceLink.innerHTML = slices[p].titel;
	/* Onclick toevoegen die naar een andere functie leidt */		
		sliceLink.setAttribute("onclick", `pizzaPrice(${p})`);
		sliceElement.appendChild(sliceList);
		sliceList.appendChild(sliceLink);
	/* De slices plaatsen */
		sliceList.appendChild(document.createTextNode(slices[p].titel));	
	}
}
/* Functie bij het laden van de pagina uitvoeren */
showSlicesList();

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
	/* De input veranderen naar een radio */	
		toppingLink.type = "radio";
	/* Een ID op de radio zetten */	
		toppingLink.name = "toppingLink";
	/* De naam uitlezen en in de HTML zetten */	
		toppingLink.innerHTML = toppings[o].naam;
	/* Onclick toevoegen die naar een andere functie leidt */	
		toppingLink.setAttribute("onclick", `midPrice(${o})`);
		toppingElement.appendChild(toppingList);
		toppingList.appendChild(toppingLink);
	/* De toppings plaatsen met de prijs erbij */	
		toppingList.appendChild(document.createTextNode(toppings[o].naam + ' ' + '€' + toppings[o].prijs));
	}
}
/* Functie bij het laden van de pagina uitvoeren */
showToppingsList();

/* Functie maken om de deliveryprijs toe te voegen */
function deliveryOrder() {
	/* Unordered list toevoegen in HTML met createElement */
	var deliveryElement = document.createElement('ul');
	/* Bepalen waar de unordered list moet worden toegevoegd */
		document.getElementById('pizza-delivery').appendChild(deliveryElement);
	/* De 2 deliverys loopen door een forloop en dan een li en input aanmaken per delivery */		
	for (var t = 0; t < delivery.length; t++) {
		var deliveryList = document.createElement('li');
		var deliveryLink = document.createElement('input');
	/* De input veranderen naar een radio */	
		deliveryLink.type = "radio";
	/* Een ID op de radio zetten */	
		deliveryLink.name = "deliveryLink";
	/* De naam uitlezen en in de HTML zetten */	
		deliveryLink.innerHTML = delivery[t].titel;
	/* Onclick toevoegen die naar een andere functie leidt */	
		deliveryLink.setAttribute("onclick", `totalPrice(${t})`);
		deliveryElement.appendChild(deliveryList);
		deliveryList.appendChild(deliveryLink);
	/* De toppings plaatsen met de prijs erbij */	
		deliveryList.appendChild(document.createTextNode(delivery[t].titel + ' ' + '€' + delivery[t].prijs));
	}
}
/* Functie bij het laden van de pagina uitvoeren */
deliveryOrder();

/* Functie maken om de deliveryprijs toe te voegen */
function pizzaPaymentOptions() {
	/* Unordered list toevoegen in HTML met createElement */
	var paymentElement = document.createElement('ul');
	/* Bepalen waar de unordered list moet worden toegevoegd */
		document.getElementById('pizza-payment').appendChild(paymentElement);
	/* De 2 payments loopen door een forloop en dan een li en input aanmaken per payment */		
	for (var r = 0; r < payments.length; r++) {
		var paymentList = document.createElement('li');
		var paymentLink = document.createElement('input');
	/* De input veranderen naar een radio */	
		paymentLink.type = "radio";
	/* Een ID op de radio zetten */	
		paymentLink.name = "paymentLink";
	/* De naam uitlezen en in de HTML zetten */	
		paymentLink.innerHTML = payments[r].titel;
	/* Onclick toevoegen die naar een andere functie leidt */	
		paymentLink.setAttribute("onclick", `paymentPrice(${r})`);
		paymentElement.appendChild(paymentList);
		paymentList.appendChild(paymentLink);
	/* De payment plaatsen met de prijs erbij */	
		paymentList.appendChild(document.createTextNode(payments[r].titel + ' ' + payments[r].korting + '% korting'));
	}
}
/* Functie bij het laden van de pagina uitvoeren */
pizzaPaymentOptions();

/* Functie maken om de prijs te showen nadat er een slice is gekozen */
function pizzaPrice(SliceId) {
	/* Id uit de HTML aanroepen en in een variable doen */
	var price = document.getElementById("pizza-totalprice");
	/* Prijs berekenen en in een variable stoppen */
	currentPrice = pizzas[currentPizza].prijs / 100 * slices[SliceId].factor;
	/* De prijs in de HTML en berekenen */
	price.innerHTML = pizzas[currentPizza].prijs / 100 * slices[SliceId].factor;
}

/* Functie maken om de prijs te showen nadat er een topping is gekozen */
function midPrice(SliceId) {
	/* Id uit de HTML aanroepen en in een variable doen */
    var midprice = document.getElementById("pizza-totalprice");
	/* Prijs berekenen en in een variable stoppen */
	currentMidPrice = toppings[SliceId].prijs + currentPrice;
	/* De prijs in de HTML en berekenen */
	midprice.innerHTML = toppings[SliceId].prijs + currentPrice;
}

/* Functie maken om de prijs te showen nadat er een delivery is gekozen en de totale prijs berekenen */
function totalPrice(DeliveryId) {
	/* Id uit de HTML aanroepen en in een variable doen */
    var deliveryprice = document.getElementById("pizza-totalprice");
	/* Prijs berekenen en in een variable stoppen */
	deliveryVar = delivery[DeliveryId].prijs + currentMidPrice;
	/* De prijs in de HTML en berekenen */
	deliveryprice.innerHTML = delivery[DeliveryId].prijs + currentMidPrice;
}

/* Functie maken om de prijs te showen nadat er een payment is gekozen */
function paymentPrice(PaymentId) {
	/* Id uit de HTML aanroepen en in een variable doen */
    var paymentprice = document.getElementById("pizza-totalprice");
    /* Prijs berekenen en in een variable zetten */
    paymentVar = deliveryVar / 100 * payments[PaymentId].berekening;
	/* De prijs in de HTML zetten en afronden op 2 getallen achter de komma's */
	paymentprice.innerHTML = paymentVar.toFixed(2);
}
