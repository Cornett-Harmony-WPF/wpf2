// EXPRESSIONS ASSIGNMENT INDUSTRY-SPECIFIC
// Harmony Cornett November 3, 2013

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "white";

//This will demonstrate how to calculate the price of a website with the number of hours spent with the web designer.

var pricePerHour = 50;
var hoursSpent = 15;
var totalCostOfSite = (pricePerHour * hoursSpent);

console.log("We spent " + hoursSpent + " hours on your website." + " Your total cost for the website is $" + totalCostOfSite + ".");