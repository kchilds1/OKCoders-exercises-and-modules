let menu = [
    { item: "Espresso", price: 2.5 },
    { item: "Cappuccino", price: 3.0 },
    { item: "Latte", price: 3.5 },
    { item: "Mocha", price: 4.0 },
    { item: "Americano", price: 2.0 },
];
let cart = [];
function displayMenu() {
    console.log("Menu:");
    menu.forEach((menuItem, index) => {
        console.log(`${index + 1}. ${menuItem.item} - $${menuItem.price}`);
    });
}
function addToCart(itemNumber) {
    const selectedItem = menu[itemNumber - 1];
    if (selectedItem) {
        cart.push(selectedItem);
        console.log(`Added ${selectedItem.item} to your cart.`);
    } else {
        console.log("Invalid item number. Please try again.");
    }
}
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
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question("Welcome to the Coffee Shop! How can I help you?\n", (answer) => {
        console.log(answer);
        // Perform actions based on the user's input
        // For example:
        if (answer === "menu") {
            displayMenu();
            prompt();
        } else if (answer === "add") {
            handleAddToCart();
        } else if (answer === "cart") {
            console.log("Your cart:");
            cart.forEach((cartItem, index) => {
                console.log(`${index + 1}. ${cartItem.item} - $${cartItem.price}`);
            });
            prompt();
        } else if (answer === "quit") {
            console.log("Thank you for shopping with us. Your cart:");
            cart.forEach((cartItem, index) => {
                console.log(`${index + 1}. ${cartItem.item} - $${cartItem.price}`);
            });
            rl.close();
        } else {
            prompt();
        }
    });
}
prompt();









