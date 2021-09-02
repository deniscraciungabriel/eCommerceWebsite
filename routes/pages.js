const express = require("express");

const router = express.Router();
const { homeCtrlFunction, shopCtrlFunction, handMadeEarringCtrlFunction, handMadeBraceletCtrlFunction, contactCtrlFunction, checkoutCtrlFunction, aboutCtrlFunction, costCtrlFunction, paymentsCtrlFunction, successCtrlFunction, finishOrder, faqCtrlFunction, handMadeEarring10mmCtrlFunction, handMadeEarring12mmCtrlFunction, handMadeKeyRingCtrlFunction, handMadePartyFavourCtrlFunction, handMadeRingCtrlFunction} = require("../controllers/pagesCtrlFile");
const { handMadeAshtrayCtrlFunction } = require("../controllers/pagesCtrlFile");

router.get("/", homeCtrlFunction);
router.get("/shop", shopCtrlFunction);
router.get("/HandMadeEarring", handMadeEarringCtrlFunction);
router.get("/HandMadeRing", handMadeRingCtrlFunction);
router.get("/HandMadeEarring10mm", handMadeEarring10mmCtrlFunction);
router.get("/HandMadeEarring12mm", handMadeEarring12mmCtrlFunction);
router.get("/HandMadeBracelet", handMadeBraceletCtrlFunction);
router.get("/HandMadeKeyRing", handMadeKeyRingCtrlFunction);
router.get("/HandMadePartyFavour", handMadePartyFavourCtrlFunction);
router.get("/HandMadeAshtray", handMadeAshtrayCtrlFunction);
router.get("/contact", contactCtrlFunction);
router.get("/checkout", checkoutCtrlFunction);
router.get("/About", aboutCtrlFunction);
router.get("/totalcost", costCtrlFunction);
router.post("/checkouts", paymentsCtrlFunction);
router.get("/checkout/success", successCtrlFunction);
router.get("/checkout/session/:id", finishOrder);
router.get("/faq", faqCtrlFunction);



module.exports = router;