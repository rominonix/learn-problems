const readline = require("readline-sync")

// Given an array of numbers, find all pair of numbers whose sum is equal to a given number
// eg. 1,2,3,4,5,6 and 6 -> [2, 4], [1, 5]
const firstPrompt = readline.question('Give me a list of numbers: '); // eg. 1,2,3,4,5,6
const numbers = firstPrompt.split(',').map(x => parseInt(x));
const secondPrompt = readline.question('Pairs should be equal to: '); // eg. 6
const sum = parseInt(secondPrompt);

// Your code here...

console.log('The pairs that equals ' + sum + ' are:' + '...');

