//prompt the user for a number to start with
let bottlesOfBeer = prompt("How many bottles of beer on the wall?");
//adding the take on down button
const takeDown =  document.getElementById("take-down-button");



takeDown.addEventListener("click", () =>{
    bottlesOfBeer-= 1;
    const beerMessage = bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of beer , you take one down pass it around " + (bottlesOfBeer -1) + " bottles of beer on the wall!";
    const newP = document.createElement("p");
    const node = document.createTextNode(beerMessage);
    newP.appendChild(node);
    const appendP = document.getElementById("append-p");
    appendP.appendChild(newP);

    })
    
    