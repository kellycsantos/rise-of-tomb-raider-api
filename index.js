const express = require("express")
const cors = require("cors");

const dados = require("./tomb-raider")
const app = express()

app.use(express.json())
app.use(
    cors({
        methods:["GET"]
    })
)

app.get("/", (req,res) =>{
    res.json({
            data: dados,
            status: 200
       
    })
})

app.listen(3035)
