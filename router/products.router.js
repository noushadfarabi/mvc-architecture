const express = require("express");
const {  productsControllers, saveproductsControllers } = require("../controllers/products.controllers");


const products = express.Router();




products.get("/products", productsControllers)

products.post("/products", saveproductsControllers)

module.exports = products;
