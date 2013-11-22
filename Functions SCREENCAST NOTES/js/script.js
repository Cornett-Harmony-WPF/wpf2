// JavaScript- Basic Structure = function invocation = Arguments and Parameters

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "white";


function outputMsg(){
	console.log("Hello World");
}

outputMsg();




//var width = 5;

//function definition
function calcArea(){
	var width = 20
	var height = 30
	var area = width * height;
	console.log(area);
}
//console.log(width);
//function call
calcArea();

//functions with parameters
//function call with arguments inside ()
funcName (argument1, argument2);

//function with parameters
function funcName (parameter1, parameter2) {
	//code the function runs
}

calcArea(30, 20);

function calcArea(w, h){//w=30, h=20
	var area = w * h;
}
//passing value (4,5) to age
dogYears(4);
dogYears(5);