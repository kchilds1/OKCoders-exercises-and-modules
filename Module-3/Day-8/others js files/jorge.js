const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const menu = [];
function createCoffee(name, type, price) {
  return {
    name: name,
    type: type,
    price: price,
  };
}
function addCoffee(coffee) {
  menu.push(coffee);
}
function removeCoffee(name) {
  const index = menu.findIndex((coffee) => coffee.name === name);
  if (index !== -1) {
    menu.splice(index, 1);
    console.log(`Coffee "${name}" has been removed from the menu.`);
  } else {
    console.log(`Coffee "${name}" is not found in the menu.`);
  }
}
function findCoffee(name) {
  const index = menu.findIndex((coffee) => coffee.name === name);
  if (index !== -1) {
    console.log(`Coffee "${name}" has been found in the menu.`);
  } else {
    console.log(`Coffee "${name}" is not found in the menu.`);
  }
}
function listMenu() {
  if (menu.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log("Coffee menu. Here's a list of available coffees: ");
    for (let i = 0; i < menu.length; i++) {
      console.log(menu[i]);
    }
  }
}
function prompt() {
  rl.question(
    "What would you like to do?\n\n1. Create a coffee\n2. Add a coffee\n3. Remove a coffee\n4. Find a coffee\n5. List all coffees\n6. Exit the program\n\n",
    (answer) => {
      console.log(answer);
      switch (answer) {
        case "1":
          rl.question("What is the name of the coffee?\n", (name) => {
            rl.question("What is the type of the coffee?\n", (type) => {
              rl.question("What is the price of the coffee?\n", (price) => {
                const coffee = createCoffee(name, type, price);
                console.log(`Coffee "${name}" has been created.`);
                addCoffee(coffee);
                prompt();
              });
            });
          });
          break;
        case "2":
          rl.question("What is the name of the coffee?\n", (name) => {
            const coffee = findCoffee(name);
            if (coffee) {
              addCoffee(coffee);
            }
            prompt();
          });
          break;
        case "3":
          rl.question("What is the name of the coffee?\n", (name) => {
            removeCoffee(name);
            prompt();
          });
          break;
        case "4":
          rl.question("What is the name of the coffee?\n", (name) => {
            findCoffee(name);
            prompt();
          });
          break;
        case "5":
          listMenu();
          prompt();
          break;
        case "6":
          console.log("Goodbye!");
          rl.close();
          break;
        default:
          console.log("Invalid input. Please try again.");
          prompt();
      }
    }
  );
}
prompt();