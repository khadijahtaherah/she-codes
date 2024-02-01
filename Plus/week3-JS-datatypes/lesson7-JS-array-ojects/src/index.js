//JS Challenge 1
//Given an object called paris, log its temperature
let paris = {
  name: "Paris",
  country: "France",
  language: "French",
  temp: 18,
  isCapitalCity: true,
};

console.log(paris.temp);

//JS Challenge 2
//Create an object called sydney similar to paris and log its temperature (use fake data)
let sydney = {
  name: "Sydney",
  country: "Australia",
  language: "English",
  temp: 26,
  isCapitalCity: false,
};

console.log(sydney.temp);

//JS Challenge 3
//Create an array with 3 different Australian city names only and log each name
let cities = ["Canberra", "Brisbane", "Gold Coast"];

console.log(cities[0]);
console.log(cities[1]);
console.log(cities[2]);

//JS Challenge 4
//Create an array of 3 cities with the same properties as paris and console log each city temperature
let city = [
  {
    name: "Bruges",
    country: "Belgium",
    language: "French",
    temp: 6,
    isCapitalCity: false,
  },
  {
    name: "London",
    country: "United Kingdom",
    language: "English",
    temp: 3,
    isCapitalCity: true,
  },
  {
    name: "Zurich",
    country: "Switzerland",
    language: "German",
    temp: 2,
    isCapitalCity: false,
  },
];

for (let i = 0; i < city.length; i++) {
  console.log(`The temperature at ${city[i].name} is ${city[i].temp}`);
}
