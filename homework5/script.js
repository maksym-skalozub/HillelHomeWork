//task 1//=============================================//
console.log("//task 1//=============================================//");

const sentence = "hello world!";

function upperLetterForWords(str){
    const wordsOfString = str.split(" ");
    wordsOfString.forEach((element, index, array) => {
        array[index] = element[0].toUpperCase() + element.slice(1)
    });
    return wordsOfString.join(" ")
}

const newSentence = upperLetterForWords(sentence);
console.log(newSentence);

//task 2//=============================================//
console.log("//task 2//=============================================//");

const randomArray = ['hi', '', 'wow', null, ['I am not a string you are looking for'], 'I am', 123 ];

function lengthOfStringsInArray(array){
    let result = [];
    array.forEach(element => {
        if(typeof element === typeof "" && element.length > 0){
            result.push(element.length);
        }
    })
    return result
}

console.log(lengthOfStringsInArray(randomArray));

//task 3//=============================================//
console.log("//task 3//=============================================//");

const sentence2 = "Hello world";

function countOfVowels(str){
    const vowels = "AaEeIiOoUuYy";
    let result = 0;
    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i])){
            result++
        }
    }
    return result
    };
    

console.log(countOfVowels(sentence2));

//task 4//=============================================//
console.log("//task 4//=============================================//");

function createUser(role, name){
    return {role: role, name: name};
}

const newUser1 = createUser("admin", "John");
const newUser2 = createUser("superadmin", "Abraham");

console.log(newUser1, newUser2);

//task 5//=============================================//
console.log("//task 5//=============================================//");

const stringOfLetters = 'aabbbccccdddddee';

function countEachLetter(str){
    let result="";
    for (let i = 0; i< str.length; i++){
        let count = 0;
        if (result.includes(str[i])){
            continue;};
        for (let j = i; j< str.length; j++){
            if (str[j] === str[i]){
                count++;
            };
        };
        result+=`${count}`+str[i];
    };
    return result;
};

console.log(countEachLetter(stringOfLetters));

//task 6//=============================================//
console.log("//task 6//=============================================//");

const arrayOfNumbers = [1,2,3,4,NaN, 0, 5, 10]

function countOddAndEven(arr){
    let odd= 0;
    let even= 0;
    arr.forEach(element => {
        if(element>0){
            if (element%2 === 0) {
                even++;
            } else if (element%2 !== 0) {
                odd++;
            }
        }
    })
    return `contains ${even}even and ${odd}odd`
};

console.log(countOddAndEven(arrayOfNumbers));

//task 7//=============================================//
console.log("//task 7//=============================================//");

function exchanger(give, take){
    if (give === "dollar"){
        return take*0.027;
    } else if(give ==="euro"){
        return take*0.027;
    } else if(give ==="pound"){
        return take*0.023;
    } else if(give ==="yen"){
        return take*3.72;
    } else if(give ==="franc"){
        return take*0.026;
    } else if(give ==="krona"){
        return take*0.29;
    }else if(give ==="bitcoin"){
        return take*0.0000013;
    }
}

const unitedStatesDollar = exchanger("dollar", 1000);
const euro = exchanger("euro", 2300);
const poundSterling = exchanger("pound", 20000);
const japaneseYen = exchanger("yen", 100);
const swissFranc = exchanger("franc", 1500);
const swedishKrona = exchanger("krona", 300);
const binanceBitcoin = exchanger("bitcoin", 2500000);

console.log(unitedStatesDollar, euro, poundSterling, japaneseYen, swissFranc,
    swedishKrona, binanceBitcoin);

//task 8//=============================================//
console.log("//task 8//=============================================//");

const sentence3 = "hello world"

function sentenceWithTabs(str){
    let result = ""
    for (let i =0; i<str.length; i++){
        if (i === 0){
            result += str[i]
        } else if (str[i] === " "){
            continue
        } else {
            result += " "+str[i]
        }
    }
    return result
}

console.log(sentenceWithTabs(sentence3));

//task 9//=============================================//
console.log("//task 9//=============================================//");

function getHours(years){
    return 8760*Number(years.replace(/\D/g, ''));
}

console.log(getHours("5 years"));

//task 10//=============================================//
console.log("//task 10//=============================================//");

const sentence4 = "hello world";

function trim(str, len){
    let result = str.slice(0, len)
    if (len<str.length){
        return result+"..."
    } else {
        return result
    }
}

console.log(trim(sentence4, 3))
