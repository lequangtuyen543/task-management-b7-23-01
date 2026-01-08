const express = require("express");
const router = express.Router();

const controller = require("../../v1/controllers/user.controller");

router.post("/register", controller.register);

module.exports = router;