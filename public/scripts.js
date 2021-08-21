
const Products = document.getElementById("Products");
const Details = document.getElementById("Payment");
const Paymet = document.getElementById("Payment");
var cartItems = [];

ProductsList = [
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
            <img src="/images/${item.tag}.png" alt="Andrea Andrusca Earring">
            <div class="Product1Details">
                <div class="Product1Text">${item.name}</div>
                <div class="Product1Price">$${item.price}.00</div>
                <div class="Product1Color">Color: Yellow</div>
                <div class="Product1Quantity">
                    <div class="Quantity">Quantity:</div><br>
                    <div>${item.inCart}</div>
                    <i class= "fa fa-plus" onclick = "IncreaseQuantity('${item.tag}')"></i>
                    <i class="fa fa-minus" onclick = "DecreaseQuantity('${item.tag}')"></i>
                    
                </div>
                <div class="Remove" onclick = "DeleteButtons('${item.name}')">Remove</div>
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
        <div>$${localStorage.getItem("TotalCost")}.00</div>
    </div>
    <div class="Shipping">
        <div>Shipping</div>
        <div>$5.00</div>
    </div>
    <hr>
    <div class="Total">
        <div>Total</div>
        <div>$${parseInt(localStorage.getItem("TotalCost")) + 5 }.00</div>
        
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

        if (cartItems[Product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [Product.tag] : Product
            }
        }
        cartItems[Product.tag].inCart += 1;
    }
    else{
        Product.inCart = 1;
        cartItems = {
            [Product.tag] : Product
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
        CartCost = parseInt(CartCost)
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
    localStorage.setItem("TotalCost", TotalCost - (cartItems[Name].price * cartItems[Name].inCart));
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
    localStorage.setItem("TotalCost", TotalCost - cartItems[Name].price);
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
    localStorage.setItem("TotalCost", (parseInt(TotalCost) + parseInt(cartItems[Name].price)));
    localStorage.setItem("cartNumbers", (parseInt(ProductNumbers) + 1));
    location.reload();
}



onLoadCartNumbers(); 


