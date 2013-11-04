// ASSIGNMENT EXPRESSIONS WACKY
//Harmony Cornett November 4, 2013 

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "blue";

//This will be a calculation of how many gallon buckets of paint I will need to paint a 4 wall, 16ft by 16ft room in my house.
var walls = 4;
var wallSize = 20;
var gallonCovers = 20;
var wallAreas = walls * wallSize;
var totalGallonBucketsNeeded = wallAreas * gallonCovers;

console.log("Each gallon bucket of paint covers " + gallonCovers + " feet of wall space." + " So, you should need " + totalGallonBucketsNeeded + " gallon buckets of paint for your " + wallAreas + " feet of wall space.");

