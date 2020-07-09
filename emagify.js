const symbols = require('./emagi-symbols.js');
const words = require('./emagi-words.js')

const emagify = function(userInput){
    // our output is going to be put in a new array
    let result = [];
    // loop through the current array
    for(let i = 0; i < userInput.length; i++){
// if the user input is not a word that is recognized then leave it alone
if(userInput === words[i]){
result.push(symbols[i])
}
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