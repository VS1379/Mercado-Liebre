const express = require("express");
const controller = require("../controllers/product-controller");

const router = express.Router();

router.get("/", controller.product);
router.get("/product/register", controller.productRegister);

module.exports = router;
