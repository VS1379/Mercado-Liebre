const express = require("express");
const controller = require("../controllers/product-controller");
const router = express.Router();
const path = require("path");

let ruta = path.join(__dirname, "/public/images/products");
const multer = require("multer");
const storage = multer.diskStorage({
  //destino en el cual se guarda.
  destination: function (req, file, cb) {
    cb(null, "/public/images/products");
  },
  //nombre con el que se guarda.
  filename: function (req, file, cb) {
    cb(null, `img-${Date.now()}${path.extname(file.originalname)}`);
  },
});
const uploadFile = multer({ storage: storage });

router.get("/", controller.product);

router.get("/add", controller.productAdd);
router.post("/add", uploadFile.single("img"), controller.productAddP);

router.get("/edit/:id", controller.productEdit);
router.put("/edit/:id", controller.productEditP);

router.delete("/delete/:id", controller.productDelete);

module.exports = router;
