// Functions_Personal Harmony Cornett November 21, 2013

//this changes the css of your body tag to be yellow
document.querySelector("body").style.backgroundColor= "yellow";
//This statement will be a ternary with a function with if and else.  The scenerio is about yarn and knitting.  How many balls of yarn will I need if I am knitting a blanket with any given amount of feet of blanket size. 1 ball of yarn = 3 yards or 9 feet of material.

function yarnBalls () 
{
    var oneBall = 3;
    var blanketSize = 3;
	var yarnBalls = oneBall * blanketSize; 
    if (blanketSize >= oneBall) {
        console.log("Your blanket is " + blanketSize + " feet.  You will need " + yarnBalls + " balls of yarn");
    } else{
        console.log("Your blanket is too large, consider knitting a smaller blanket");
	}
}
yarnBalls();