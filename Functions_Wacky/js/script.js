// FUNCTIONS - WACKY  Harmony Cornett November 21, 2013

//this changes the css of your body tag to be yellow
document.querySelector("body").style.backgroundColor= "yellow";

//ARE WE THERE YET? This is a function that shows how many miles they have driven and how many miles left to go for their road trip.  It is a total of 25 miles long.

function milesToGo (){
	var milesDriven = 12;
	var totalMiles = 25;
	var milesLeft = totalMiles - milesDriven;
	console.log("You drove " + milesDriven + " miles. You have " + milesLeft + " miles left");
}
milesToGo()