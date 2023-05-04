
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", submittedValue);

const clearListButton = document.getElementById("clear-list-button")
clearListButton.addEventListener("click", clearList);

let task = document.getElementById("task");

let toDoListInput = document.getElementById("toDoListInput");

toDoListInput.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    submittedValue();
  }
});

function submittedValue(){
    let toDoListInputValue = toDoListInput.value;
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    let newPara = document.createElement("h2");
    newPara.textContent = toDoListInputValue;
    task.appendChild(newPara);
    task.appendChild(removeButton);
    
    removeButton.addEventListener("click", function() {
        newPara.remove();
        removeButton.remove();
    });
    //Set input box text back to placeholder
    toDoListInput.value = "";
    toDoListInput.placeholder = "please type here...";
}

function clearList(){
    task.innerHTML = "";
}


