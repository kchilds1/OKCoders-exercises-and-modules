const menuItems = [//list of objects in my array for variable menuItems
    {
        "Name": "Carmel Latte",
        "Description": "If you like carmel and love coffee this is the best mix for you",
        "Price": 10,
        "Discount": 1
    }, {
        "Name": "The Regular",
        "Description": "Regular coffee with your choice of almond milk or Soy milk",
        "Price": 5,
        "Discount": 0.20
    }, {
        "Name": "Chocolate Latte",
        "Description":"Chocolate lovers dream with pure milk chocolate and chocolate creamer",
        "Price": 10
    }
]

const cart = document.getElementById("shopping-cart");
const menu = document.getElementById("menu");
let paraText = 0;
function displayMenuItems() {//create menu items
  for(let i = 0; i < menuItems.length; i++){//looping for how many object I have above
    const item = menuItems[i];// getting the values of each object and assigning it to item
     let para = document.createElement("p");//create html paragraph
     const button = document.createElement("button");//creating a button
     const buttonText = document.createTextNode(`Add ${item.Name}`);//adding text to button
     button.addEventListener("click", () => addToCart(item));
     button.appendChild(buttonText);
     cart.appendChild(button);
     if(item.Discount !== undefined){
      const originalPrice = document.createElement("del");
      originalPrice.innerText = `Regular Price: $${item.Price}`;
      para.appendChild(originalPrice);
      const discountedPrice = document.createElement("ins");
      discountedPrice.innerText = ` Discounted Price: $${item.Price - item.Discount}`;
      para.appendChild(discountedPrice);
      para.appendChild(document.createTextNode(`  Item: ${item.Name} Description: ${item.Description}`));
    }else{
      para.innerText = `Item: ${item.Name} Price: $${item.Price} Description: ${item.Description}`;
    } 
    menu.appendChild(para);
}
}

 displayMenuItems();

function addToCart(item) {
  /*BELOW IS FOR THE REMOVAL BUTTON */
  const inCartButton = document.createElement("button");// creating a button for each item created in cart
  const inCartButtonText = document.createTextNode(`Remove`);//adding text to button
  inCartButton.addEventListener("click", () => displayShoppingCart(inCartButton));//listen for when inCartButton is clicked and call displayShoppingCart function 
  
  /*BELOW IS FOR TEXT CREATED IN PARAGRAPH*/
  const cartItem = document.createElement("p"); // create a new paragraph element
  let price = item.Price;
  if (item.Discount !== undefined) {
    price = item.Price - item.Discount;
    const originalPrice = document.createElement("del");
    originalPrice.innerText = `Regular Price: $${item.Price}`;
    cartItem.appendChild(originalPrice);
    const discountedPrice = document.createElement("ins");
    discountedPrice.innerText = ` Discounted Price: $${price}`;
    cartItem.appendChild(discountedPrice);
  }
  const cartItemText = document.createTextNode(` Added ${item.Name} to cart for $${price}`); // create text node for the added item details
  cartItem.appendChild(cartItemText); // append the text node to the paragraph element
  cartItem.dataset.price = price;
 
  inCartButton.appendChild(inCartButtonText);//append text to inCartButton
  cartItem.appendChild(inCartButton);// append button with text to paragraph
  cart.appendChild(cartItem); // append the paragraph element to the shopping cart element in the HTML
  totalCount();
}
  
function totalCount(){
 /*BELOW IF FOR THE TOTAL COUNT */
  const cartItems = cart.querySelectorAll("p"); // get all the paragraph elements in the shopping cart
  const numItems = cartItems.length; // get the length of the resulting array to get the number of items in the shopping cart
  const total = document.getElementById("total-count");//create a paragraph to display the total
  total.innerText = `Total items in cart: ${numItems} `;
 }
  
function displayShoppingCart(removeButton){
  const paragraphToRemove = removeButton.parentNode; // get the parent element of the remove button
  paragraphToRemove.remove(); // remove the parent element, which is the paragraph you want to delete
  totalCount();
}

    
