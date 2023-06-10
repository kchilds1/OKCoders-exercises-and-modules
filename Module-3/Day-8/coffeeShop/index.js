// Import readline using required function
const readline = require("readline");
//const fs = require("fs");
//Command Line Interface with Node.js

//BOXEN CLI STILL DOESN'T WORK.  I'M GETTING A COMPATIBLE ISSUE ERROR
//const { boxen } = require("boxen"); 


//rl is created in order for me to communicate with terminal git bash
const rl = readline.createInterface({
  //process.stdin is used to us the keyboard to ask questions
  input: process.stdin,
  //process.stdout is used to see the answers
  output: process.stdout,
});


//Menu items
let menu = [
  { item: "Espresso", price: 2.5, description: "hot" },
  { item: "Cappuccino", price: 3.0, description: "hot" },
  { item: "Latte", price: 3.5, description: "cold" },
  { item: "Hot Latte", price: 4.0, description: "hot" },
  { item: "Mocha", price: 4.0, description: "hot" },
  { item: "Americano", price: 2.0, description: "hot" },
  { item: "Macchiato", price: 3.0, description: "cold" },
];
//Array to store items
let cart = [];

//Calculate the total price of everything in the cart
let totalAmount = () => {
  let totalPrice = cart.reduce(
    (total, currentItem) => total + currentItem.price,
    0
  );
  console.log(`Total Bill: $${totalPrice}`);
};
//Add Coffee from the menu to the cart
function addCoffee(selection) {
  console.log(selection);
  cart.push(selection);
  console.log(`${selection.item} has been added to the cart`);
  cartStats();
  totalAmount();
}

//Keeping up with the count of items in the cart
function cartStats() {
  const plural = cart.length > 1 ? "s" : "";
  console.log(`There are ${cart.length} coffee${plural} in the cart`);
}

function suggestionIfs(){
  if (json.current.temp_f > 70) {
    console.log(
      "Hot days like today deserve a cold Latte for only $3.50"
    );
  } else {
    console.log(
      "Cold days like today deserve a hot Espresso for only $2.50"
    );
  }

}


//Remove items that are in the cart
function removeCoffee(item) {
  const pos = cart.findIndex((coffee) => coffee.item === item);
  if (pos === -1) {
    console.log("Coffee not found");
  } else {
    const removedCoffee = cart.splice(pos, 1)[0];
    console.log(`${removedCoffee.item} has been removed from the cart`);
    totalAmount();
    cartStats();
  }
}

//Show the items listed in the cart
function listCoffee() {
  cartStats();
  console.log("The coffee in the cart is:");
  cart.forEach((name) => console.log(name));
  totalAmount();
}
//Function to pay bill
function pay() {
  //make sure something is in the cart, if not let the user know cart is empty
  if (cart.length !== 0) {
    //set total price back to 0
    totalPrice = 0;
    //empty the cart
    cart = [];
    console.log("Thank you for your purchase");
  } else {
    console.log("Your cart is empty");
  }
  //prompt user for more options
  prompt();
}

 //Function to select specific day coffee is going to be ordered along with the weather
 async function futureSuggestion(days, zipcode, time) {
  days = (days-1);
     const futureUrl = `https://api.weatherapi.com/v1/forecast.json?key=d8d5bfc23a1b4fd285c40136230106&q=${zipcode}&days=${days}&aqi=no&alerts=no`
     const futureTemp_f = await getFutureWeather(futureUrl, days);
  }

   async function getFutureWeather(futureUrl, days) {
     //returns temp in fahrenheit of given future date
     const futureWeatherResponse = await fetch(futureUrl);
     const json = await futureWeatherResponse.json();
     const forecast = await json.forecast.forecastday[days - 1].hour[4].temp_f;
     console.log (`${days} day from now the temperature will be ${forecast}`);
     if (json.current.temp_f > 70) {
      console.log(
        "Hot days like today deserve a cold Latte for only $3.50"
      );
    } else {
      console.log(
        "Cold days like today deserve a hot Espresso for only $2.50"
      );
    }
    prompt();
     //return forecast;
     
   }
   
/*Interface function to communicate with Gitbash or the Terminal
Get url from weatherapi.com to show the current weather depending on the zip code being used*/
async function zipInput() {
  rl.question("Please enter your zip code \n", (zip) => {
    //trim to make sure I don't accidentally have spacing before and after zip
    zip = zip.trim();
    //make sure the zip is 5 characters in length and make sure it is only digits
    if (zip.length === 5 && /^\d+$/.test(zip)) {
      //Get API url
      let url = `https://api.weatherapi.com/v1/forecast.json?key=d8d5bfc23a1b4fd285c40136230106&q=${zip}&days=2&aqi=no&alerts=no`;
      let currentWeatherPromise = fetch(url);

     

      getCurrentWeather();
      //function will display the current weather
      async function getCurrentWeather() {
        
        const currentWeatherResponse = await fetch(url);
        //console log the current date
        console.log(currentWeatherResponse.headers.get("date"));
        //console log the time
        const currentTime = new Date();
        console.log(currentTime);
        //console log the temp
        const json = await currentWeatherResponse.json();
        console.log(
          `The current temp in ${json.location.name} is ${json.current.temp_f} degrees`
        );
        //suggest type of coffee. If under 70 degrees suggest hot Espresso. If over 70 suggest cold latte
        
         if (json.current.temp_f > 70) {
           console.log(
             "Hot days like today deserve a cold Latte for only $3.50"
           );
         } else {
           console.log(
             "Cold days like today deserve a hot Espresso for only $2.50"
           );
         }
        //Get the forecast for tomorrow and display the hottest the temp can be
        let weatherCondition = json.forecast.forecastday[0].day.condition.text;
        console.log(
          `Forecast predicts a ${weatherCondition} day for tomorrow in ${json.location.name}`
        );
        prompt();
      }
    } else {
      zipInput();
    }
  });
}

async function prompt() {
  rl.question(
    "Command options: See menu = menu, buy item = purchase, make future order = future,  remove item = remove, check cart = cart, order checkout = pay \n",
    (answer) => {
      if (answer === "menu") {
        console.log(menu);
        prompt();
      } else if (answer === "purchase") {
        console.log(menu);
        rl.question("Please choose an item from the list above. \n", (info) => {
          let selection = menu.find((item) => item.item === info);
          addCoffee(selection);
          prompt();
        });
      } else if (answer === "remove") {
        listCoffee();
        rl.question(
          "what is the name of the Coffee you want to remove?\n",
          (item) => {
            removeCoffee(item);
            prompt();
          }
        );
      } else if (answer === "cart") {
        listCoffee();
        prompt();
      } else if (answer === "future") {
        const daysPromise = new Promise((resolve) => {
        rl.question(
          "How many days from now will you be at said location?\n",
          (input) => {
            resolve(input);
          }
        );
        });

        daysPromise.then((daysResult) => {
        const zipcodePromise = new Promise((resolve) => {
            rl.question("What is the zipcode of the location?\n", (input) => {
                resolve(input);
              });
            });
            
            zipcodePromise.then((zipcodeResult) => {
              rl.question(
                "Enter the time you will be entering the location:\n",
                (time) => {
                  futureSuggestion(daysResult, zipcodeResult, time);
            }
          );
        });
      });
      } else if (answer === "pay") {
        pay();
      } else {
        console.log("Invalid input");
        prompt();
      }
    }
  );
}

zipInput();

prompt();
