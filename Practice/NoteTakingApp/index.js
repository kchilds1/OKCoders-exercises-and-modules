//Pull elements from html to javascript file and Add event listener to the Add note button
let note = document.getElementById("note");
let AddNoteButton = document.getElementById("button").addEventListener("click", ClickHandler);
let jsNotes = document.getElementById("jsNotes");

/*When button is clicked I want to create a new 
div with the contents of what was typed in the textarea*/
function ClickHandler() {
    //REMEMBER TO MAKE A VARIABLE FOR THE CONTENTS BEING PUT IN THE TEXTAREA
    let noteContent = note.value;
    
    //create new div to display strings
    let newDiv = document.createElement("div");
    
    //set new div class to note-details
    newDiv.className = "note-details";
    
    //display string along with a button to see more details about what was typed
    newDiv.innerHTML = `
        <p>${noteContent}</p>
        <button class="details" id="details-button">View Details</button>
      `;

      // Add an event listener to the button inside the new div
      let detailsButton = newDiv.querySelector(".details");
      detailsButton.addEventListener("click", detailsButtonPopUp);

      // add child variable newDiv to parent jsNotes in order to see it on website
      jsNotes.appendChild(newDiv);
}
// created a function to have a pop up when the view details button is pushed
function detailsButtonPopUp(event){
    let buttons = Array.from(document.querySelectorAll(".details"));
  let clickedButtonIndex = buttons.indexOf(event.target);

  console.log("Clicked button index:", clickedButtonIndex);
}
