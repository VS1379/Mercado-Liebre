const controller = {
  register: (req, res) => {
    res.render("register");
  },
  newUser: (req, res) => {
    res.send(req.body);
    console.log("--v--");
    console.log(req.body);
    console.log("--^--");
    res.redirect("/");
  },
  login: (req, res) => {
    res.render("login");
  },
};
function fileRead(localization) {
  //leer un archivo
  const fs = require("fs");
  let file = fs.readFileSync(localization, "utf-8");
  file = JSON.parse(file);
  return file;
}

function fileWrite(localization, content) {
  //escribir un archivo "../db/users.json"
  const fs = require("fs");
  fs.writeFileSync(localization, content);
}

function fileUpdate(localization, content) {
  //actualiza un archivo
  const fs = require("fs");
  content = JSON.stringify(content);
  fs.appendFileSync(localization, content);
}
module.exports = controller;
