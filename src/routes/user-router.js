const express = require("express");
const controller = require("../controllers/user-controller");

const router = express.Router();

router.get("/login", controller.login);
router.get("/register", controller.register);
router.post("/register", controller.newUser);



module.exports = router;
