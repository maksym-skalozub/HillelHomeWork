//task 1//
let myName = "Maks";
const myUnchangeableName = "Maks";
myName = "Mark"
alert(myName);
alert(myUnchangeableName);

//task 2//
let user1;
let superUser;
let listActiveUsers;
let isUserActive;

//task 3//
let numbers = [3, 4, 2, 1];

let flowers = new Map();
flowers.set("pink", "Rose");
flowers.set("blue", "Orchid");
flowers.set("yellow", "Lily");

let world = "World";
let strHelloWorld = `Hello ${world}`

//task 4//
/*
let result;
result = 10 < 3;                 //false//
result = "hi" != "hello"         //true//
result = 1 == "1";               //true//
result = null == "null";         //false//
result = null === undefined      //false//
result = 1 === 1 && "hi"         //hi//
result = true && "I love js"     //I love js//
result = 123 && "hi" || "hello"; //hi//
result = 0+ ? true : false;      //SyntaxError: Unexpected token "?"//
result = 1 + 1;                  //2//
result = '12' + '31';            //1231//
result = 3 / '3'                 //1//
result = 10 * 'hello'            //NaN//
result = '13'++;                 //SyntaxError: Invalid left-hand side expression in postfix operation//
result = ++13;                   //SyntaxError: Invalid left-hand side expression in postfix operation//
*/

//task 5(if)//
let user2 = prompt("Please write here your role(regular, admin, superadmin, guest):");

if (user2 == "regular"){
    alert("Hello, regular user")
} else if (user2 == "admin") {
    alert("Hello, admin")
} else if (user2 == "superadmin") {
    alert("Hello, super admin")
} else {
    alert(`Hello, ${user2}`)
}
//task 5(?)//
let user3 = prompt("Please write here your role(regular, admin, superadmin, guest):");

(user3 == "regular") ? alert("Hello, regular user"):
(user3 == "admin") ? alert("Hello, admin"):
(user3 == "superadmin") ? alert("Hello, super admin"):
alert(`Hello, ${user3}`)

//task 5(switch)//
let user4 = prompt("Please write here your role(regular, admin, superadmin, guest):");

switch (user4) {
    case "regular":
      alert("Hello, regular user");
      break;
    case "admin":
      alert("Hello, admin");
      break;
    case "superadmin":
      alert("Hello, super admin");
      break;
    default:
      alert(`Hello, ${user4}`);
  }

//task 6//
let food = prompt("Write your food from yard(apple, bannan, potato, beet, pear, mango, cabbage):");

switch (food) {
    case "apple":
    case "bannan":
    case "pear":
    case "mango":
        alert("I think its Fruit");
        break;
    case "potato":
    case "beet":
    case "cabbage":
        alert("I think its Vegetable");
}