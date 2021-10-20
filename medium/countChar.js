const readline = require("readline-sync")

// Count the occurance of a specific character in a string
const firstPrompt = readline.question('Give me a sentence: '); // eg. The quick brown fox
const secondPrompt = readline.question('Character to count: '); // eg. o

// Your code here...

let char = []
function countChar(firstPrompt, secondPrompt) {
    for(let i = 0; i < firstPrompt.lengt; i++ ){
        if(firstPrompt[i] === secondPrompt){
            char.push(i)
        };
    }
    
}

countChar(firstPrompt, char.length)



console.log('The sentence contains this many instances of ' + firstPrompt, ':' + secondPrompt);

