const host = "http://handmadeandrushka.com";
const startCheckout = document.getElementById("Buy");

const stripe = Stripe('pk_test_51Jc5FyEdwIoQ5jtYR0TNmfnhGb9NKBCrADjQnWvB5bet05JkZDlJq6f32UcCADrxfUfBvqNvRgdkjE2XP5GN0Iy0005cKqcxqi');

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

        const response = await axios.post('http://handmadeandrushka.com/checkouts', body, {
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
