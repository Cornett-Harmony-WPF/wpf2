// EXPRESSIONS ASSIGNMENT INDUSTRY-SPECIFIC
// Harmony Cornett November 3, 2013

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "white";

//This will demonstrate how to calculate the price of a website with the number of hours spent with the web designer.

//This is the price I charge per hour of work on her website, it is 50.00 per hour.
var pricePerHour = 50;
//this is my variable to say how many hours we spent on the website design.
var hoursSpent = 15;
//This is the calculation of 50.00 per hour multiplied by 15 hours spent, to give the total cost of the website that I developed for the client.
var totalCostOfSite = (pricePerHour * hoursSpent);

//This writes to the console "We spent 15 hours on your website.  Your total cost for the website is $750." It calculates the total cost of the website with the variables above.
console.log("We spent " + hoursSpent + " hours on your website." + " Your total cost for the website is $" + totalCostOfSite + ".");