//Importando Classes
const PedidoDAO   = require("../dao/pedido");
const PedidoModel = require("../model/pedido");

//Classe
class PedidoController 
{
  	//Lista todas as empresas
  	listarTodos(req, res, next){
		PedidoDAO.listarTodos(req, res, next);    
  	}

  	//Lista um usuário específico, de acordo com o id passado
  	listar(req, res, next){
		PedidoDAO.listar(req, res, next);    
	}

	totalPedidos(req, res, next){
		PedidoDAO.totalPedidos(req, res, next);    
	}

	totalVendas(req, res, next){
		PedidoDAO.totalVendas(req, res, next);    
	}
    /*
    inserir(req, res, next){
		EmpresaModel.nome = req.body.nome;
		EmpresaModel.email = req.body.email;
		EmpresaModel.senha = req.body.senha;
		EmpresaModel.telefone = req.body.telefone;
		EmpresaModel.data_inclusao = req.body.data_inclusao;
		EmpresaModel.ativo = true;
		EmpresaModel.cep = req.body.cep;
		EmpresaModel.endereco = req.body.endereco;
		EmpresaModel.numero = req.body.numero;
		EmpresaModel.bairro = req.body.bairro;
		EmpresaModel.logradouro = req.body.logradouro;

		EmpresaDAO.inserir(req, res, next, EmpresaModel);
	}
	*/

	atualizar(req, res, next){
		PedidoDAO.atualizar(req, res, next);
	}

	excluir(req, res, next){
		PedidoDAO.excluir(req, res, next);    
	}
}

module.exports = new PedidoController;