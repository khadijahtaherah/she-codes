let weather = [
  {
    city: "paris",
    temp: 19.7,
    humidity: 80,
  },
  {
    city: "tokyo",
    temp: 17.3,
    humidity: 50,
  },
  {
    city: "lisbon",
    temp: 30.2,
    humidity: 20,
  },
  {
    city: "san francisco",
    temp: 20.9,
    humidity: 100,
  },
  {
    city: "oslo",
    temp: -5,
    humidity: 20,
  },
];

// write your code here
//first add button selector
let inputCity = prompt("Enter city: ");

//lowercase input
let userCity = inputCity.toLowerCase();
//console.log(userCity);

//compare input with array element
//if matches -> alert output data
//if not -> alert link info
let exist = 0;
for (let i = 0; i < weather.length; i++) {
  if (userCity === weather[i].city) {
    alert(
      `It is currently ${weather[i].temp}°C in ${
        weather[i].city.charAt(0).toUpperCase() + weather[i].city.slice(1)
      } with a humidity of ${weather[i].humidity}%`
    );
    exist = 1;
  }
}

if (exist < 1) {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${userCity}`
  );
}
