const file = require("../modules/abmFile");
const deleteFile = require("../modules/deleteFile");
const controller = {
  product: (req, res) => {
    let productos = file.fileRead("../db/products.json");
    res.render("productList", { productos });
  },
  productAdd: (req, res) => {
    res.render("productRegister");
  },
  productAddP: (req, res, next) => {
    const { v4: uuidv4 } = require("uuid");
    uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    if (!req.file) {
      const error = new Error("Por Favor Seleccione una imagen");
      error.httpStatusCode = 400;
      return next(error);
    }
    req.body.id = uuidv4();
    req.body.img = req.file.filename;
    console.log(req.file);
    file.fileUpdate("../db/products.json", req.body);
    res.redirect("/product");
  },
  productEdit: (req, res) => {
    let product = file.fileRead("../db/products.json");
    product = product.find((product) => product.id == req.params.id);
    if (product) {
      console.log(product);
      return res.render("productEdit", { product });
    }
    res.send("ID INVALIDA"); /// ERROR 404 FALTA!!!
  },
  productEditP: (req, res) => {
    let product = file.fileRead("../db/products.json");
    product = product.filter((product) => product.id !== req.params.id);
    req.body.id = req.params.id;
    if (req.file !== undefined) {
      req.body.img = req.file.filename;
    }
    file.fileWrite("../db/products.json", product);
    file.fileUpdate("../db/products.json", req.body);
    res.redirect("/product");
  },
  productDelete: (req, res) => {
    let product = file.fileRead("../db/products.json");
    let productToDelete = product.find(
      (product) => product.id == req.params.id
    );
    product = product.filter((product) => product.id !== req.params.id);
    req.body.id = req.params.id;
    deleteFile.deleteFile(productToDelete.img);
    file.fileWrite("../db/products.json", product);
    res.redirect("/product");
  },
};

module.exports = controller;
