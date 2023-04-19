//login
const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", ClickHandler);
let initial = document.getElementById("initial");
//JSON.parse(localStorage.getItem("data")) || []
 function ClickHandler() {
    const fullName = prompt("Please enter your first name and last name separated by a space");
    loginButton.hidden = true;
    const firstNameInitial = fullName[0];
    const spacePosition = fullName.indexOf(" ")
    const lastNameInitial = fullName[spacePosition +1];
    initial.innerText = firstNameInitial + lastNameInitial;
    //localStorage.setItem("data", JSON.stringify(basket));
}










