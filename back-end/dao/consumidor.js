//Constantes
const ConsumidorModel = require('../model/consumidor');
const LIMIT = 25;

class ConsumidorDAO 
{
	//Lista todos os consumidores
	listarTodos(req, res, next){
		//Variáveis
		let campo_filtro = '';
		let offset = (req.query.range != null ? JSON.parse(req.query.range) : null);
		let total = 0;
		
		//Obtendo a paginação da listagem
		req.query.offset = (offset != null ? offset[0] : null);
		req.query.limit = LIMIT;
		//req.query.where = { 'nome': { $like: '%Wallace%' } }; 
		req.query.order = (req.query.sort != null ? [JSON.parse(req.query.sort)] : null);
		req.query.where = (req.query.filter != null ? JSON.parse(req.query.filter) : null);

		ConsumidorModel
			.count()
			.then(function(total_param){
				total = total_param;

				ConsumidorModel
				.findAll(req.query)
				.then(function(consumidor) {
					res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
					res.setHeader('Content-Range', 'bytes 0-25/'+total.toString());
					res.status(200).send(consumidor);
				})
				.catch(function(err){
					res.status(400).json(err);  
				});
			});
	}

	//Lista um consumidor específico, de acordo com o id passado
	listar(req, res, next){
		ConsumidorModel
		.findById(req.params.id, { where: {ativo: 'N'} })
		.then(function(consumidor) {
			res.status(200).send(consumidor);
		})
		.catch(function(err){
			res.status(400).json(err);  
		});
	}

	//Insere um consumidor
	inserir(req, res, next, consumidor){
		ConsumidorModel.create(
		{ 
			nome: consumidor.nome, 
			data_nascimento: consumidor.data_nascimento, 
			sexo: consumidor.sexo,
			email: consumidor.email,
			senha: consumidor.senha,
			telefone: consumidor.telefone,
			cpf: consumidor.cpf,
			data_inclusao: consumidor.data_inclusao,
			ativo: consumidor.ativo,
			cep: consumidor.cep,
			endereco: consumidor.endereco,
			numero: consumidor.numero,
			bairro: consumidor.bairro,
			logradouro: consumidor.logradouro
		}
		)
		.then(function(consumidor) {
			res.status(201).send(consumidor);
		})
		.catch(function(err){
			res.status(400).json(err);  
		});
	}

	//Atualiza um consumidor
	atualizar(req, res, next, consumidor){
		ConsumidorModel
		.update(consumidor, {where: {id: req.params.id} })
		.then(function(consumidor) {
			res.status(200).send(consumidor);
		})
		.catch(function(err){
			res.status(400).json(err);  
			console.log(err);
		});
	}

	//Exclui um consumidor
	excluir(req, res, next){
		ConsumidorModel
		.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(function(consumidor) {
			res.status(200).json(consumidor);
		})
		.catch(function(err){
			res.status(400).json(err);  
		});
	}

	totalConsumidores(req, res, next){
		//Variáveis
		let consumidor = {};

		ConsumidorModel
			.count()
			.then(total => {
				consumidor = {total_consumidores: total};
				res.status(200).json(consumidor);
			})
			.catch(function(err){
				res.status(400).json(err);
			})
	}
}

module.exports = new ConsumidorDAO;