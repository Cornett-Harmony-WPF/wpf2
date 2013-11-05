// Conditionals Wacky
// Harmony Cornett November 3, 2013

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF11";

//This will calculate whether or not I have enough in my budget, after bills, to buy a flat-screen TV.
//this is my totalBills variable, it shows the money going out.
var totalBills = 1400;
//this is my totalIncome variable, it shows my money coming in.
var totalIncome = 1500.00;
//this is the actual cost of the tv variable.  It is 500 dollars.
var costOfTv = 500.00;
//this is the 
var leftOver = totalIncome - totalBills;

if(leftOver >= 500){
//This is what is the result of the if statement combined with the variable.
	console.log("You have " + totalBills + " going out, you have " + totalIncome + " coming in, so you can buy the TV!");
}else{
//If the first statement is not true it will register as false and this will occur.
	console.log("You have " + totalBills + " going out, you have " + totalIncome + " coming in, so keep Saving!");
}