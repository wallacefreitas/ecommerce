//Importando Classes
var fs = require('fs-extra');
var ConsumidorDAO   = require("../dao/consumidor");
var ConsumidorModel = require("../model/consumidor");

//Classe
class ConsumidorController 
{
  	//Lista todos os usuários
	listarTodos(req, res, next){
		ConsumidorDAO.listarTodos(req, res, next);    
	}

	//Lista um usuário específico, de acordo com o id passado
	listar(req, res, next){
		ConsumidorDAO.listar(req, res, next);    
	}

	totalConsumidores(req, res, next){
		ConsumidorDAO.totalConsumidores(req, res, next);    
	}

	inserir(req, res, next){
		console.log("Oi 2", req.body);
		/*
		ConsumidorModel.nome = req.body.nome;
		ConsumidorModel.data_nascimento = req.body.data_nascimento;
		ConsumidorModel.sexo = req.body.sexo;
		ConsumidorModel.email = req.body.email;
		ConsumidorModel.senha = req.body.senha;
		ConsumidorModel.telefone = req.body.telefone;
		ConsumidorModel.cpf = req.body.cpf;
		ConsumidorModel.data_inclusao = req.body.data_inclusao;
		ConsumidorModel.ativo = true;
		ConsumidorModel.cep = req.body.cep;
		ConsumidorModel.endereco = req.body.endereco;
		ConsumidorModel.numero = req.body.numero;
		ConsumidorModel.bairro = req.body.bairro;
		ConsumidorModel.logradouro = req.body.logradouro;

		ConsumidorDAO.inserir(req, res, next, ConsumidorModel);
		*/
	}

	atualizar(req, res, next){
		let file = req.body.imagem;
		if( file){
			let nomeArquivo = req.body.nome+(new Date().getTime().toString());
			let destPath = `${__dirname}/../uploads/${nomeArquivo}`;
			let originPath = file.path;
			ConsumidorModel.imagem = nomeArquivo 
			fs.copy(originPath, destPath)

		}
		ConsumidorModel.nome = req.body.nome;
		ConsumidorModel.data_nascimento = req.body.data_nascimento;
		ConsumidorModel.sexo = req.body.sexo;
		ConsumidorModel.email = "wallace.freitas@nextsi.com.br";//req.body.email;
		ConsumidorModel.senha = req.body.senha;
		//ConsumidorModel.telefone = req.body.telefone;
		ConsumidorModel.cpf = req.body.cpf;
		ConsumidorModel.data_inclusao = req.body.data_inclusao;
		ConsumidorModel.ativo = req.body.ativo;
		ConsumidorModel.cep = req.body.cep;
		ConsumidorModel.endereco = req.body.endereco;
		ConsumidorModel.numero = req.body.numero;
		ConsumidorModel.bairro = req.body.bairro;
		ConsumidorModel.logradouro = req.body.logradouro;

		ConsumidorDAO.atualizar(req, res, next, ConsumidorModel);
	}

	excluir(req, res, next){
		ConsumidorDAO.excluir(req, res, next);    
	}

	download(req, res){
		let id =  req.params.id;
		var file = `${__dirname}/../uploads/${id}`;
		fs.readFile(file).then(
			function(data) {
				res.setHeader('Content-Type', 'image/jpg');
				res.end(data);
			}
		)
	}
}

module.exports = new ConsumidorController;