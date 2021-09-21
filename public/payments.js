const host = "https://handmadeandrushka.com";
const startCheckout = document.getElementById("Buy");

const stripe = Stripe('pk_live_51Jc5FyEdwIoQ5jtYZuEoj5fDfV5cYtNK2hfqh8lsoe0Ltg7EiNrVSEzsLd14QMyOZA87OMORk4mtDi1qxhn84y7T00F0QkpkKu');

function payment(){
    startCheckout.textContent = "Processing...";
    buyProducts(myProducts());
}

function myProducts(){
    const getProducts = JSON.parse(localStorage.getItem("productsInCart"));

    const products = [];

    for (const property in getProducts){
        products.push({
            tag: getProducts[property].tag,
            inCart: getProducts[property].inCart,
            color: getProducts[property].color,
            letter: getProducts[property].letter ? getProducts[property].letter : " "
        });
    }
    return products;

}


async function buyProducts(cartProducts){
    try {

        const body = JSON.stringify({
            products: cartProducts
        })

        const response = await axios.post('https://handmadeandrushka.com/checkouts', body, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });

        console.log(response.data);

        localStorage.setItem("sessionId", response.data.session.id);

        await stripe.redirectToCheckout({
            sessionId: response.data.session.id
        })

    } catch (error) {
        console.log(error);
    }
}
