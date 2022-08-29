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

function Animal(name, kind, color){
    this.name = name;
    this.kind = kind;
    this.color = color;
}

const catMars = new Animal("Mars", "cat", "black");
const chinchillaQuick = new Animal("Quick", "chinchilla", "grey");

console.log(typeof catMars, catMars.name, catMars.kind, catMars.color);
console.log(typeof chinchillaQuick, chinchillaQuick.name, chinchillaQuick.kind, chinchillaQuick.color)

//task 3//=========================================================//
console.log("//task 3//=========================================================//");

function sumOfDigits(num){
    let snum = String(num);
    console.log(snum) //console.log(152092, 52092, 2092, 92, 2)
    if (snum.length === 1){ 
        return Number(snum)
    }else{ 
        return Number(snum[0]) + sumOfDigits(Number(snum.slice(1)))
    }
    
}

console.log(sumOfDigits(152092))// return 19
