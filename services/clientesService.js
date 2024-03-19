const clientes = require("../repositories/cliente");

async function cadastraCliente({
  nome,
  endereco,
  bairro,
  cep,
  cidade,
  estado,
  observacao
}) {

    await clientes.create({
      nome: nome,
      endereco: endereco,
      bairro: bairro,
      cep: cep,
      cidade: cidade,
      estado: estado,
      observacao: observacao,
    });
}


async function consultaTodosClientes(){
  const todosClientes = await clientes.findAll();
  //console.log(todosClientes);
  return todosClientes
}







module.exports = { cadastraCliente, consultaTodosClientes }