/*This code doesn't work with node.js
const prompt = require('prompt-sync')(); brings back an error for some reason while if I don't use it,
the code works fine in Google's Js console*/

function askTvSeries() {
    function name() {
        return prompt("What's your favorite Tv series?");
    }
    function proYear() {
        return prompt("What year did it start airing?");
    }
    function actors() {
    let actorsList = [];
    let keepAsking = true;
    
    while (keepAsking) {
       
        let userInput = prompt("Which actors are in the series? Please type 'exit' when done.");
        if (userInput === 'exit') {
            keepAsking = false;
        } else {
            actorsList.push(userInput);
        }
    }
    return actorsList;
}

let answers = { 
    "Name" : name(), 
    "Production Year" : proYear(), 
    "Actors" : actors()
  };
return answers;
}
 function randomizeCast(tvSerie) {
    let randomActors = [...tvSerie.Actors]; // I copied the actors array to avoid modifying the original
    /* Durstenfeld shuffle, an optimized version of Fisher-Yates:
    Ex: var i = array.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;*/
    for (let i = randomActors.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // Generate a random index
        let something = randomActors[i];
         randomActors[i] = randomActors[j];
          randomActors[j] = something; // Swap elements
    }
    return randomActors;
}


let tvSeries2 = askTvSeries(); // Get the TV series details
console.log("Original actors:", tvSeries2.Actors);
console.log("Randomized actors:", randomizeCast(tvSeries2));
