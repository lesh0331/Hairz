"use strict";

const express = require("express");
const router = express.Router();  
const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);
router.get("/login.ejs", ctrl.login);
router.get("/register.ejs", ctrl.register);
router.get("/main.ejs", ctrl.main);

module.exports = router;