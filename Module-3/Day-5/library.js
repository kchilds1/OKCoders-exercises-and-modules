const { create } = require("domain");
const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let library = [];

// Function to save the library to a file
function saveLibrary() {
  const data = JSON.stringify(library);
  fs.writeFileSync("library.json", data);
  console.log("Library saved to library.json");
}

// Function to load the library from a file
function loadLibrary() {
  try {
    const data = fs.readFileSync("library.json", "utf8");
    library = JSON.parse(data);
    console.log("Library loaded from library.json");
  } catch (error) {
    console.log("Error loading library from file:", error.message);
  }
}
//Load the library on startup
loadLibrary();

//Created book that returns an object
function createBook(title, author, genre, yearPublished) {
    const book = {
            title,
            author,
            genre,
            yearPublished
        };
    return book;
}

//Takes a book object and adds it to the library array
function addBook(book) {
  library.push(book);
  console.log(`${book.title} has been added to the library`);
  libraryStats();
  saveLibrary();
}

function libraryStats(){
  const plural = library.length > 1 ? "s": "";
  console.log(`There are now ${library.length} book${plural} in the library`);
}


 
  function removeBook(title) {
    const pos = library.findIndex((book) => book.title === title);
    if(pos === -1 ){
      console.log("Book not found");
    }else {
      library.splice(pos, 1)
      console.log(`${title} has been removed from the library`);
      libraryStats();
      saveLibrary();
    }
  }

// put in the title and return the object
 function findBook(title) {
   const foundBook = library.find(book => book.title === title);
   if(foundBook) {
    console.log(foundBook);
   }else {
    console.log("Book not found");
   }
 }

 function listBooks() {
   console.log("Books in the library are: ");
   library.forEach(book => console.log(book));
}
function prompt() {
 rl.question("What would you like to do?\n", (answer) => {
  if(answer === "create book"){
   rl.question(
    "What is the title, author, genre, year published of the book you want to add?\n", 
     (info) => {
       const [title, author, genre, yearPublished] = info.split(", ");
       const createdBook = createBook(title, author, genre, yearPublished);
       addBook(createdBook);
       prompt();
     }
   );
       }else if (answer === "remove book"){
        rl.question(
          "What is the title of the book you want to remove?\n", 
           (title) => {
            removeBook(title);
             prompt();
           }
        );
       }else if (answer === "find book"){
         rl.question(
           "What is the title of the book you want to find?\n", 
            (title) => {
              findBook(title);
              prompt();
            }
         );
       }else if (answer === "list books"){
         if(library.length > 0){ 
          listBooks();
         prompt();
         }else{
            console.log("You don't have any books in the library")
            prompt();
          }
       

   } else if(answer=== "save library"){
    saveLibrary();
    prompt();
  }
 });
 
 }
 prompt();