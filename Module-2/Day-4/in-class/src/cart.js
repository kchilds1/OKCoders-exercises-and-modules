let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");
let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation =()=>{
    let IconForCart = document.getElementById("cartAmount");
    IconForCart.innerHTML = (basket.map((x)=> x.item).reduce((x,y) => x+y, 0));
};

calculation();

 let generateCartItems = ()=> {
    if(basket.length !==0) {
        return (shoppingCart.innerHTML = basket.map((x)=> {
            let {id, item} = x; //this is being done because I only need the id right now.
            let search = shopItemsData.find((y)=>y.id === id) || [];  //whatever Id we have in the basket we want to match it with the ID in the Data.js.  If function can't find anything return an empty array.
            return `
            <div class= "cart-item">
              <img src=${search.img} alt="" width = "100" height= "100"/>
              <div class = "details">

                <div class ="title-price-x">
                  <h4 class="title-price">
                    <p>${search.name}</p>
                    <p class="cart-item-price">$ ${search.price}</p>
                  </h4>
                  <i onclick="removeItem(${id})" class="fa-solid fa-x"></i>
                </div>

                <div class ="button-on-cart-page">
                  <i onclick ="decrease(${id})" class ="fa-solid fa-minus"></i>
                  <div id=${id} class ="quantity">${item}</div>
                  <i onclick = "increase(${id})" class ="fa-solid fa-plus"></i>
                </div>
               
                <h3>$ ${item * search.price}</h3>
              </div>
            </div>
            `;
        })
        
        .join(""));
        
    }
    else{
        shoppingCart.innerHTML = ``
        label.innerHTML = `
        <h2>Cart is Empty</h2>
        <a href="home.html">
          <button class="HomeBtn">Back to homepage</button>
        </a>
        `
    }
 };
 

 let increase = (id)=>{ 
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);
    
    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item:1,
          });
    } else {
        search.item += 1;
    }

    update(selectedItem.id);
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
};
generateCartItems();
let decrease = (id)=>{
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);
    
    if (search === undefined) return;
    else if(search.item === 0)
     return;
     else {
        search.item -= 1;
    }
    update(selectedItem.id);
    basket = basket.filter((x)=>x.item !== 0);
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x)=>x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    totalAmount();
};

let removeItem = (id) => {
  let selectedItem = id;
//   console.log(selectedItem.id);
  basket = basket.filter((x)=>x.id !== selectedItem.id);
  generateCartItems();
  totalAmount();
  localStorage.setItem("data", JSON.stringify(basket));
  // need to update cart value
  // const cartValue = document.getElementById("cartAmount");
  // cartValue.innerText = basket.length;

};

let ClearCart = ()=> {
  basket = []
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
}

let totalAmount = ()=> {
    if(basket.length !==0){
      let amount = basket.map((x) =>{
        let {item, id} = x;
        let search = shopItemsData.find((y)=>y.id === id) || [];
        return item * search.price;
      }).reduce((x,y)=> x+y, 0);
      label.innerHTML = `
      <h2>Total Bill: $${amount}</h2>
      <button class="checkout">Checkout</button>
      <button onclick = "ClearCart()" class="removeall">Clear Cart</button>
      `
    }else return;
}

totalAmount();