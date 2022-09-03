//task 1//====================================================//
console.log("//task 1//====================================================//");
const numbersArray = [1,1,2,3,4,5,5,5,6];

const uniqueNumbersArray = [...new Set(numbersArray)];//spread operator ... transform the set back into an Array//
console.log(uniqueNumbersArray);

//task 2//====================================================//
console.log("//task 2//====================================================//");

const userBob = {
    name: "Bob",
};

const userJane = {
    name: "Jane",
};

let mapGreetings = new Map();
mapGreetings.set(userBob,`Hello ${userBob.name} nice to see you`);
mapGreetings.set(userJane,`How your kids doing, ${userJane.name}`);

function greetUser(key){
    return mapGreetings.get(key);
};

console.log(greetUser(userBob));
console.log(greetUser(userJane));

//task 3//====================================================//
console.log("//task 3//====================================================//");
function isMap(map){
    return map instanceof Map
}

const map1 = new Map();
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

const obj1 = {
    d: 4, 
    f: 5,
    g: 6,
};

console.log(isMap(map1));
console.log(isMap(obj1));

function convert(obj){
    if (isMap(obj)){
        return Object.fromEntries(obj.entries())
    } else {
        return new Map(Object.entries(obj))
    }
}

console.log(isMap(convert(map1)));
console.log(isMap(convert(obj1)));
