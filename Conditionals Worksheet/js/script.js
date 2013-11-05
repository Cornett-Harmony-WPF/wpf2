// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF11";
//This is the variable of the competitor's weight
var weight = 265;
//this is the if condition
if(weight >= 250){
//This is what is the result of the if statement combined with the variable.
	console.log("The competitor qualifies for the heavyweight division.");
}else{
//If the first statement is not true it will register as false and this will occur.
	console.log("The competitor needs to gain some weight.");
}


//Celsius to Fahrenheit converter

//convert a temp to either degrees Celsius or fahrenheit depending on the variable.
var degreef = 21;
var degreec = 0 ;
var degreec = degreec - 32 * 5 / 9;
var degreef = degreef * 9 / 5 + 32;

if (degreef == true){
	console.log("The temperature is " + degreec + "degrees Celsius");
}else{
	console.log("The temperature is " + degreef + "degrees Fahrenheit");
}


//Check the login

var username = "jj";
var password = "4Seattle";
var correctUsername = "Ralphy";
var correctPassword = "4Seattlfe";

if(correctUsername + correctPassword){
	console.log("Welcome " + correctUsername + "!");
}
else if(username === "jj"){
		console.log("User not found. Try again.");
}else{
	console.log("Password does not match our records");
}
