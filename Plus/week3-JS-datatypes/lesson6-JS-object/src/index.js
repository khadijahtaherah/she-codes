//JS Challenge 1
//Create an object weather and console log it
let weather = {};
console.log(weather);

//JS Challenge 2
//Create an object weather with properties of temp and humidity and console log the object
weather = { temperature: 6, humidity: 85 };
console.log(weather);

//JS Challenge 3
//console log the humidity and the temperature
console.log(weather.temperature);
console.log(weather.humidity);

//JS Challenge 4
//Add a property windSpeed and console log it
weather.windSpeed = 18;
console.log(weather);

//JS Challenge 5
//Console log the wind speed, the temperature and the humidity using the square brackets syntax
console.log(weather["temperature"]);
console.log(weather["humidity"]);
console.log(weather["windSpeed"]);

//JS Challenge 6
//Create an object or an array of objects called `forecast` with each day’s temperature, and console log i
let forecast = [
  { day: "Sunday", temperature: 9 },
  { day: "Monday", temperature: 9 },
  { day: "Tuesday", temperature: 9 },
  { day: "Wednesday", temperature: 8 },
  { day: "Thursday", temperature: 7 },
];

console.log(forecast);
console.log(forecast[1]);
console.log(forecast[3].temperature);
