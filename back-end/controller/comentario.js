//Importando Classes
const ComentarioDAO   = require("../dao/comentario");
const ComentarioModel = require("../model/comentario");

//Classe
class ComentarioController 
{
  	//Lista todas as empresas
  	listarTodos(req, res, next){
		ComentarioDAO.listarTodos(req, res, next);    
  	}

  	//Lista um usuário específico, de acordo com o id passado
  	listar(req, res, next){
		ComentarioDAO.listar(req, res, next);    
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

module.exports = new ComentarioController;