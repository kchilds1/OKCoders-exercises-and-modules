const menuItems = [//list of objects in my array for variable menuItems
    {
        "Name": "Carmel Latte",
        "Description": "If you like carmel and love coffee this is the best mix for you",
        "Price": 10
    }, {
        "Name": "The Regular",
        "Description": "Regular coffee with your choice of almond milk or Soy milk",
        "Price": 5
    }, {
        "Name": "Chocolate Latte",
        "Description":"Chocolate lovers dream with pure milk chocolate and chocolate creamer",
        "Price": 10
    }
]

const cart = document.getElementById("shopping-cart");

const menu = document.getElementById("menu");

function displayMenuItems() {//create menu items
  for(let i = 0; i < menuItems.length; i++){//looping for how many object I have above
    const item = menuItems[i];// getting the values of each object and assigning it to item
     let para = document.createElement("p");//create html paragraph
     const button = document.createElement("button");//creating a button
     const buttonText = document.createTextNode(`Add ${item.Name}`);//adding text to button
     button.addEventListener("click", () => addToCart(item));
     button.appendChild(buttonText);
     cart.appendChild(button);
     let paraText = document.createTextNode(`Item: ${item.Name} Price: $${item.Price} Description: ${item.Description}`);//create text for html document using properties from menuItems array
     para.appendChild(paraText);//append text to the paragraph created
     menu.appendChild(para);//append the combined text and paragraph element to the div with ID="menu"
     
  }
}
 displayMenuItems();

 

function addToCart(item) {
    const cartItem = document.createElement("p"); // create a new paragraph element
    const cartItemText = document.createTextNode(`Added ${item.Name} to cart for $${item.Price}`); // create text node for the added item details
    cartItem.appendChild(cartItemText); // append the text node to the paragraph element
    cart.appendChild(cartItem); // append the paragraph element to the shopping cart element in the HTML
    const cartItems = cart.querySelectorAll("p"); // get all the paragraph elements in the shopping cart
    const numItems = cartItems.length; // get the length of the resulting array to get the number of items in the shopping cart
    console.log(numItems)
  }
  
//function displayShoppingCart()  


    
