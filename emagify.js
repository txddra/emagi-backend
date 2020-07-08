const symbols = require('./emagi-symbols.js');
const words = require('./emagi-words.js')

const emagify = function(arr){
    let result = [];
    // loop through the current arr
    for(let i = 0; i < arr.length; i++){
// push the result of the symbols into the new array
result.push(arr[i])    
}

    return result;
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