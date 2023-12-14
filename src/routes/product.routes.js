const express = require("express");
const controller = require("../controllers/product-controller");
//const upload = require("../middlewares/multerProduct");
const router = express.Router();
const fileUpload = require("../middlewares/multerProduct");

router.get("/", controller.product);

router.get("/add", controller.productAdd);
router.post("/add", fileUpload.single("img"), controller.productAddP);

router.get("/edit/:id", controller.productEdit);
router.put("/edit/:id", fileUpload.single("img"), controller.productEditP);

router.delete("/delete/:id", controller.productDelete);

module.exports = router;
