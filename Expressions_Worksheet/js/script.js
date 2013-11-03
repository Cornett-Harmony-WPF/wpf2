// JavaScript- Expressions Worksheet
// Harmony Cornett  November 3, 2013

//Dog Years

//declare and define variables
var age = 10;
//the mathmatical equation for the variables to output the correct integer.
var x =  age * 7;
//this prints the cancatinated string to the console.
console.log("Sparky is " + x + " human years old which is " + age + " in dog years. ")


//Slice of pie part I

//declaring and defining the variables
var slices = 6;
var people = 12;
var totalPizzas = 5;
var slicesEaten = totalPizzas / people * 6;
//writing to the console
console.log("Each person will get " + slicesEaten + " slices each. ");

//Slice of pie Part II

//declaring and defining the variables
var slices = 6;
var people = 12;
var totalPizzas = 10;
var slicesEaten = totalPizzas / people * 6;

//writing to the console
console.log("Sparky got " + slicesEaten % 12 + " slices of pizza. ");




//Average Shopping Bill

//declaring and defining array and variables
var i;
var groceries = new Array();
groceries[0] = "146.72";
groceries[1] = "57.98";
groceries[2] = "345.79";
var totalAmountSpent = new Array(groceries[0] + groceries[1] + groceries[2]);
var averageSpending = (totalAmountSpent / 3);
{
console.log("You have spent a total of $" + totalAmountSpent +" on groceries over 5 weeks. " + " That is an average of $ " + averageSpending + " per week");
}

//Discounts
var originalPrice = 20.00;
var discount = 20 / 100;
var description = "shirt";
var salesTaxPercentage = 0.06;
var newPrice = originalPrice - discount;
var finalPrice = newPrice - salesTaxPercentage;

console.log("Your " + description + " was originally $" + originalPrice + ", but after a " + discount + "% discount, it is now $" + newPrice + " without tax, and $" + finalPrice + " with tax");

