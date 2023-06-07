// Import readline using required function
const readline = require("readline");
//rl is created in order for me to communicate with terminal git bash
const rl = readline.createInterface({
  //process.stdin is used to us the keyboard to ask questions
  input: process.stdin,
  //process.stdout is used to see the answers
  output: process.stdout,
});


//Menu items
let menu = [
    { item: "Espresso", price: 2.50, description: "hot"},
    { item: "Cappuccino", price: 3.00, description: "hot"},
    { item: "Latte", price: 3.50, description: "cold"},
    { item: "Hot Latte", price: 4.00, description: "hot"},
    { item: "Mocha", price: 4.00, description: "hot"},
    { item: "Americano", price: 2.00, description: "hot"},
    { item: "Macchiato", price: 3.00, description: "cold"}
]
//Array to store items
let cart = [];

//Calculate the total price of everything in the cart
let totalAmount = ()=> {
    let totalPrice = cart.reduce((total, currentItem) => total + currentItem.price, 0);
    console.log(`Total Bill: $${totalPrice}`);

}
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

/*Interface function to communicate with Gitbash or the Terminal
Get url from weatherapi.com to show the current weather depending on the zip code being used*/
function zipInput() {
     rl.question(
         "Please enter your zip code \n",
         (zip) => {
            //trim to make sure I don't accidently have spacing before and after zip
            zip = zip.trim();
            //make sure the zip is 5 characters in length and make sure it is only digits
            if(zip.length === 5 && /^\d+$/.test(zip)){
                //Get API url
                let url = `https://api.weatherapi.com/v1/forecast.json?key=d8d5bfc23a1b4fd285c40136230106&q=${zip}&days=2&aqi=no&alerts=no`
                //let url = `https://api.weatherapi.com/v1/current.json?key=d8d5bfc23a1b4fd285c40136230106&q=${zip}&aqi=no`;
                let currentWeatherPromise = fetch(url);

                //display the current weather and 
                async function getCurrentWeather() {
                    const currentWeatherResponse = await fetch(url);
                    //console log the current date
                    console.log(currentWeatherResponse.headers.get("date"));
                    //console log the time
                    const currentTime = new Date();
                    console.log(currentTime);
                    //console log the temp
                    const json = await currentWeatherResponse.json();
                    console.log(`The current temp in ${json.location.name} is ${json.current.temp_f} degrees`);
                    //suggest type of coffee. If under 70 degrees suggest hot Espresso. If over 70 suggest cold latte
                    if(json.current.temp_f > 70){
                           console.log("Hot days like today deserve a cold Latte for only $3.50");
                       }else{
                           console.log("Cold days like today deserve a hot Espresso for only $2.50");
                       }
                       //Get the forecast for tomorrow and display the hottest the temp can be
                       let maxTempF = json.forecast.forecastday[0].day.maxtemp_f;
                    console.log(`Weather forecast predicts the high for tomorrow in ${json.location.name} will be ${maxTempF} degrees`);
                    if(maxTempF > 70){
                        console.log("Would you like to cool off tomorrow with a cold Latte for only $3.50?");
                       }else{
                           console.log("Would you like to warm up to a hot Espresso for only $2.50 tomorrow?");
                    }
                  }
                  getCurrentWeather();
                prompt();
                }
         }
         );
        }
function prompt() {    
  rl.question(
    "What would you like to do? You can see menu, buy item or remove. You can also, check your cart with check cart. \n",
    (answer) => {
      if (answer === "see menu") {
        console.log(menu);
        prompt();
         
      } else if (answer === "buy item") {
        console.log(menu);
        rl.question(
              "Please choose an item from the list above. \n",
              (info) => {
                let selection = menu.find(item => item.item === info);
                addCoffee(selection);
                prompt();
      }
        );
        
      } else if (answer === "remove") {
         rl.question(
           "what is the name of the Coffee you want to remove?\n",
           (item) => {
              removeCoffee(item);
              prompt();
           }
         );
       } else if (answer === "check cart") {
         listCoffee();
         prompt();
       } else {
         console.log("Invalid input");
         prompt();
      }
    }
  );
}

zipInput();
prompt();