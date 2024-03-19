const express = require("express")
const app = express()
const port = process.env.PORT || 8081

const handlebars = require("express-handlebars").engine
app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))


var consign = require('consign');
consign().include('./routes',).into(app);

app.use(express.static("assets"));



app.listen(port, function(){
    console.log(`Servidor ativo na url http://localhost:${port}`)
})