



let shop = document.getElementById("shop");

let shopItemsData = [{
 id:"paradises",
 name: "Paradise",
 price: 10,
 img: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg"
},
{
    id:"c",
 name: "Hot Coco",
 price: 5,
 img: "https://assets.bonappetit.com/photos/57accdd1f1c801a1038bc794/1:1/w_2560%2Cc_limit/Hot-Chocolate-2-of-5.jpg"
},
{
    id:"l",
 name: "Salted Carmel Latte",
 price: 5,
 img: "https://cdn10.bostonmagazine.com/wp-content/uploads/2016/01/warm-latte-mug.jpg"
},
{
    id:"b",
 name: "Flavored Beverages",
 price: 7,
 img: "louis-hansel-H7Lti8qa0dE-unsplash.jpg"
},
{
    id:"ccp",
 name: "Chocolate Chip Pancakes",
 price: 10,
 img: "https://insanelygoodrecipes.com/wp-content/uploads/2021/02/Chocolate-Chip-Pancakes-with-Whipped-Cream-683x1024.png"
},
{
    id:"rp",
 name: "Regular Pancakes",
 price: 10,
 img: "https://thebigmansworld.com/wp-content/uploads/2021/06/keto-pancakes.jpeg"
},
{
    id:"cd",
 name: "Spicy Chicken Dinner",
 price: 20,
 img: "https://www.ecoliteracy.org/sites/default/files/styles/hero_image_small/public/media/rethinking-school-lunch-guide.jpg?"
},
{
    id:"tsc",
 name: "Tuna Sandwich Combo",
 price: 15,
 img: "https://img.taste.com.au/zGYXdlWJ/w720-h480-cfill-q80/taste/2020/01/feb20_green-goodness-chicken-sandwich-taste-157311-1.jpg"
}]

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop =() =>{
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let {id, name, price, img} = x;
        let search = basket.find((x) => x.id === id) || [];
        return `
         <div id=product-id-${id} class="cart-item">
            <img src = ${img} width="155" height="200"/>
            <div class ="details">
                <h3>${name}</h3>
                <div class ="price-quantity">
                    <h2>$ ${price}</h2>
                    <div class ="button-on-cart-page">
                        <i onclick ="decrease(${id})" class ="fa-solid fa-minus"></i>
                        <div id=${id} class ="quantity">
                        ${search.item === undefined? 0: search.item}
                        </div>
                        <i onclick = "increase(${id})" class ="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
          </div>
        `
    }).join(""));
};

generateShop();

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
    localStorage.setItem("data", JSON.stringify(basket));
};

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
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x)=>x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation =()=>{
    let IconForCart = document.getElementById("cartAmount");
    IconForCart.innerHTML = (basket.map((x)=> x.item).reduce((x,y) => x+y, 0));
};

calculation();