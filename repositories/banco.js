const Sequelize = require("sequelize")

const sequelize = new Sequelize("sistema_web", "root", "Dev@9192#", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso");
}).catch(function(erro){
    console.log("Erro na conexão", erro)
})

const clientes = sequelize.define("clientes", {
    nome: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.STRING
    },
    cidade: {
        type: Sequelize.STRING
    },
    estado: {
        type: Sequelize.STRING
    },
    observacao: {
        type: Sequelize.STRING
    }
})

clientes.sync({force: true})

module.exports = clientes