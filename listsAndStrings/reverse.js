const readline = require("readline-sync")

// Write function that reverses a list of numbers
const firstPrompt = readline.question('Give me a list of numbers: '); // eg. 1,2,3
const numbers = firstPrompt.split(',').map(x => parseInt(x));

// Your code here...

console.log('The reverse list is:' + '...');

