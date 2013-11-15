// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "blue";

//Who has RSVP'd and how many still need to, to attend the business office party?

var totalInvites = new Array();
totalInvites[0] = "Viola";
totalInvites[1] = "Symphony";
totalInvites[2] = "Sonata";
totalInvites[3] = "Melody";
totalInvites[4] = "Aria";
totalInvites[5] = "Seattle";
totalInvites[6] = "Sophia";
totalInvites[7] = "Daisy";
totalInvites[8] = "Erica";
totalInvites[9] = "Rhapsody";

var totalRsvp = new Array();
totalRsvp[0] = "Rhapsody"
totalRsvp[1] = "Melody"
totalRsvp[2] = "Symphony"
totalRsvp[3] = "Sonata"

var rsvpdAlready = 4;
var stillNeedToRsvp = totalRsvp - totalInvites;

console.log("There are " + stillNeedToRsvp + "finding out what this is doing + stillNeedToRsvp");




