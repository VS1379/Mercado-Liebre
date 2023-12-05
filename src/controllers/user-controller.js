const controller = {
  register: (req, res) => {
    res.render("register");
  },
  newUser: (req, res) => {
    res.send(req.body);
    fileUpdate("../db/users.json", req.body);
  },
  login: (req, res) => {
    res.render("login");
  },
};
function fileRead(localization) {
  //leer un archivo
  const fs = require("fs");
  const path = require("path");
  let route = path.join(__dirname, localization);
  let file = fs.readFileSync(route, "utf-8");
  file = JSON.parse(file);
  return file;
}

function fileWrite(localization, content) {
  //escribir un archivo
  const fs = require("fs");
  const path = require("path");
  let route = path.join(__dirname, localization);
  fs.writeFileSync(route, content);
}

function fileUpdate(localization, content) {
  //actualiza un archivo
  const fs = require("fs");
  content = JSON.stringify(content);
  const path = require("path");
  let route = path.join(__dirname, localization);
  fs.appendFileSync(route, content);
}
module.exports = controller;
