// Functions_Personal Harmony Cornett November 21, 2013

//this changes the css of your body tag to be yellow
document.querySelector("body").style.backgroundColor= "yellow";
//This statement will be a ternary with a function with if and else.  The scenerio is about yarn and knitting.  How many balls of yarn will I need if I am knitting a blanket with any given length and width.  If 1 ball of yarn = 3 yards or 9 feet of material.

function yarnBalls() {
    var oneBall = 9;
    var blanketSize;
	var yarnBalls = blanketSize * oneBall; 
    if (blanketSize >= oneBall){
        console.log("Your blanket is " + blanketSize + " You will need " + yarnBalls + " balls of yarn");
    } else if(blanketSize <= oneBall) {
        console.log("Your blanket is " + blanketSize + " You will need " + yarnBalls + " balls of Yarn");
    }
}
yarnBalls();


