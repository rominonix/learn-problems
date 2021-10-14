const readline = require("readline-sync")

// Write a function that takes a list of strings an prints them, one per line, in a rectangular frame. 
// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

const firstPrompt = readline.question('Give me a list of strings: '); // eg. Hello,World,in,a,frame
const strings = firstPrompt.split(',');

// Your code here...

console.log('*********' + '....');

