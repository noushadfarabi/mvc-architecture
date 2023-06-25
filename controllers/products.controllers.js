

const path = require("path");
const myproducts = require("../module/products")


exports.productsControllers = (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/products.html"))
}

exports.saveproductsControllers = (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const products = {
        name,
        price
    }

    myproducts.push(products)
    res.status(201).json({
        "success you": "true",
        myproducts
    })

}