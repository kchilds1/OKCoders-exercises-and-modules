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
        <i class="fa-solid fa-x"></i>
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
// function detailsButtonPopUp(event){
//   let noteContent = event.target.previousSibling.innerText;
//   console.log(noteContent);
//   window.open("", "Popup", "width=500, height= 500"),document.write(noteContent); 
// //   let buttons = Array.from(document.querySelectorAll(".details"));
// //   let clickedButtonIndex = buttons.indexOf(event.target);
// //   console.log("the clickedButton Index value is: ", note.value)
// //   //console.log("buttons is:", buttons)
// //   window.open(note.value, 'Popup', 'width=500, height=500')
// //   //console.log("Clicked button index:", clickedButtonIndex);
// }
function detailsButtonPopUp(event) {
    let noteContent = event.target.noteContent;
  console.log(noteContent)
    // Create a modal container
    let modal = document.createElement("div");
    modal.className = "modal";
  
    // Create a content container
    let modalContent = document.createElement("div");
    modalContent.className = "modal-content";
  
    // Create a close button
    let closeButton = document.createElement("span");
    closeButton.className = "close";
    closeButton.innerHTML = "&times;";
  
    // Create a textarea to display the note's content
    let noteTextArea = document.createElement("textarea");
    noteTextArea.value = noteContent;
  
    // Append elements to the modal
    modalContent.appendChild(closeButton);
    modalContent.appendChild(noteTextArea);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
  
    // Close the modal when the close button is clicked
    closeButton.addEventListener("click", function () {
      document.body.removeChild(modal);
    });
  }