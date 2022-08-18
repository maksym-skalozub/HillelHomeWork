const starWarCharacters = [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
      films: ["2", "6", "3", "1", "7"],
    },
    {
      name: "C-3PO",
      height: "167",
      mass: "75",
      hair_color: "n/a",
      skin_color: "gold",
      eye_color: "yellow",
      birth_year: "112BBY",
      gender: "n/a",
      films: ["1", "2", "3", "4", "5", "6"],
    },
    {
      name: "Darth Vader",
      height: "202",
      mass: "136",
      hair_color: "none",
      skin_color: "white",
      eye_color: "yellow",
      birth_year: "41.9BBY",
      gender: "male",
      films: ["1", "2", "3", "6"],
    },
    {
      name: "Leia Organa",
      height: "150",
      mass: "49",
      hair_color: "brown",
      skin_color: "light",
      eye_color: "brown",
      birth_year: "19BBY",
      gender: "female",
      films: ["1", "2", "3", "6"],
    },
    {
      name: "Obi-Wan Kenobi",
      height: "182",
      mass: "77",
      hair_color: "auburn, white",
      skin_color: "fair",
      eye_color: "blue-gray",
      birth_year: "57BBY",
      gender: "male",
      films: ["1", "2", "3", "4", "5", "6"],
    },
  ];
//task 1//=========================================================//
console.log("//task 1//=========================================================//")
let genderArr = [];

starWarCharacters.forEach(element => genderArr.push(element.gender));
console.log(genderArr);

//task 2//=========================================================//
console.log("//task 2//=========================================================//")
let charWithBigestMoviesStory = [];
let biggestNumberOfMovies = 0;

starWarCharacters.forEach(element => {
    if (element.films.length > biggestNumberOfMovies){
        biggestNumberOfMovies = element.films.length;
    }});

starWarCharacters.forEach(element => {
    if (element.films.length === biggestNumberOfMovies){
        charWithBigestMoviesStory.push(element);
    }});
console.log(charWithBigestMoviesStory)

//task 3//=========================================================//
console.log("//task 3//=========================================================//")

let theHaviestCharacter = starWarCharacters.find(element => 
    element.mass == starWarCharacters.reduce((acc, shot) => 
    acc = acc > Number(shot.mass) ? acc : Number(shot.mass), 0));
console.log(theHaviestCharacter);

//task 4//=========================================================//
console.log("//task 4//=========================================================//")

let moviesWithAllCharacters = []

starWarCharacters[0].films.forEach(element => {
    let allIn = true;
    for (let i= 0; i< starWarCharacters.length;i++){
        if(!starWarCharacters[i].films.includes(element)){
            allIn = false;
            break;
        }
    }
    if (allIn){
        moviesWithAllCharacters.push(element);
    }
})

console.log(moviesWithAllCharacters.sort())

//task 5//=========================================================//
console.log("//task 5//=========================================================//")

starWarCharacters.splice(0, starWarCharacters.length); 
console.log(starWarCharacters);
