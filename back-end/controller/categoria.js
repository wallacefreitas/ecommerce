//Importando Classes
const CategoriaDAO   = require("../dao/categoria");
const CategoriaModel = require("../model/categoria");

//Classe
class CategoriaController 
{
	//Lista todos os usuários
	listarTodos(req, res, next){
		CategoriaDAO.listarTodos(req, res, next);    
	}

	//Lista um usuário específico, de acordo com o id passado
	listar(req, res, next){
		CategoriaDAO.listar(req, res, next);    
	}

	inserir(req, res, next){
		CategoriaModel.nome = req.body.nome;
		CategoriaModel.descricao = req.body.descricao;
		CategoriaModel.data_inclusao = req.body.data_inclusao;
		CategoriaModel.ativo = true;

		CategoriaDAO.inserir(req, res, next, CategoriaModel);
	}

	atualizar(req, res, next){
		CategoriaModel.nome = req.body.nome;
		CategoriaModel.descricao = req.body.descricao;
		CategoriaModel.data_inclusao = req.body.data_inclusao;
		CategoriaModel.ativo = req.body.ativo;

		CategoriaDAO.atualizar(req, res, next, CategoriaModel);
	}

	excluir(req, res, next){
		CategoriaDAO.excluir(req, res, next);    
	}
}

module.exports = new CategoriaController;