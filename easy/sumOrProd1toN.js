const readline = require("readline-sync")

// Write a program that asks the user for a number n and gives them the possibility to choose between 
// computing the sum and computing the product of 1,…,n.
const firstPrompt = readline.question('What is n? ');
const secondPrompt = readline.question('Should we do sum or product? ');

// Your code here...

console.log('The ' + 'sum/prod' + 'of 1 to n is' + '...');

