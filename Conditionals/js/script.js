// Basic Conditional Statement- Relational Expressions - Conditions with Expressions

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF11";

var kidHeight = 48;
var minHeight = 52;

//if the child is old enough, print to the console "You can ride!"
//if the kid os over 48 inches in height
if(kidHeight > minHeight){
	//code performed if condition is true
	console.log("You can ride the coaster!");
}
else{
	//code performed if condition is false
		console.log("Sorry kid you've got some growing to do first");
}