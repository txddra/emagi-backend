
const symbols = require('./emagi-symbols.js');
const words = require('./emagi-words.js');

/* our function will: the search will take in a str instead of an array
find the str inside of the words and return the symbol
*/

const emagiSearch = function(userInput){
    //create an empty array
    let result =[];
    //we're going though every element of the words array
for(let i = 0; i < words.length;i++){
//     //this will compare the user input with each element in the words array
// if(userInput === words[i]){
//     // this push the element at that index from the symbols array into the new array
// result.push(symbols[i])

//checks if the element of the array includes the user input
/*else*/ if(words[i].includes(userInput)){
//push the element at that index from the symbols array into the new array.
result.push(symbols[i])
}
// }

} return result
} 
module.exports = emagiSearch;