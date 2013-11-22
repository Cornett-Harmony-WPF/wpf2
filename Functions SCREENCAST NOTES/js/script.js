// JavaScript- Basic Structure = function invocation = Arguments and Parameters
//procedures and Anonymous Functions
//this changes the css of your body tag to be white
document.querySelector("body").style.backgroundColor= "white";


var total = calcArea(30, 20);

function calcArea(w, h){
	var area = w * h;
	return area;
}
console.log(total);