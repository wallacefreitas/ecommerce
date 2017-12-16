//Importando Classes
const EmpresaDAO   = require("../dao/empresa");
const EmpresaModel = require("../model/empresa");

//Classe
class EmpresaController 
{
  	//Lista todas as empresas
  	listarTodos(req, res, next){
		EmpresaDAO.listarTodos(req, res, next);    
  	}

  	//Lista um usuário específico, de acordo com o id passado
  	listar(req, res, next){
		EmpresaDAO.listar(req, res, next);    
	}

	inserir(req, res, next){
		EmpresaDAO.inserir(req, res, next);
	}

	atualizar(req, res, next){
		EmpresaDAO.atualizar(req, res, next);
	}

	excluir(req, res, next){
		EmpresaDAO.excluir(req, res, next);    
	}

	autenticar(req, res, next){
		EmpresaDAO.autenticar(req, res, next);
  	}
}

module.exports = new EmpresaController;