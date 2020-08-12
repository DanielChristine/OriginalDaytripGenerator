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



randomDestination();
randomEntertainment();
randomTransportation();
randomRestaurant();

/////////////////////////////////////////////////////////////////////
function randomDestination(){
    let randomIndex = random();


    var findDestination = destination[randomIndex];
    dayTrip.push(findDestination);
    return findDestination;
}


function randomEntertainment(){
    let randomIndex = random();


    var findEntertainment = entertainment[randomIndex];
    dayTrip.push(findEntertainment);
    return findEntertainment;
    
}


function randomTransportation(){
    let randomIndex = random();


    var findTransportation = transportation[randomIndex];
    dayTrip.push(findTransportation);
    return findTransportation;
    
}


function randomRestaurant(){
    let randomIndex = random();


    var findRestaurant = restaurant[randomIndex];
    dayTrip.push(findRestaurant);
    
    return findRestaurant;
    
}
////////////////////////////////////////////////////////////////////////////




console.log(dayTrip);


function useProgram(){

var question = prompt("Are you satisfied? Yes or no?");

if (question === "No"){

randomDestination();
randomEntertainment();
randomTransportation();
randomRestaurant();
console.log(dayTrip);

    var question = prompt("Would you like to try again? Yes or No?");
}
            
        
        else{
        console.log(dayTrip);
    }

    console.log ("Our suggested trip is: " + dayTrip);
}

useProgram();


