var express = require("express");
var router = express.Router();

const PaymentController = require("../controllers/PaymentController");
const PaymentServices = require("../Services/PaymentService");
const PaymentInstance = new PaymentController(new PaymentServices());

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ message: "Welcome to the API" });
});

router.get("/payment", (req, res) => {
  PaymentInstance.getPaymentLink(req, res);
});

router.get("/subscription", (req, res) => {
  PaymentInstance.getSubscriptionLink(req, res);
});

module.exports = router;
