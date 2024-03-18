const clientes = require("../repositories/banco")
const { consultaTodosClientes } = require("../services/clientesService");


module.exports = function (app){

      app.get("/listar", async function(req, res){
        const listaClientes = await consultaTodosClientes();
        //res.json(listaClientes)
        res.render("listar", { listaClientes })
    })

}