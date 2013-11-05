// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF11";

//Tire Pressure I

var tirePressure = new Array ();
tirePressure[0] = 32;
tirePressure[1] = 56;
tirePressure[2] = 28;
tirePressure[3] = 17;
var avgTirePressure = 32

if(tirePressure >= 32){
//This is what is the result of the if statement combined with the variable.
	console.log("The tires pass spec!");
}else{
//If the first statement is not true it will register as false and this will occur.
	console.log("Get your tires checked out!");
}
