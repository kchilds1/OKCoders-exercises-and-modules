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
    { item: "Espresso", price: 2.5, description: "hot"},
    { item: "Cappuccino", price: 3.0, description: "hot"},
    { item: "Latte", price: 3.5, description: "cold"},
    { item: "Mocha", price: 4.0, description: "hot"},
    { item: "Americano", price: 2.0, description: "hot"},
    { item: "Macchiato", price: 3.0, description: "cold"}
]
//Array to store items
let cart = [];

//Add Coffee from the menu to the cart
function addCoffee(selection) {
  console.log(selection);
  cart.push(selection);
  console.log(`${selection.item} has been added to the cart`);
  cartStats();
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
    cartStats();
  }
}

// function findCoffee(name) {
//   const coffee = cart.find((coffee) => coffee.name === name);
//   if (coffee) {
//     console.log(coffee);
//   } else {
//     console.log("Coffee not found");
//   }
// }

//Show the items listed in the cart
function listCoffee() {
  cartStats();
  console.log("The coffee in the cart is:");
  cart.forEach((name) => console.log(name));
}

//Interface function to communicate with Gitbash or the Terminal
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

prompt();