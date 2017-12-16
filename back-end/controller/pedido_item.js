//Importando Classes
const PedidoItemDAO   = require("../dao/pedido_item");
const PedidoItemModel = require("../model/pedido_item");

//Classe
class PedidoItemController 
{
  	//Lista todas as empresas
  	listarTodos(req, res, next){
		PedidoItemDAO.listarTodos(req, res, next);    
  	}

  	//Lista um usuário específico, de acordo com o id passado
  	listar(req, res, next){
		PedidoItemDAO.listar(req, res, next);    
	}

	inserir(req, res, next){
		PedidoItemDAO.inserir(req, res, next);
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

	atualizar(req, res, next){
		EmpresaModel.nome = req.body.nome;
		EmpresaModel.email = req.body.email;
		EmpresaModel.senha = req.body.senha;
		EmpresaModel.telefone = req.body.telefone;
		EmpresaModel.data_inclusao = req.body.data_inclusao;
		EmpresaModel.ativo = req.body.ativo;
		EmpresaModel.cep = req.body.cep;
		EmpresaModel.endereco = req.body.endereco;
		EmpresaModel.numero = req.body.numero;
		EmpresaModel.bairro = req.body.bairro;
		EmpresaModel.logradouro = req.body.logradouro;

		EmpresaDAO.atualizar(req, res, next, EmpresaModel);
	}

	excluir(req, res, next){
		EmpresaDAO.excluir(req, res, next);    
    }
    */
}

module.exports = new PedidoItemController;