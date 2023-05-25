const { create } = require("domain");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const library = [];
//Created book that returns an object
function createBook(title, author, genre, yearPublished) {
    const book = {
            bookTitle: title,
            bookAuthor: author,
            bookGenre: genre,
            bookYearPublished: yearPublished
        };
    return book;
}
//This is the book object below
const bookObject = createBook("The Great Gatsby", "F. Scott Fitzgerald", "Fiction", 1925);
//console.log(bookObject);

//Takes a book object and adds it to the library array
function addBook(book) {
  library.push(book);
  return library;
}


const libraryBook = addBook(bookObject);

 
  function removeBook(title) {
    const index = library.findIndex(book => book.bookTitle === title);
    if(index !== -1 ){
      library.splice(index, 1)
    }
    return library;
  }

// put in the title and return the object
function findBook(title) {
  const foundBook = library.find(book => book.bookTitle === title);
  return libraryBook;
}

function listBooks() {
  console.log("Books in the library: ");
  library.forEach(book => console.log(book));
}
function prompt() {
  rl.question("What would you like to do?\n", (answer) => {
    
    if(answer == "create book"){
        createBook();
    }else if(answer == "add book"){
        addBook();
    }else if(answer == "remove book"){
        removeBook();
    }else if(answer == "find book"){
        findBook();
    }else if (answer == "list books"){
        listBooks();
    }else{
        return "Book is not found, please type list books to find a list of books available";
    }
    rl.close();
  });
}
prompt();