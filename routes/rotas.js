const clientes = require("../repositories/banco")
const clientes = require("../repositories/banco")

module.exports = function (app){

    app.get("/", function(req, res){
        res.render("home")
    })

    app.get("/cadastro", function(req, res){
        res.render("cadastro")
    })

    app.get("/cadastro/salvar", async function(req, res){
        try {
            const cliente = await clientes.create({
                nome: req.body.nome,
                endereco: req.body.endereco,
                cep: req.body.cep,
                cidade: req.body.cidade,
                estado: req.body.estado,
                observacao: req.body.observacao
             })
             console.log("Cliente ID:", cliente.id);
             res.render("cadastro/successo")
        }
        catch (error) {
            res.render("cadastro/erro")
        }
        
    })


    app.get("/listar", async function(req, res){
        const listaClientes = await clientes.findAll();
        console.log("Todos Clientes:", JSON.stringify(listaClientes, null, 2));
        res.render("listar", { listaClientes })
    })

}