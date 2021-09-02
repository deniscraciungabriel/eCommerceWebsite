
const Products = document.getElementById("Products");
const Details = document.getElementById("Payment");
const Paymet = document.getElementById("Payment");
var cartItems = [];
const HandMadeEarring = document.getElementById("HandMadeEarringImg");
const HandMadeBracelet = document.getElementById("HandMadeBraceletImg");

ProductsList = [
    {
        name: 'Hand Made Earring',
        Image: 'HandMadeEarring',
        tag: "HandMadeEarring",
        price: 9.99,
        inCart: 0,
        color: "Yellow",
    },

    {
        name: 'Hand Made Earring 10mm',
        Image: 'HandMadeEarring',
        tag: "HandMadeEarring10mm",
        price: 11.99,
        inCart: 0,
        color: "Yellow",
    },

    {
        name: 'Hand Made Earring 12mm',
        Image: 'HandMadeEarring',
        tag: "HandMadeEarring12mm",
        price: 14.99,
        inCart: 0,
        color: "Yellow",
    },

    {
        name: 'Hand Made Bracelet',
        tag: "HandMadeBracelet",
        Image: 'HandMadeBracelet',
        price: 14.99,
        inCart:0,
        color:"Purple",
    },

    {
        name: 'Hand Made KeyRing',
        Image: 'HandMadeKeyRing',
        tag: "HandMadeKeyRing",
        price: 4.99,
        inCart: 0,
        color: "Orange",
    },

    {
        name: 'Hand Made Ring',
        Image: 'HandMadeRing',
        tag: "HandMadeRing",
        price: 9.99,
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

]



/*async function getTotalCost(){
    const response = await axios.get("http://localhost:5000/totalcost");
    TC = response.data.TC;
    console.log(TC);
}

getTotalCost();*/



function DeleteValue(){
    Search.value = "";

}

function ShowProducts(){
    let Boh = localStorage.getItem("productsInCart");
    Boh = JSON.parse(Boh);
    Object.values(Boh).map(item => {

        if (item.inCart !== 0){
            Products.innerHTML += `

        <div class="Product1">
            <img src="/images/${item.Image}${item.color}.png" alt="Andrea Andrusca Earring" id="${item.tag}">
            <div class="Product1Details">
                <div class="Product1Text">${item.name}</div>
                <div class="Product1Price">€${item.price}</div>
                <div class="Product1Color">Color: ${item.color}</div>
                <div class="Product1Quantity">
                    <div class="Quantity">Quantity:</div><br>
                    <div>${item.inCart}</div>
                    <i class= "fa fa-plus" onclick = "IncreaseQuantity('${item.tag}${item.color}')"></i>
                    <i class="fa fa-minus" onclick = "DecreaseQuantity('${item.tag}${item.color}')"></i>
                    
                </div>
                <div class="Remove" onclick = "DeleteButtons('${item.name}${item.color}')">Remove</div>
            </div>
        </div>
        
        `;
        }
        
        
    });

    if (parseInt(localStorage.getItem("TotalCost")) != 0){
        Payment.innerHTML = `
    <div class="PaymentText">Order Summary</div>
    <hr>
    <div class="Subtotal">
        <div>Subtotal</div>
        <div>€${localStorage.getItem("TotalCost")}</div>
    </div>
    <div class="Shipping">
        <div>Shipping</div>
        <div>€4.99</div>
    </div>
    <hr>
    <div class="Total">
        <div>Total</div>
        <div>€${(parseFloat(localStorage.getItem("TotalCost")) + 4.99).toFixed(2) }</div>
        
    </div>
    `
    }
    

    
    
}


function cartNumbers(Product){
    
    let FinalProduct;
    for (let i=0; i<ProductsList.length; i++){
        if (ProductsList[i].name == Product){
            FinalProduct = ProductsList[i];
        }

    }

    let ProdtuctNumbers = localStorage.getItem("cartNumbers");
    ProdtuctNumbers = parseInt(ProdtuctNumbers);

if (ProdtuctNumbers){
    localStorage.setItem("cartNumbers", ProdtuctNumbers+1);
    document.querySelector(".CartNumber").textContent = ProdtuctNumbers + 1;
    
}
else{
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".CartNumber").textContent = 1;
}
    
    
    setItems(FinalProduct);
    

}


function setItems(Product){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    if (cartItems != null){

        if (cartItems[Product.tag + Product.color] == undefined ){   
            cartItems = {
                ...cartItems,
                [Product.tag + Product.color] : Product
            }
            cartItems[Product.tag + Product.color].inCart = 1;
        }
        else{
            cartItems[Product.tag + Product.color].inCart += 1;
        }
        
    }
    else{
        Product.inCart = 1;
        cartItems = {
            [Product.tag + Product.color] : Product
        }
    }
    
    

    
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems))
    
    
    
}

// Always display cart numbers
function onLoadCartNumbers(){
    let ProdtuctNumbers = localStorage.getItem("cartNumbers");

    if (ProdtuctNumbers){
            document.querySelector(".CartNumber").textContent = ProdtuctNumbers;
    }
}


