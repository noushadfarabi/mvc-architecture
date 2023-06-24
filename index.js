const PORT = 3000;
const hostName = "127.0.0.7";
const express = require("express")
const app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const userRouter = require("./router/uses.router")
app.use(userRouter);


app.use((req, res) => {
    res.status(404).send("not found")
})

app.listen(PORT, hostName, ()=>{
   console.log(`click the link http://${hostName}:${PORT}`)
})