var className = "ok-coders";
var testNumber = 1;
var myOtherClassName;

//code comment here
console.log(className);

//message when I click the "user-icon" icon

var userIconElement = document.getElementById("user-icon")
console.log(userIconElement)
userIconElement.addEventListener("click", () =>{
console.log("I was clicked!");
})

//Using prompt and asking for inputs on my web page

var userName = prompt("What is your name?");
var firstNameInitial = userName[0];
var spacePosition = userName.indexOf(" ");
var lastNameInitial = userName[spacePosition + 1];

//adding message onto web page
var userAge= prompt("How old are you?");
var message = "Hello " + userName + ", you are " + userAge + " years old!";
// adding first and last initials to header
var avatarStringTag = document.getElementById("avatar-string")
avatarStringTag.textContent = firstNameInitial + lastNameInitial;
var h1MessageTag = document.getElementById("message");
var sayHelloButtonTag = document.getElementById("say-hello-button")

function clickHandler() {
    
    h1MessageTag.textContent = message;
}
sayHelloButtonTag.addEventListener("click", clickHandler)

const myArray = [1, 2, 3, 4, 5];
const mySecondArray = ["zach", "susan"];

const secondElement = mySecondArray[1];
const lastElement = mySecondArray[mySecondArray -1];

console.log(mySecondArray);
mySecondArray.push("Carl", "Cooper");
console.log(mySecondArray);

const shoppingCart = []
const shoppingCartElement = document.getElementById("shopping-cart");

function addItemToCart(itemName) {
    shoppingCart.push(itemName);
    shoppingCartElement.textContent = shoppingCart.length;
}
    
const pants = document.getElementById("pants");
const tShirt = document.getElementById("t-shirts");
const hat = document.getElementById("hat");

pants.addEventListener("click", () => addItemToCart('pants'));
tShirt.addEventListener("click", () => addItemToCart('t-shirts'));
hat.addEventListener("click", () => addItemToCart('hat'));

console.log(shoppingCart);

shoppingCartElement.textContent = shoppingCart.length;

