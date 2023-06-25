

const path = require("path");
const myData = require("../module/module")


exports.usersControllers =(req, res) => {
    res.sendFile(path.join(__dirname +"/../views/index.html"))
}

exports.saveControllers = (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const data = {
        name,
        age
    }

    myData.push(data)
    res.status(201).json({
        "success you":"true",
        myData
    })

}