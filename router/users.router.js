const express = require("express");
const { usersControllers, saveControllers } = require("../controllers/users.controllers");


const router = express.Router();




router.get("/users", usersControllers )

router.post("/users", saveControllers )

module.exports = router;

