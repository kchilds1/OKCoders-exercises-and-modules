
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

// Load the saved items from localStorage
let savedItems = localStorage.getItem("toDoListItems");
if (savedItems) {
  task.innerHTML = savedItems;
}

function submittedValue(){
    let toDoListInputValue = toDoListInput.value;
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    let newPara = document.createElement("h2");
    newPara.textContent = toDoListInputValue;
    task.appendChild(newPara);
    task.appendChild(removeButton);

    removeButton.addEventListener("click", function() {
      console.log("i was clicked");
        newPara.remove();
        removeButton.remove();
        saveListItems();
    });
   

    

    //Set input box text back to placeholder
    toDoListInput.value = "";
    toDoListInput.placeholder = "please type here...";
    saveListItems();
}



function clearList(){
    task.innerHTML = "";
    saveListItems();
}
 
function saveListItems(){
    // Save the list items in localStorage
  let listItems = task.innerHTML;
  localStorage.setItem("toDoListItems", listItems);
}

