const details = document.getElementById("details");
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", submit);
let input = document.getElementById("input");

const clear = document.getElementById("clear-list-button");
clear.addEventListener("click", clear);

function 




function submit() {
    const details = document.getElementById("details");
    let input = document.getElementById("input").value;
    let par = document.createElement("p");
    par.textContent = input;
    details.appendChild(par);
    
    
    
    
    //    return details.innerHTML = `
    //    <div class="lists">
    //      <h2 id="tasks">${input}</h2>
    //      <i class="fa-solid fa-x"></i> 
    //    </div>
    //    `
      
};





