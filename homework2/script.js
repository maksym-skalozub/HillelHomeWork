//task 1(for)//
const sentenceHelloWorld = "Hello world!";
const words = sentenceHelloWorld.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}

console.log(words.join(" "));

//task 1(while)//
const sentenceHelloWorld2 = "Hello world!";
const words2 = sentenceHelloWorld.split(" ");

let i = 0;
while (i < words2.length) {
    words2[i] = words2[i][0].toUpperCase() + words2[i].substring(1);
    i++;
}

console.log(words2.join(" "));

//task 2(for)//
function isNum(val){
    return !isNaN(val)
  }

const symbols = "a123";
const typesArray = [];

for (let i = 0; i < symbols.length; i++) {
    if (isNum(symbols[i])) {
        typesArray.push("number");
    }
    else {
        typesArray.push("string");
    }
}

console.log(typesArray.join());

//task 2(while)//
const symbols2 = "a123";
const typesArray2 = [];

let j = 0;
while (j < symbols2.length) {
    if (isNum(symbols2[j])) {
        typesArray2.push("number");
    }
    else {
        typesArray2.push("string");
    };
    j++;
}
console.log(typesArray2);

//task 3(for)//
for (let i = 13; i > 2; i--) {
    if (i%2 == 0) {
        console.log(`${i} is even`)
    }
    else {
        console.log(`${i} is odd`)
    }
}
//task 3(while)//
let x = 13
while (x > 2){
    if (x%2 == 0) {
        console.log(`${x} is even`)
    }
    else {
        console.log(`${x} is odd`)
    }
    x--
}
