
let shop = document.getElementById("shop");



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