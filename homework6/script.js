//task 1//===============================================================//
console.log("//task 1//===============================================================//");

const greetings = "Hello, friend!!!"

function outputGreetings(){
    console.log(greetings);
}

outputGreetings();

//task 2//===============================================================//
console.log("//task 2//===============================================================//");

const myName = "Maks";

function myAnotherName(){
    const myName = "Max";
    console.log(myName);
    //logging the value of the variable that was declared in the function (Max)
}

myAnotherName();

//task 3//===============================================================//
console.log("//task 3//===============================================================//");

var a = 10

function foo1(){
    console.log(a)
}

function bar1() {
    var a = 20;
    foo1();
}

bar1();/* logging the value of the variable (10) that was declared in the start before
function foo() and dont changed in the end bacause function foo() 
took the external variable from the environment in which it was created, 
and not in which it was declared*/

//task 4//===============================================================//
console.log("//task 4//===============================================================//");

let b = 10

function foo2(){
    let b = 20
    console.log(b)
}

b = 30

foo2();
/* recieve value(20) because function foo2() will 
first check its lexical environment inside, before checking its outer */

//task 5//===============================================================//
console.log("//task 5//===============================================================//");

for (let i = 0; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 0)
}

//task 6//===============================================================//
console.log("//task 6//===============================================================//");

function myCounter() {
    let count = 0;
  
    return {function() {
      return this.count++;
    }, count}
  }

let counter = myCounter();

console.log(counter.count);
console.log(counter.function());
console.log(counter.count);
console.log(counter.function());
console.log(counter.count);
console.log(counter.function());
console.log(counter.count);
console.log(counter.function());
