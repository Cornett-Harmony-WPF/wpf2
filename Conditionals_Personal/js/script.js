// JavaScript

//this changes the css of your body tag to be green
document.querySelector("body").style.backgroundColor= "red";

//This will be about how many people to invite to a party vs. how many have already been invited.  Max occupancy is 200 people.  I have only x friends.  How many people do I have left to invite.  Based on how many friends you have will be the number of people you will need to invite, all the while making sure you don't go over the max amount of people for the club.  Whew!  Hope I explained that well.

var howManyFriendsYouHave = 200;
var invited = 80;
var maxAllowed = 200;
var stillNeedToInvite = maxAllowed - invited;

console.log("I have " + howManyFriendsYouHave + " I have already invited " + invited + "people to my party, so that means I have " + stillNeedToInvite + "people left to invite.");
