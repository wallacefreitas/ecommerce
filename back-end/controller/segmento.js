//Importando Classes
const SegmentoDAO   = require("../dao/segmento");
const SegmentoModel = require("../model/segmento");

//Classe
class SegmentoController 
{
	//Lista todos os usuários
	listarTodos(req, res, next){
		SegmentoDAO.listarTodos(req, res, next);    
	}

	//Lista um usuário específico, de acordo com o id passado
	listar(req, res, next){
		SegmentoDAO.listar(req, res, next);    
	}

    /*
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

		SegmentoDAO.atualizar(req, res, next, CategoriaModel);
	}

	excluir(req, res, next){
		CategoriaDAO.excluir(req, res, next);    
    }
    */
}

module.exports = new SegmentoController;