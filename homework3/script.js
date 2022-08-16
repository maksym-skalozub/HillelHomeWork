//task 1////==========================================//
console.log("//task 1////==========================================//")
const usersArray = [
    {
      name: "John",
      balance: '2000$',
      friends: [
        {
        name: "Robert",
        balance: '1000$',
        },
        {
        name: "Kate",
        balance: '0$',
        },
        ],
        },
    {
      name: "Isaac",
      balance: '20000$',
      friends: [
        {
        name: "Bob",
        balance: '2000$',
        },
        {
        name: "Robert",
        balance: '150000$',
        },
        ],
        },
    {
      name: "Jane",
      balance: '200$',
      friends: [
        {
        name: "Kate",
        balance: '5000$',
        },
        {
        name: "Anne",
        balance: '1234$',
        },
        {
        name: "Bob",
        balance: '300$',
        },
        ],
        },
    {
      name: "Russell",
      balance: '100$',
      friends: [],
        },
   ];


let richestUser = "";
let balance = 0;
for (let i = 0; i < usersArray.length; i++){
    if (usersArray[i].balance.slice(0, -1) > balance ){
        richestUser = usersArray[i].name;
        balance = Number(usersArray[i].balance.slice(0, -1));
    }
}

console.log(richestUser)

//task 2////==========================================//
console.log("//task 2////==========================================//")
const usersArray2 = [
    {
      name: "John",
      balance: '2000$',
      friends: [
        {
        name: "Robert",
        balance: '1000$',
        },
        {
        name: "Kate",
        balance: '0$',
        },
        ],
        },
    {
      name: "Isaac",
      balance: '20000$',
      friends: [
        {
        name: "Bob",
        balance: '2000$',
        },
        {
        name: "Robert",
        balance: '150000$',
        },
        ],
        },
    {
      name: "Jane",
      balance: '200$',
      friends: [
        {
        name: "Kate",
        balance: '5000$',
        },
        {
        name: "Anne",
        balance: '1234$',
        },
        {
        name: "Bob",
        balance: '300$',
        },
        ],
        },
    {
      name: "Russell",
      balance: '100$',
      friends: [],
        },
   ];


usersArray2.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

console.log(usersArray2);

//task 3////==========================================//
console.log("//task 3////==========================================//")
const usersArray3 = [
    {
      name: "John",
      balance: '2000$',
      friends: [
        {
        name: "Robert",
        balance: '1000$',
        },
        {
        name: "Kate",
        balance: '0$',
        },
        ],
        },
    {
      name: "Isaac",
      balance: '20000$',
      friends: [
        {
        name: "Bob",
        balance: '2000$',
        },
        {
        name: "Robert",
        balance: '150000$',
        },
        ],
        },
    {
      name: "Jane",
      balance: '200$',
      friends: [
        {
        name: "Kate",
        balance: '5000$',
        },
        {
        name: "Anne",
        balance: '1234$',
        },
        {
        name: "Bob",
        balance: '300$',
        },
        ],
        },
    {
      name: "Russell",
      balance: '100$',
      friends: [],
        },
   ];


let summOfUsers = 0;
for (let i = 0; i < usersArray3.length; i++){
    summOfUsers+= Number(usersArray3[i].balance.slice(0, -1));
}

console.log(summOfUsers);

//task 4////==========================================//
console.log("//task 4////==========================================//")
const usersArray4 = [
    {
      name: "John",
      balance: '2000$',
      friends: [
        {
        name: "Robert",
        balance: '1000$',
        },
        {
        name: "Kate",
        balance: '0$',
        },
        ],
        },
    {
      name: "Isaac",
      balance: '20000$',
      friends: [
        {
        name: "Bob",
        balance: '2000$',
        },
        {
        name: "Robert",
        balance: '150000$',
        },
        ],
        },
    {
      name: "Jane",
      balance: '200$',
      friends: [
        {
        name: "Kate",
        balance: '5000$',
        },
        {
        name: "Anne",
        balance: '1234$',
        },
        {
        name: "Bob",
        balance: '300$',
        },
        ],
        },
    {
      name: "Russell",
      balance: '100$',
      friends: [],
        },
   ];


for (let i = 0; i < usersArray4.length; i++){
    if (usersArray4[i].name === "Russell") {
        usersArray4.splice(i, 1);
    }
}

console.log(usersArray4)

