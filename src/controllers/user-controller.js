const file = require("../modules/abmFile");
const controller = {
  register: (req, res) => {
    res.render("userRegister");
  },
  newUser: (req, res) => {
    res.send(req.body);
    file.fileUpdate("../db/users.json", req.body);
  },
  login: (req, res) => {
    res.render("userLogin");
  },
};
module.exports = controller;
