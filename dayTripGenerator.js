"use strict"

//List variables
//I want entertainment to be randomly selected for my day trip.
//I want a location to be randomly selected for my day trip.
//I want transportation to be randomly selected for my day trip.
//I want a restaurant to be randomly selected for my day trip.
//Add variable for output.

//Learn how to randomize. 

//Combine all variables into one output.
//Ability to reroll output.



//User decides if the output is or is not "success"
//Display trip info to console log.
//Each function should hold a Single Responsibility. "One action"


var destination = ["Austin", "Houston", "Dallas", "San Antonio"];
var entertainment = ["Fly kites", "Dancing", "Arcade", "Skydiving"];
var transportation = ["PogoStick", "Teleport", "Jetpack", "Crabwalk"];
var restaurant = ["Spock Burgers", "Krusty Krab", "Torchy's", "Taco Bell"];
var dayTrip = [];


function random(){
    return Math.floor(Math.random() * 4);
}



let randomIndex = random();
console.log(randomIndex);

console.log(destination[randomIndex]);

function findEntertainment(){

}



function useProgram(){

var findDestination = ("");

    
    for(var i = 0; i < location.length; i++) {
        dayTrip.push(random);
        



    }
    console.log ("Our suggested trip is: " + dayTrip);
}

