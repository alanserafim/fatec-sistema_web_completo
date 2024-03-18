
const clientes = require("../repositories/banco");
const { cadastraCliente } = require("../services/clientesService");

module.exports = function (app) {
  app.get("/cadastro", function (req, res) {
    res.render("cadastro");
  });

  app.post("/cadastro/salvar", function (req, res) {
    const novoCliente = {
      nome: req.body.nome,
      endereco: req.body.endereco,
      bairro: req.body.bairro,
      cep: req.body.cep,
      cidade: req.body.cidade,
      estado: req.body.estado,
      observacao: req.body.observacao,
    }
    console.log(novoCliente);
    try {
      cadastraCliente(novoCliente);
      res.render("cadastro_sucesso");
    } catch (error) {
      res.render("cadastro_erro");
      console.log(error)
    }
  });


};

