const express = require("express");
const controller = require("../controllers/product-controller");

const router = express.Router();

router.get("/", controller.product);

router.get("/add", controller.productAdd);
router.post("/add", controller.productAddP);

router.get("/edit/:id", controller.productEdit);
router.put("/edit/:id", controller.productEditP);

router.delete("/delete/:id", controller.productDelete);

module.exports = router;
