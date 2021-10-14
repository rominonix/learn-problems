const readline = require("readline-sync")

// Write function that translates a text to Pig Latin and back. English is translated to Pig Latin by taking 
// the first letter of every word, moving it to the end of the word and adding ‘ay’. “The quick brown fox” 
// becomes “Hetay uickqay rownbay oxfay”.
const firstPrompt = readline.question('Give me a sentence: '); // eg. The quick brown fox
const words = firstPrompt.split(' ');

// Your code here...

console.log('Translated:' + '...');

