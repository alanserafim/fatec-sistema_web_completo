const express = require("express")
const app = express()
const port = 8081

const handlebars = require("express-handlebars").engine
app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.listen(port, function(){
    console.log(`Servidor ativo na url http://localhost:${port}`)
})