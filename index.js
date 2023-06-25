const PORT = 3000;
const hostName="127.0.0.7";
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const router = require("./router/users.router")
const products = require("./router/products.router")
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());





app.use(router)
app.use(products)

app.use("*", (req,res)=>{
    res.status(404).send("<h1>404 not found</h1>")
}) 

app.listen(PORT,hostName,()=>{
    console.log(`go to server http://${hostName}:${PORT}`);
})