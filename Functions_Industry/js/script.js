// JavaScript

//this changes the css of your body tag to be yellow
document.querySelector("body").style.backgroundColor= "yellow";

//This is a function with else if statements showing how much it will cost for web design services.

function milesToGo (){
	var milesDriven = 12;
	var totalMiles = 25;
	var milesLeft = totalMiles - milesDriven;
	console.log("You drove " + milesDriven + " miles. You have " + milesLeft + " miles left");
}
milesToGo()