//task 5////==========================================//
console.log("//task 5////==========================================//")
const usersArray5 = [
    {
      name: "John",
      balance: '2000$',
      friends: [
        {
        name: "Robert",
        balance: '1000$',
        },
        {
        name: "Kate",
        balance: '0$',
        },
        ],
        },
    {
      name: "Isaac",
      balance: '20000$',
      friends: [
        {
        name: "Bob",
        balance: '2000$',
        },
        {
        name: "Robert",
        balance: '150000$',
        },
        ],
        },
    {
      name: "Jane",
      balance: '200$',
      friends: [
        {
        name: "Kate",
        balance: '5000$',
        },
        {
        name: "Anne",
        balance: '1234$',
        },
        {
        name: "Bob",
        balance: '300$',
        },
        ],
        },
    {
      name: "Russell",
      balance: '100$',
      friends: [],
        },
   ];


for (let i = 0; i < usersArray5.length; i++){
    if (usersArray5[i].name === "Isaac") {
        usersArray5.splice(i, 1);
    }
}

console.log(usersArray5)

//task 6////==========================================//
console.log("//task 6////==========================================//")
const usersArray6 = [
    {
      name: "John",
      balance: '2000$',
      friends: [
        {
        name: "Robert",
        balance: '1000$',
        },
        {
        name: "Kate",
        balance: '0$',
        },
        ],
        },
    {
      name: "Isaac",
      balance: '20000$',
      friends: [
        {
        name: "Bob",
        balance: '2000$',
        },
        {
        name: "Robert",
        balance: '150000$',
        },
        ],
        },
    {
      name: "Jane",
      balance: '200$',
      friends: [
        {
        name: "Kate",
        balance: '5000$',
        },
        {
        name: "Anne",
        balance: '1234$',
        },
        {
        name: "Bob",
        balance: '300$',
        },
        ],
        },
    {
      name: "Russell",
      balance: '100$',
      friends: [],
        },
   ];


let userHarry = {name: "Harry", balance: "500$"};
for (let i = 0; i < usersArray6.length; i++){
    if (usersArray6[i].name === "John") {
        usersArray6.splice(i+1, 0, userHarry);
        break;
    }
}

console.log(usersArray6)

//task 7////==========================================//
console.log("//task 7////==========================================//")
const usersArray7 = [
    {
      name: "John",
      balance: '2000$',
      friends: [
        {
        name: "Robert",
        balance: '1000$',
        },
        {
        name: "Kate",
        balance: '0$',
        },
        ],
        },
    {
      name: "Isaac",
      balance: '20000$',
      friends: [
        {
        name: "Bob",
        balance: '2000$',
        },
        {
        name: "Robert",
        balance: '150000$',
        },
        ],
        },
    {
      name: "Jane",
      balance: '200$',
      friends: [
        {
        name: "Kate",
        balance: '5000$',
        },
        {
        name: "Anne",
        balance: '1234$',
        },
        {
        name: "Bob",
        balance: '300$',
        },
        ],
        },
    {
      name: "Russell",
      balance: '100$',
      friends: [],
        },
   ];


let userConor = {name: "Conor", balance: "2500$"};
usersArray7.push(userConor);

console.log(usersArray7)

//task 8////==========================================//
console.log("//task 8////==========================================//")
const usersArray8 = [
    {
      name: "John",
      balance: '2000$',
      friends: [
        {
        name: "Robert",
        balance: '1000$',
        },
        {
        name: "Kate",
        balance: '0$',
        },
        ],
        },
    {
      name: "Isaac",
      balance: '20000$',
      friends: [
        {
        name: "Bob",
        balance: '2000$',
        },
        {
        name: "Robert",
        balance: '150000$',
        },
        ],
        },
    {
      name: "Jane",
      balance: '200$',
      friends: [
        {
        name: "Kate",
        balance: '5000$',
        },
        {
        name: "Anne",
        balance: '1234$',
        },
        {
        name: "Bob",
        balance: '300$',
        },
        ],
        },
    {
      name: "Russell",
      balance: '100$',
      friends: [],
        },
   ];

const usersAndFriendsArray = [];
function myFunctionOutputUsersAndFriends(users, usersAndFriends) {
    for (let i = 0; i < users.length; i++){
        usersAndFriends.push(users[i]);
        if (users[i].friends){
            myFunctionOutputUsersAndFriends(users[i].friends, usersAndFriends);
        }
    }
    return usersAndFriends;
}

myFunctionOutputUsersAndFriends(usersArray8, usersAndFriendsArray);

const uniqueUsersAndFriends = []
const unique = usersAndFriendsArray.filter(element => {
    const isDuplicate = uniqueUsersAndFriends.includes(element.name);
  
    if (!isDuplicate) {
      uniqueUsersAndFriends.push(element.name);
  
      return true;
    }
  
    return false;
  });

console.log(unique);

