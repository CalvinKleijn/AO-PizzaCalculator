/* Data in een array zetten */
var pizzas = [{ 
	naam:"Pizza BBQ Bacon",
	foto:"images/pizza1.png",
	prijs:599,
 },
 {
 	naam:"Pizza American Supreme Meatlover",
 	foto:"images/pizza2.png",
 	prijs:995,
 },
 {
 	naam:"Pizza Double Cheese & Onion",
 	foto:"images/pizza2.png",
 	prijs:495,
 },
 {
 	naam:"Pizza Chili Cheese & Beef",
 	foto:"images/pizza3.png",
 	prijs:595,
 }];

/* Functie maken en de namen uitlezen */
function showPizzaName() {
	var text = "";
	var i;
	for (i = 0; i < pizzas.length; i++){
		text += pizzas[i].naam + " " + "€" + pizzas[i].prijs +"<br>";
	}
	document.getElementById("pizzanaam/prijs").innerHTML = text;	
} 
showPizzaName();
