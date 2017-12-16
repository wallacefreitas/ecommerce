//Variáveis
const SegmentoModel = require('../model/segmento');
const LIMIT = 25;

class SegmentoDAO 
{
	//Lista todas as categorias
	listarTodos(req, res, next){
		//Variáveis
		let total = 0;

		req.query.offset = 0;
		req.query.limit = LIMIT;
		req.query.order = [JSON.parse(req.query.sort)];

		SegmentoModel
			.count()
			.then(function(total_param){
				total = total_param;

				SegmentoModel	
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

	//Lista um segmento específico, de acordo com o id passado
	listar(req, res, next){
		SegmentoModel
		.findById(req.params.id)
		.then(function(segmento) {
			res.status(200).send(segmento);
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

module.exports = new SegmentoDAO;