// Expressions Assignment PERSONAL
//Harmony Cornett November 3, 2103

//This will calculate how many miles I drive in a month.
var monthName = new Array();
monthName[0] = "none"
monthName[1] = "January"
monthName[2] = "Febuary"
monthName[3] = "March"
monthName[4] = "April"
monthName[5] = "May"
monthName[6] = "June"
monthName[7] = "July"
monthName[8] = "August"
monthName[9] = "September"
monthName[10] = "October"
monthName[11] = "November"
monthName[12] = "December"

var month = new Array();
month[0] = 0
month[1] = 31
month[2] = 31
month[3] = 31
month[4] = 30
month[5] = 31
month[6] = 30
month[7] = 31
month[8] = 31
month[9] = 30
month[10] = 31
month[11] = 30
month[12] = 31
var milesPerDay = 75;
var inputMonth = 4;
var milesPerMonth= milesPerDay * month[inputMonth];


console.log("I drive " + milesPerMonth + " miles in the month of " + monthName[inputMonth] + ".");
