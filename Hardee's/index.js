let shopItemsData = [{
    id:"BBLCP",
    name: "BLUEBERRY & LEMON CREAM CHEESE FRIED PIE",
    cals: 320,
    img: "BlueberryLemonCreamCheeseFriedPie.png"
   },
   {
       id:"HBCS",
    name: "HAND-BREADED CHICKEN SANDWICH",
    cals: 640,
    img: "HandBreadedChickenSandwich.png"
   },
   
   {
    id:"SSCC",
    name: "SUPER STAR® WITH CHEESE COMBO",
    cals: "1220-1940",
    img: "SuperStarWithCheeseCombo.png"
   },
   
   {
       id:"LBB",
    name: "LOADED BREAKFAST BURRITO",
    cals: 580,
    img: "LoadedBreakfastBurrito.png"
   }]

   

let shop = document.getElementById("shop");

let generateShop =() =>{
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let {id, name, cals, img} = x;
        console.log(x);
         return `
         <div id=product-id${id} class="m-items">
           <img src=${img} width="170" height="100"/>
           <h3>${name}</h3>
           <p>${cals} cals</p>
           <button class="button">VIEW DETAILS</button>
         </div>
         `
    }).join(""));
};

generateShop();