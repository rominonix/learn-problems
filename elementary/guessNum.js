const readline = require("readline-sync")

// Write a guessing game where the user has to guess a secret number. After every guess the program tells 
// the user whether their number was too large or too small. At the end the number of tries needed should 
// be printed. It counts only as one try if they input the same number multiple times consecutively.
const firstPrompt = readline.question('What do you guess? ');

// Your code here...

console.log('Correct! Number of tries was:' );

