
var Search = document.getElementById("searchbar");
var ProductsShop = document.getElementById("ProductsId");
var ProductsList2 = new Array ();


ProductsList2 = [
    {
        name: 'Hand Made Earring',
        tag: "HandMadeEarring",
        price: 20,
        inCart: 0,
        color: "Yellow",
        
    },

    {
        name: 'Hand Made Lamp',
        tag: "HandMadeLamp",
        price: 15,
        inCart:0,
        color:"Yellow",
        
    },

    {
        name: 'Hand Made Chair',
        tag: "HandMadeEarring",
        price: 20,
        inCart: 0,
        color: "Yellow",
        
    },
    {
        name: 'Hand Made Table',
        tag: "HandMadeLamp",
        price: 15,
        inCart:0,
        color:"Yellow",
        
    },

    {
        name: 'Hand Made Lampy',
        tag: "HandMadeEarring",
        price: 20,
        inCart: 0,
        color: "Yellow",
        
    },

    {
        name: 'Hand Made Lamper',
        tag: "HandMadeLamp",
        price: 15,
        inCart:0,
        color:"Yellow",
        
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
                <div class="Product Centered" id="Product${i+1}" onclick="window.location.href='/${ProductsList2[i].tag}'">
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