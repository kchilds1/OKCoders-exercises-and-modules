//prompt the user for a number to start with
let bottlesOfBeer = prompt("How many bottles of beer on the wall?");
//adding the take on down button
const takeDown =  document.getElementById("take-down-button");
const appendP = document.getElementById("append-p")


takeDown.addEventListener("click", () =>{
    bottlesOfBeer-= 1;
    if (bottlesOfBeer < 1) {
        const zero = document.createElement("p");
        zero.textContent = "Zero bottles of beer on the wall!";
        appendP.appendChild(zero);
        return;
    }
    const beerMessage = bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of beer , you take one down pass it around " + (bottlesOfBeer -1) + " bottles of beer on the wall!";
    const newP = document.createElement("p");
    const message = document.createTextNode(beerMessage);
    newP.appendChild(message);
    appendP.appendChild(newP);
    })
    
    