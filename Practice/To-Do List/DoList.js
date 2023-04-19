//pull ids into js
const submit = document.getElementById("submit");//btnClear
submit.addEventListener("click", clickHandler);
// submit.addEventListener("click", inputHandler);
const clearList = document.getElementById("clear-list");
const item = document.getElementById("item").value;//input


// add DOM EventListeners

function clickHandler() {
    const parent = document.getElementById("parent");
    const item = document.getElementById("item").value;//input
    const message =  item;
    const messages = document.createTextNode(message);
    const list = document.createElement("li");
    parent.appendChild(list);
    list.appendChild(messages);
}

// function inputHandler() {
//     item.forEach(item => item.value = " ");
        
    
// }
