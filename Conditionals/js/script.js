// Basic Conditional Statement- Relational Expressions - Conditions with Expressions
//else if chain

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "#00FF11";

var kidHeight = 48;
var minHeight = 52;
var wParentHeight = 45; //the height of the kid with the parent

//if the child is old enough, print to the console "You can ride!"
//if the kid os over 48 inches in height
if(kidHeight > minHeight){
	//code performed if condition is true
	console.log("You can ride the coaster!");
}
else if(kidHeight > wParentHeight){
	//you can ride with a parent present
		console.log("You can ride, but only with a parent present");
}else{
	//sorry you have growing to do first
	console.log("Sorry kid you've got some growing to do first");
}