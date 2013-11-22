// FUNCTIONS - WACKY  Harmony Cornett November 21, 2013

//this changes the css of your body tag to be yellow
document.querySelector("body").style.backgroundColor= "yellow";

//ARE WE THERE YET? this will show how many miles one can go on how many gallons of gas they have.  Also their fuel economy.

function milesToGo (){
	var milesDriven = 12;
	var totalMiles = 25;
	var milesLeft = milesDriven - totalMiles;
	console.log("You drove " + milesDriven + " miles. You have " + milesLeft + "miles left");
}
milesToGo()
