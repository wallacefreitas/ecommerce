//Variáveis
const CategoriaModel = require('../model/categoria');
const LIMIT = 25;

class CategoriaDAO 
{
	//Lista todas as categorias
	listarTodos(req, res, next){
		//Variáveis
		let total = 0;

		req.query.offset = 0;
		req.query.limit = LIMIT;
		req.query.order = [JSON.parse(req.query.sort)];

		CategoriaModel
			.count()
			.then(function(total_param){
				total = total_param;

				CategoriaModel	
					.findAll(req.query)
					.then(function(categoria) {
						res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
						res.setHeader('Content-Range', 'bytes 0-25/'+total.toString());
						res.status(200).send(categoria);
					})
					.catch(function(err){
						res.status(400).json(err);  
					});
			})
	}

	//Lista uma categoria específica, de acordo com o id passado
	listar(req, res, next){
		CategoriaModel
		.findById(req.params.id, { where: {ativo: 'N'} })
		.then(function(categoria) {
			res.status(200).send(categoria);
		})
		.catch(function(err){
			res.status(400).json(err);  
		});
	}

	//Insere uma categoria
	inserir(req, res, next, categoria){
		CategoriaModel.create(
			{ 
				nome: categoria.nome, 
				descricao: categoria.descricao,
				data_inclusao: categoria.data_inclusao,
				ativo: categoria.ativo,
			}
		)
		.then(function(categoria) {
			res.status(201).send(categoria);
		})
		.catch(function(err){
			res.status(400).json(err);  
		});
	}

	//Atualiza um consumidor
	atualizar(req, res, next, categoria){
		CategoriaModel
		.update(categoria, {where: {id: req.params.id} })
		.then(function(categoria) {
			res.status(200).send(categoria);
		})
		.catch(function(err){
			res.status(400).json(err);  
			console.log(err);
		});
	}

	//Exclui um consumidor
	excluir(req, res, next){
		CategoriaModel
		.destroy({
			where: {
			id: req.params.id
			}
		})
		.then(function(categoria) {
			console.log('excluido');
		})
		.catch(function(err){
			res.status(400).json(err);  
		});
	}
}

module.exports = new CategoriaDAO;