function TotalCost(Product){
    let FinalProduct;
    for (let i=0; i<ProductsList.length; i++){
        if (ProductsList[i].name == Product){
            FinalProduct = ProductsList[i];
        }

    }
    //console.log("The product price is ", FinalProduct.price);

    CartCost = localStorage.getItem("TotalCost");
    if(CartCost != null){
        CartCost = parseFloat(CartCost)
        localStorage.setItem("TotalCost", CartCost + FinalProduct.price);
        
    }
    else{
        localStorage.setItem("TotalCost", FinalProduct.price);
        
    }

    
    
}




function Remove(Product){
    location.reload();
    let FinalProduct;
    for (let i=0; i<ProductsList.length; i++){
        if (ProductsList[i].name == Product){
            FinalProduct = ProductsList[i];
        }

    }

    let ProdtuctNumbers = localStorage.getItem("cartNumbers");
    ProdtuctNumbers = parseInt(ProdtuctNumbers);

if (ProdtuctNumbers){

    localStorage.setItem("cartNumbers", ProdtuctNumbers-1);
    document.querySelector(".CartNumber").textContent = ProdtuctNumbers - 1;

}
else{
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".CartNumber").textContent = 1;
}
    
    
    RemoveItems(FinalProduct);
    

}

function RemoveItems(Product){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    if (cartItems != null){

        if (cartItems[Product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [Product.tag] : Product
            }
        }
        cartItems[Product.tag].inCart -= 1;
    }
    else{
        Product.inCart = 1;
        cartItems = {
            [Product.tag] : Product
        }
    }
    
    

    
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems))
    
    
    
}
function RemoveTotalCost(Product){
    let FinalProduct;
    for (let i=0; i<ProductsList.length; i++){
        if (ProductsList[i].name == Product){
            FinalProduct = ProductsList[i];
        }

    }
    //console.log("The product price is ", FinalProduct.price);

    let CartCost = localStorage.getItem("TotalCost");

    if(CartCost != null){
        CartCost = parseInt(CartCost)
        localStorage.setItem("TotalCost", CartCost - FinalProduct.price);
    }
    else{
        localStorage.setItem("TotalCost", FinalProduct.price);
    }


    
}



function DeleteItems(Product){
    //location.reload();
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    if (cartItems != null){

        if (cartItems[Product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [Product.tag] : Product
            }
        }
        cartItems[Product.tag].inCart = 0;
    }
    else{
        Product.inCart = 1;
        cartItems = {
            [Product.tag] : Product
        }
    }
    
    

    
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems))
    
    
    
}


function DeleteButtons(Name){
    let ProductNumbers = localStorage.getItem("cartNumbers");
    Name = Name.replace(/ /g, "");
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let TotalCost = localStorage.getItem("TotalCost");
    

    localStorage.setItem("cartNumbers", ProductNumbers - cartItems[Name].inCart);
    localStorage.setItem("TotalCost", (TotalCost - (cartItems[Name].price * cartItems[Name].inCart)).toFixed(2));
    delete cartItems[Name];
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    location.reload();
}

function DecreaseQuantity(Name){
    let cartItems = localStorage.getItem("productsInCart");
    let TotalCost = localStorage.getItem("TotalCost");
    let ProductNumbers = localStorage.getItem("cartNumbers");

    cartItems = JSON.parse(cartItems);
    currentQuantity = cartItems[Name].inCart;
    currentProduct = cartItems[Name].tag;
    
    cartItems[Name].inCart = cartItems[Name].inCart - 1;
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    localStorage.setItem("TotalCost", ((parseFloat(TotalCost) - cartItems[Name].price)).toFixed(2));
    localStorage.setItem("cartNumbers", ProductNumbers - 1);
    location.reload();


}

function IncreaseQuantity(Name){
    let cartItems = localStorage.getItem("productsInCart");
    let TotalCost = localStorage.getItem("TotalCost");
    let ProductNumbers = localStorage.getItem("cartNumbers");

    cartItems = JSON.parse(cartItems);
    currentQuantity = cartItems[Name].inCart;
    currentProduct = cartItems[Name].tag;
    
    cartItems[Name].inCart = cartItems[Name].inCart + 1;
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    localStorage.setItem("TotalCost", (parseFloat(TotalCost) + parseFloat(cartItems[Name].price)).toFixed(2));
    localStorage.setItem("cartNumbers", (parseInt(ProductNumbers) + 1));
    location.reload();
}


function ChangeColor(colorName, productName, productImage){
    document.getElementById(`${productImage.replace(/ +/g, "")}Img`).src = `/images/${productImage.replace(/ +/g, "")}${colorName}.png`;
    let FinalProductColor;
    for (let i=0; i<ProductsList.length; i++){
        if (ProductsList[i].name == productName){
            FinalProductColor = ProductsList[i];
        }

    }
    FinalProductColor.color = colorName;
}

function ClearStorage(){
    localStorage.clear();
}

onLoadCartNumbers(); 


