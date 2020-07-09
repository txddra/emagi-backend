const symbols = require('./emagi-symbols.js');
const words = require('./emagi-words.js')

// const emagify = function(userInput){
//     // our output is going to be put in a new array
//     let result = [];
//     // loop through the current array
//     for(let i = 0; i < userInput.length; i++){
// // push the result of the symbols into the new array
// result.push(userInput[i])    
// }

//     return result;
// }


const emagify = function(userInput){
    // our output is going to be put in a new array
    let result = [];
    // loop through the current array
    for(let i = 0; i < userInput.length; i++){
//if the letters of the word entered is recognized then push out the symbol related
if(words[i] === userInput){
result.push(symbols[i])
}// if the user input is not a word that is recognized then leave it alone
//       else if(words[i]!== userInput[i]){
//        result.push(userInput[i])
//       }
// result.push(symbols.indexOf(userInput[i]))    
// }elseif(){
       
}return result;
 
}


// const arraySymbols =[ 
// '😁',
// '😎',
// '😆',
// '😠',
// '😭',
// '😜',]

// const arrayWords =[
// 'smile',
// 'cool',
// 'laugh',
// 'angry',
// 'cry',
// 'wink']

// const certainArr =
// [
//     'cool',
//     'cry'
// ]
module.exports = emagify;