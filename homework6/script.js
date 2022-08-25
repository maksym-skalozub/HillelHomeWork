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
function foo() and dont changed in the end bacause function foo() was initialized fule
when was created but not when was called */

//task 4//===============================================================//
console.log("//task 4//===============================================================//");

let b = 10

function foo2(){
    let b = 20
    console.log(b)
}

b = 30

foo2();
/* the same idea like in task 3 (function foo2() was initialized fule when
was created include variabel inside this function)*/

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
  
    return function() {
      return count++;
    };
  }

let counter = myCounter();

console.log(counter());
console.log(counter());
