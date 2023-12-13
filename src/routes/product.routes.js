const express = require("express");
const controller = require("../controllers/product-controller");
const multer = require("../middlewares/multerProduct");
const router = express.Router();

let uploadFile = multer;

router.get("/", controller.product);

router.get("/add", controller.productAdd);
router.post("/add", uploadFile.single("img"), controller.productAddP);

router.get("/edit/:id", controller.productEdit);
router.put("/edit/:id", controller.productEditP);

router.delete("/delete/:id", controller.productDelete);

module.exports = router;