//task 9////==========================================//
console.log("//task 9////==========================================//")
const usersArray9 = [
    {
      name: "John",
      balance: '2000$',
      friends: [
        {
        name: "Robert",
        balance: '1000$',
        },
        {
        name: "Kate",
        balance: '0$',
        },
        ],
        },
    {
      name: "Isaac",
      balance: '20000$',
      friends: [
        {
        name: "Bob",
        balance: '2000$',
        },
        {
        name: "Robert",
        balance: '150000$',
        },
        ],
        },
    {
      name: "Jane",
      balance: '200$',
      friends: [
        {
        name: "Kate",
        balance: '5000$',
        },
        {
        name: "Anne",
        balance: '1234$',
        },
        {
        name: "Bob",
        balance: '300$',
        },
        ],
        },
    {
      name: "Russell",
      balance: '100$',
      friends: [],
        },
   ];


for (let i = 0; i < usersArray9.length; i++){
    if (Number(usersArray9[i].balance.slice(0, -1)) > 2000 ){
        console.log(usersArray9[i])
    }
}


//task 10////==========================================//
console.log("//task 10////==========================================//")
const usersArray10 = [
    {
      name: "John",
      balance: '2000$',
      friends: [
        {
        name: "Robert",
        balance: '1000$',
        },
        {
        name: "Kate",
        balance: '0$',
        },
        ],
        },
    {
      name: "Isaac",
      balance: '20000$',
      friends: [
        {
        name: "Bob",
        balance: '2000$',
        },
        {
        name: "Robert",
        balance: '150000$',
        },
        ],
        },
    {
      name: "Jane",
      balance: '200$',
      friends: [
        {
        name: "Kate",
        balance: '5000$',
        },
        {
        name: "Anne",
        balance: '1234$',
        },
        {
        name: "Bob",
        balance: '300$',
        },
        ],
        },
    {
      name: "Russell",
      balance: '100$',
      friends: [],
        },
   ];


let richestUserIncludeFriends = {name: "", balance: 0};
function myFunctionRichestUser(users, richest) {
    for (let i = 0; i < users.length; i++){
        if (users[i].balance.slice(0, -1) > richest.balance ){
            richest.name = users[i].name;
            richest.balance = Number(users[i].balance.slice(0, -1));
        }
        if (users[i].friends){
            myFunctionRichestUser(users[i].friends, richest);
        }
    }
    return richest
}

myFunctionRichestUser(usersArray10, richestUserIncludeFriends);

console.log(richestUserIncludeFriends.name);


//task 11////==========================================//
console.log("//task 11////==========================================//")
const usersArray11 = [
    {
      name: "John",
      balance: '2000$',
      friends: [
        {
        name: "Robert",
        balance: '1000$',
        },
        {
        name: "Kate",
        balance: '0$',
        },
        ],
        },
    {
      name: "Isaac",
      balance: '20000$',
      friends: [
        {
        name: "Bob",
        balance: '2000$',
        },
        {
        name: "Robert",
        balance: '150000$',
        },
        ],
        },
    {
      name: "Jane",
      balance: '200$',
      friends: [
        {
        name: "Kate",
        balance: '5000$',
        },
        {
        name: "Anne",
        balance: '1234$',
        },
        {
        name: "Bob",
        balance: '300$',
        },
        ],
        },
    {
      name: "Russell",
      balance: '100$',
      friends: [],
        },
   ];


const usersFriends = []
for (let i = 0; i < usersArray11.length; i++){
    usersFriends.push(usersArray[i].friends);
}
console.log(usersFriends)
const usersFriendNames = []
for (let i = 0; i < usersFriends.length; i++){
    usersFriendNames.push([])
    for (let j = 0; j <usersFriends[i].length; j++){
        usersFriendNames[i].push(usersFriends[i][j].name)
    }
}
console.log(usersFriendNames)
for (let i = 0; i < usersFriendNames.length; i++){
    for (let j = i+1; j < usersFriendNames.length; j++){
        const intersection = usersFriendNames[i].filter(element => usersFriendNames[j].includes(element));
        console.log(intersection)
        if (intersection != "") {
            console.log(`${usersArray11[i].name} and ${usersArray11[j].name} have mutual friend ${intersection}`)
        }
    }
}

//task 12////==========================================//
console.log("//task 12////==========================================//")

const arr1 = [10, 'a', "5", 5, 1]; 
const arr2 = [10, 'a', 5, 5, 1];

let result = true
for (let i = 0; i < arr1.length; i++){
    if (arr1[i] !== arr2[i]){
        result = false;
        break;
    }
}
if (result) {
    console.log(`${arr1} equal ${arr2}`)
} else {
    console.log(`${arr1} not equal ${arr2}`)
}

//task 13////==========================================//
console.log("//task 13////==========================================//")

function palindrome(str) {
    const re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    const len = str.length;
    for (let i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }

console.log(palindrome("Hello world"));

console.log(palindrome("Was it a car or a cat I saw?"));
