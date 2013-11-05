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
//this is the monies that is leftover after the income is subtracted from the bills.
var leftOver = totalIncome - totalBills;

//this is the if statement that says, if the left over monies is greater than or equal to 500 dollars, than you can buy the tv.
if(leftOver >= 500){
//This is what is the result of the if statement combined with the variable explains.
	console.log("You have " + totalBills + " going out, you have " + totalIncome + " coming in, so you can buy the TV!");
}else{
//If the first statement is not true it will register as false and this will occur inside the console.
	console.log("You have " + totalBills + " going out, you have " + totalIncome + " coming in, so keep Saving!");
}