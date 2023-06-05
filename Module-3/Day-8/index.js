const { create } = require("domain");
const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//stores items being ordered using the orderedMenu function
let orders = [];

// List of menu items
let menu = [
    { item: "Espresso", price: 2.5 },
    { item: "Cappuccino", price: 3.0 },
    { item: "Latte", price: 3.5 },
    { item: "Mocha", price: 4.0 },
    { item: "Americano", price: 2.0 }
  ];

  //Display menu items when displayMenu is called in prompt function
  function displayMenu() {
    console.log("menu:");
    menu.forEach((menuItem) => {
      console.log(`${menuItem.item}: $${menuItem.price}`);
    });
  }
  //Pushes item to orders array
function orderedMenu(itemNumber){
    const selectedItem = menu[itemNumber - 1];
    if (selectedItem) {
        orders.push(selectedItem);
        console.log(`Added ${selectedItem.item} to your cart.`);
    } else {
        console.log("Invalid item number. Please try again.");
    } 
    
}

//Add item to cart function
function handleAddToCart() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question("Enter the item number to add to your cart: ", (itemNumber) => {
        addToCart(parseInt(itemNumber));
        rl.close();
        prompt();
    });
}

function prompt() {
 rl.question("Welcome to the Coffee Shop! How can I help you?\n", (answer) => {
  if(answer === "show menu"){
    displayMenu();
        
    }else if (answer =="order something"){
        rl.question("What would you like to order? \n", () =>{
            displayMenu();
            orderedMenu();
        })
        
     } else if (answer == "add"){
        handleAddToCart();
     }
    }
 );
}

prompt();
