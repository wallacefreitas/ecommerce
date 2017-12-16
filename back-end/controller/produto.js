//Importando Classes
const ProdutoDAO   = require("../dao/produto");
const ProdutoModel = require("../model/produto");

//Classe
class ProdutoController 
{
	//Lista todos os usuários
	listarTodos(req, res, next){
		ProdutoDAO.listarTodos(req, res, next);    
	}

	//Lista um usuário específico, de acordo com o id passado
	listar(req, res, next){
		ProdutoDAO.listar(req, res, next);    
	}

	//Lista um usuário específico, de acordo com o id passado
	listarMaisVendidos(req, res, next){
		ProdutoDAO.listarMaisVendidos(req, res, next);    
	}

	inserir(req, res, next){
		ProdutoDAO.inserir(req, res, next);
	}

	atualizar(req, res, next){
		ProdutoDAO.atualizar(req, res, next);
	}

	excluir(req, res, next){
		ProdutoDAO.excluir(req, res, next);    
	}
}

module.exports = new ProdutoController;