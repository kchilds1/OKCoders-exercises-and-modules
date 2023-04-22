function main() {



//login
const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", ClickHandler);
let initial = document.getElementById("initial");
checkLogin();
//JSON.parse(localStorage.getItem("data")) || []
function ClickHandler() {
  const fullName = prompt(
    "Please enter your first name and last name separated by a space"
  );
  localStorage.setItem("login", fullName);
  checkLogin();
}

function checkLogin() {
  const fullName = localStorage.getItem("login");
  if (fullName) {
    loginButton.hidden = true;
    const firstNameInitial = fullName[0];
    const spacePosition = fullName.indexOf(" ");
    const lastNameInitial = fullName[spacePosition + 1];
    initial.innerText = firstNameInitial + lastNameInitial;
  }
}

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let IconForCart = document.getElementById("cartAmount");
  IconForCart.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

}

main();
