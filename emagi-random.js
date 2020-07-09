const symbols = require('./emagi-symbols.js');
const words = require('./emagi-words.js')


const emagiRandom = function(input){
//its going to take in an array, and return a random item


//get a random number based on the length of the array. using the random method, taking it from 0 to the length of the array.

//then we return the item at that number's index
return input[Math.floor(Math.random()*input.length)]
}

module.exports =emagiRandom;