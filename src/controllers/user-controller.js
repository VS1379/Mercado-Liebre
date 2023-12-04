const controller = {
  register: (req, res) => {
    res.render("register");
    res.send(req.body)
    console.log(req.body);
  },
  newUser: (req, res) => {
    res.send(req.body)
    console.log(req.body);
  },
  login: (req, res) => {
    res.render("login");
  },
};

module.exports = controller;