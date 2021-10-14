const readline = require("readline-sync")

// Write a function that checks whether an element occurs in a list.
const firstPrompt = readline.question('Give me a list of numbers: '); // eg. 1,2,3
const numbers = firstPrompt.split(',').map(x => parseInt(x));
const secondPrompt = readline.question('Give me a number to check for: '); // eg. 2

// Your code here...

console.log('The number ' + '...' + 'does (not) occur in the list ' + '...');

