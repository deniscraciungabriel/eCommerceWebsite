const express = require("express");

const router = express.Router();
const { homeCtrlFunction, shopCtrlFunction, handMadeEarringCtrlFunction, handMadeLampCtrlFunction, contactCtrlFunction, checkoutCtrlFunction, aboutCtrlFunction, costCtrlFunction, paymentsCtrlFunction, successCtrlFunction, finishOrder, faqCtrlFunction } = require("../controllers/pagesCtrlFile")

router.get("/", homeCtrlFunction);
router.get("/shop", shopCtrlFunction);
router.get("/HandMadeEarring", handMadeEarringCtrlFunction);
router.get("/HandMadeLamp", handMadeLampCtrlFunction);
router.get("/contact", contactCtrlFunction);
router.get("/checkout", checkoutCtrlFunction);
router.get("/About", aboutCtrlFunction);
router.get("/totalcost", costCtrlFunction);
router.post("/checkouts", paymentsCtrlFunction);
router.get("/checkout/success", successCtrlFunction);
router.get("/checkout/session/:id", finishOrder);
router.get("/faq", faqCtrlFunction);



module.exports = router;