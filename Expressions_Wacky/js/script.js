// ASSIGNMENT EXPRESSIONS WACKY
//Harmony Cornett November 4, 2013 

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "blue";

//This will be a calculation of how many gallon buckets of paint I will need to paint a 4 wall, 16ft by 16ft room in my house.
var walls = 4;
//This tells us that the total wallsize is 20 feet, for one wall variable.
var wallSize = 20;
//This tells us that the gallon bucket covers 20 feet of wall space each bucket
var gallonCovers = 20;
//This tells us that we need to calculate our total gallon buckets needed through cancatinating strings
var totalGallonBucketsNeeded = wallAreas / gallonCovers;
//this is a calculation of the walls multiplied by the wallsize
var wallAreas = wallSize * walls;
//This tells us the final amount of gallon buckets of paint needed for all 4 walls in the room.
var finalBucketsNeeded = wallAreas / gallonCovers;
//This writes to the console
console.log("Each gallon bucket of paint covers " + gallonCovers + " feet of wall space." + " So, you should need " + finalBucketsNeeded + " gallon buckets of paint for your " + wallAreas + " feet of wall space.");

