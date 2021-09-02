
var Search = document.getElementById("searchbar");
var ProductsShop = document.getElementById("ProductsId");
var ProductsList2 = new Array ();


ProductsList2 = [
    {
        name: 'Hand Made Earring',
        tag: "HandMadeEarring",
        price: 9.99,
        inCart: 0,
        color: "Blue",
        
    },

    {
        name: 'Hand Made Bracelet',
        tag: "HandMadeBracelet",
        price: 14.99,
        inCart:0,
        color:"Purple",
        
    },

    {
        name: 'Hand Made KeyRing',
        Image: 'HandMadeKeyRing',
        tag: "HandMadeKeyRing",
        price: 9.99,
        inCart: 0,
        color: "Orange",
    },

    {
        name: 'Hand Made Ring',
        Image: 'HandMadeRing',
        tag: "HandMadeRing",
        price: 4.99,
        inCart: 0,
        color: "Pink",
    },

    {
        name: 'Hand Made PartyFavour',
        Image: 'HandMadePartyFavour',
        tag: "HandMadePartyFavour",
        price: 19.98,
        inCart: 0,
        color: "Orange",
    },

    {
        name: 'Hand Made Ashtray',
        Image: 'HandMadeAshtray',
        tag: "HandMadeAshtray",
        price: 19.98,
        inCart: 0,
        color: "Orange",
    }

    

];

function SearchBar(){
    console.log(Search.value);
}


function ShowShop(){
    ProductsShop.innerHTML = "";
    for(let i=0; i<ProductsList2.length; i++){
        if (Search.value == ""){
            if ((i+1) % 2 == 0){
                ProductsShop.innerHTML += `
                <div class="Product Centered" id="Product${i+1}" onclick="window.location.href='/${ProductsList2[i].tag}'" style="background-color:#F2E2FE">
                <img src="../images/${ProductsList2[i].tag}.png" alt="${ProductsList2[i].name} with no background" class="Centered" id ="${ProductsList2[i].tag}">
                <div class="ProductMessage">${ProductsList2[i].name}</div>
                <hr>
                <div class="ProductPrice">
                    <h5>€${ProductsList2[i].price}</h5>
                </div>
                </div>
        
        `
            }
            else{
                ProductsShop.innerHTML += `
                <div class="Product Centered" id="Product${i+1}" onclick="window.location.href='/${ProductsList2[i].tag}'">
                <img src="../images/${ProductsList2[i].tag}.png" alt="Earring with no background" class="Centered" id ="${ProductsList2[i].tag}">
                <div class="ProductMessage">${ProductsList2[i].name}</div>
                <hr>
                <div class="ProductPrice">
                    <h5>€${ProductsList2[i].price}</h5>
                </div>
                </div>
        
        `
            }
            
        
        }
        
    
    }
    
    
}

function Filter(){
    let k = 0;
    ProductsShop.innerHTML = "";

    if (Search.value != ""){
        for (let i=0; i<ProductsList2.length; i++){
            
        if((ProductsList2[i].name.toLowerCase()).includes(Search.value.toLowerCase())){
            k = k+1;
            if (k%2 == 0){
                ProductsShop.innerHTML += `
            <div class="Product Centered" id="Product${k}" onclick="window.location.href='/${ProductsList2[i].tag}'" style="background-color:#F2E2FE">
            <img src="../images/${ProductsList2[i].tag}.png" alt="Earring with no background" class="Centered">
            <div class="ProductMessage">${ProductsList2[i].name}</div>
            <hr>
            <div class="ProductPrice">
                <h5>$${ProductsList2[i].price}</h5>
            </div>
            </div>
            
            `
            }
            else{
                ProductsShop.innerHTML += `
            <div class="Product Centered" id="Product${k}" onclick="window.location.href='/${ProductsList2[i].tag}'">
            <img src="../images/${ProductsList2[i].tag}.png" alt="Earring with no background" class="Centered">
            <div class="ProductMessage">${ProductsList2[i].name}</div>
            <hr>
            <div class="ProductPrice">
                <h5>$${ProductsList2[i].price}</h5>
            </div>
            </div>
            
            `
            }
           
        }
    }
    }
    else{
        k = k+1;
        ProductsShop.innerHTML = "";
        ShowShop();
    }
    
    
}