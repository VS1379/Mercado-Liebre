const express = require("express");
const { index } = require("../controllers/index-controller");
const controller = require("../controllers/index-controller");

const router = express.Router();

router.get("/", controller.index);
router.get("/index", controller.index);

module.exports = router;
