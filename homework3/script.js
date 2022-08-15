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

//task 1////==========================================//
console.log("//task 1////==========================================//")

let richestUser = {name: "", balance: 0};
for (let i = 0; i < usersArray.length; i++){
    if (usersArray[i].balance.slice(0, -1) > richestUser.balance ){
        richestUser.name = usersArray[i].name;
        richestUser.balance = Number(usersArray[i].balance.slice(0, -1));
    }
}

console.log(richestUser.name)

//task 2////==========================================//
console.log("//task 2////==========================================//")

usersArray.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

console.log(usersArray);

//task 3////==========================================//
console.log("//task 3////==========================================//")

let summOfUsers = 0;
for (let i = 0; i < usersArray.length; i++){
    summOfUsers+= Number(usersArray[i].balance.slice(0, -1));
}

console.log(summOfUsers);

//task 4////==========================================//
console.log("//task 4////==========================================//")

for (let i = 0; i < usersArray.length; i++){
    if (usersArray[i].name == "Russell") {
        usersArray.splice(i, 1);
    }
}

console.log(usersArray)

//task 5////==========================================//
console.log("//task 5////==========================================//")

for (let i = 0; i < usersArray.length; i++){
    if (usersArray[i].name == "Isaac") {
        usersArray.splice(i, 1);
    }
}

console.log(usersArray)

//task 6////==========================================//
console.log("//task 6////==========================================//")

let userHarry = {name: "Harry", balance: "500$"};
for (let i = 0; i < usersArray.length; i++){
    if (usersArray[i].name == "John") {
        usersArray.splice(i+1, 0, userHarry);
        break;
    }
}

console.log(usersArray)

//task 7////==========================================//
console.log("//task 7////==========================================//")

let userConor = {name: "Conor", balance: "2500$"};
usersArray.push(userConor);

console.log(usersArray)

//task 8////==========================================//
console.log("//task 8////==========================================//")

function myFunctionOutputUsersAndFriends(users) {
    for (let i = 0; i < users.length; i++){
        console.log(users[i])
        if (users[i].friends){
            myFunctionOutputUsersAndFriends(users[i].friends);
        }
    }
}

myFunctionOutputUsersAndFriends(usersArray);

//task 9////==========================================//
console.log("//task 9////==========================================//")

for (let i = 0; i < usersArray.length; i++){
    if (Number(usersArray[i].balance.slice(0, -1)) > 2000 ){
        console.log(usersArray[i])
    }
}


//task 10////==========================================//
console.log("//task 10////==========================================//")

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

myFunctionRichestUser(usersArray, richestUserIncludeFriends);

console.log(richestUserIncludeFriends.name)


//task 11////==========================================//
console.log("//task 11////==========================================//")

let usersWithFriends = []
for (let i = 0; i < usersArray.length; i++){
    if (usersArray[i].friends){
        usersWithFriends.push(usersArray[i]);
    }
}

for (let i = 0; i < usersWithFriends.length; i++){
    for (let j = 0; j < usersWithFriends[i].friends.length; j++){
        usersWithFriends[i].friends[j] = usersWithFriends[i].friends[j].name
    }
}
console.log(usersWithFriends)
for (let i = 0; i < usersWithFriends.length; i++){
    for (let j = i+1; j < usersWithFriends.length; j++){
        const contains = usersWithFriends[i].friends.some(element => {
            return usersWithFriends[j].friends.includes(element);
        })
        if (contains) {
            console.log(`${usersWithFriends[i].name} and ${usersWithFriends[j].name} have same friend`)
        }
    }
}

//task 12////==========================================//
console.log("//task 12////==========================================//")

const arr1 = [10, 'a', '5', 5, 1]; 
const arr2 = [10, 'a', 5, 5, 1];

console.log(arr1 ===arr2);

//task 12////==========================================//
console.log("//task 12////==========================================//")

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
