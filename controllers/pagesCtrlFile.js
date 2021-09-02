const { productList } = require("../productList");
const Stripe = require("stripe");
const stripe = Stripe("sk_test_51JOkBLKMsNJKLnxN3h3k0gRYdxSs3vvYSgtn9WdhdtRJz1rO06xGuZA6qNjIyfZrru8bCVqWXxoAscatdB6vE5Ux00DVHoWEVP");

exports.homeCtrlFunction = (req, res) =>{
    res.render("index");
};

exports.shopCtrlFunction = (req, res) =>{
    res.render("shop");
};

exports.faqCtrlFunction = (req, res) =>{
    res.render("faq");
}

exports.handMadeEarringCtrlFunction = (req, res) =>{
    res.render("HandMadeEarring");
};

exports.handMadeAshtrayCtrlFunction = (req, res) =>{
    res.render("HandMadeAshtray");
};

exports.handMadeRingCtrlFunction = (req, res) =>{
    res.render("HandMadeRing");
};

exports.handMadeEarring10mmCtrlFunction = (req, res) =>{
    res.render("HandMadeEarring10mm");
};

exports.handMadeEarring12mmCtrlFunction = (req, res) =>{
    res.render("HandMadeEarring12mm");
};

exports.handMadeBraceletCtrlFunction = (req, res) =>{
    res.render("HandMadeBracelet");
};

exports.handMadeKeyRingCtrlFunction = (req, res) =>{
    res.render("HandMadeKeyRing");
};

exports.handMadePartyFavourCtrlFunction = (req, res) =>{
    res.render("HandMadePartyFavour");
};

exports.contactCtrlFunction = (req, res) =>{
    res.render("contact");
}

exports.checkoutCtrlFunction = (req, res) =>{
    res.render("checkout");
}

exports.aboutCtrlFunction = (req, res) =>{
    res.render("about");
}

exports.successCtrlFunction = (req, res) =>{
    res.render("success");
}

exports.costCtrlFunction = (req, res) =>{
    try {
        res.status(200).json({
            products : productList
        })
    }
    catch (error) {
        console.log(error)
    }
}

exports.finishOrder = async (req,res) =>{
    const session = await stripe.checkout.sessions.retrieve(
        req.params.id
    )

    console.log("My payment was:");
    console.log(session);


    if (session.payment_status === "paid"){
        return res.status(200).json({
            success: true
        })
    }

    return res.status(200).json({
        success: false
    })
}


exports.paymentsCtrlFunction = async (req,res) =>{
    

    try {
        const productsFromFrontEnd = req.body.products;

        function productsToBuy(){
            let products = [];
            productList.forEach( singleProductList => {
                productsFromFrontEnd.forEach( singleProductFrontEnd => {
                    if(singleProductList.tag === singleProductFrontEnd.tag){
                        products.push({
                            name: singleProductList.name + " " + singleProductFrontEnd.color,
                            amount: singleProductList.price * 100.00,
                            currency: "eur",
                            quantity: singleProductFrontEnd.inCart
                        });
                    }
                })
            } )
            products.push({
                name: "Shipping",
                amount: 4.99 * 100.00,
                currency: "eur",
                quantity: 1
            })
            return products;
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            success_url: `${req.protocol}://${req.get("host")}/checkout/success`,
            cancel_url: `${req.protocol}://${req.get("host")}/checkout`,
            shipping_address_collection:{
                allowed_countries: ["BE", "AT", "BG", "HR", "DE", "FR", "GR", "IT", "NL", "GB", "RO", "ES", "PT", "CZ", "SK", "SI"]
            },
            line_items: productsToBuy()
        })

        res.status(200).json({
            status: "success",
            session: session
        })
    } catch (error) {
        console.log(error);
    }

}
