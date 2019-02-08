/* Pizzas in een array zetten */
var pizzas = [{pizzaid:1,naam:"Pizza BBQ Bacon",foto:"images/pizza1.png",prijs:5.99,},
{pizzaid:2,naam:"Pizza American Supreme Meatlover",foto:"images/pizza2.png",prijs:9.95,},
{pizzaid:3,naam:"Pizza Double Cheese & Onion",foto:"images/pizza2.png",prijs:4.95,},
{pizzaid:4,naam:"Pizza Chili Cheese & Beef",foto:"images/pizza3.png",prijs:5.95,}];

/* Toppings in een array zetten */
var toppings = [{naam:"Bacon",foto:"images/bacon.png",prijs:0.99,choose:false,},
{naam:"Kaas",foto:"images/kaas.jpg",prijs:0.49,choose:false,},
{naam:"Tomaat",foto:"images/tomaat.png",prijs:0.49,choose:false,},
{naam:"Uien",foto:"images/uien.png",prijs:0.49,choose:false,},
{naam:"Vlees",foto:"images/vlees.png",prijs:0.99,choose:false,}];

/* Functie maken en de namen uitlezen */
function showPizzaName() {
	var text = "";
	var i;
	for (i = 0; i < pizzas.length; i++){
		text += pizzas[i].pizzaid + " " + pizzas[i].naam +"<br>";
	}
	document.getElementById("pizzanaam").innerHTML = text;	
} 
showPizzaName();


/* Functie maken en de toppings tonen */
function showPizzaToppings() {
	var text = "";
	var t;
    var h3 = document.createElement("h3");
    var t =  document.createTextNode("Kies een topping");
    h3.appendChild(t);  
    document.getElementById("toppingnaam").appendChild(h3);
	for (t = 0; t < toppings.length; t++){
		text += toppings[t].naam + " " + "€" + toppings[t].prijs + "<br>";
	}

	document.getElementById("pizzatoppings").innerHTML = text;
}
