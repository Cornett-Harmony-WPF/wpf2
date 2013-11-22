// Functions - Industry Harmony Cornett November 21, 2013

//This changes the css of your body tag to be yellow
document.querySelector("body").style.backgroundColor= "yellow";

//This is a function with else if statements showing how much it will cost for web design services.

function webServices (){
	var webPages = 2;
	var eachPageCosts = 30;
	var totalCost = webPages * eachPageCosts;
	console.log("You want a website created with " + webPages + " web pages.  Each page costs " + eachPageCosts + " dollars, so the cost of your website will be, only " + totalCost + " dollars!");
}
webServices()