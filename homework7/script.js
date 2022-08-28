//task 1//=========================================================//
console.log("//task 1//=========================================================//");

const user = {
    name: 'Bob',
    sayHi: function () {
        console.log(`Hi I am ${this.name}`)
    }
}
user.sayHi() //Hi I am Bob
const greetingsFunc = user.sayHi;
greetingsFunc(); //Hi I am undefined
const user2 = {
    name: 'Jane',
    sayHi: greetingsFunc
};

user2.sayHi() //Hi I am Jane

//task 2//=========================================================//
console.log("//task 2//=========================================================//");

const animal = new Function("name", "kind", "color", "return {name:name, kind: kind, color:color}");

const catMars = animal("Mars", "cat", "black");
const chinchillaQuick = animal("Quick", "chinchilla", "grey");

console.log(typeof catMars, catMars.name, catMars.kind, catMars.color);
console.log(typeof chinchillaQuick, chinchillaQuick.name, chinchillaQuick.kind, chinchillaQuick.color)

//task 3//=========================================================//
console.log("//task 3//=========================================================//");

function sumOfDigits(num){
    let res = 0;
    let snum = String(num);
    for (let i = 0; i <snum.length; i++){
        res+= Number(snum[i]);
    }
    console.log(res) // console.log() every level of recursus
    if (String(res).length > 1){
        return sumOfDigits(res)
    } else{
        return res
    }
}

console.log(sumOfDigits(152092));// console.log(19, 10, 1) return 1

