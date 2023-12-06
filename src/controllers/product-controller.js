const file = require("../modules/abmFile");
const controller = {
  product: (req, res) => {
    res.render("home");
  },
  productRegister: (req, res) => {
    res.render("productRegister");
    file.fileUpdate("../db/products.json", req.body);
  },
  productRegister: (req, res) => {
    res.render("productRegister");
    file.fileUpdate("../db/products.json", req.body);
  },
};

module.exports = controller;
