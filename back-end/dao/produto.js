//Variáveis
const ProdutoModel = require('../model/produto');
const PedidoItemModel = require('../model/pedido_item');
const LIMIT = 25;

class ProdutoDAO 
{
  	//Lista todas os produtos
  	listarTodos(req, res, next){
		//Variáveis
		let total = 0;
		
		req.query.offset = 0;
		req.query.limit = LIMIT;
		req.query.order = (req.query.sort != null ? [JSON.parse(req.query.sort)] : null);

		req.query.where = (req.query.filter != null ? JSON.parse(req.query.filter) : null);

		ProdutoModel
			.count()
			.then(function(total_param){
				total = total_param;

				ProdutoModel
				.findAll(req.query)
				.then(function(produto) {
					res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
					res.setHeader('Content-Range', 'bytes 0-25/'+total.toString());
					res.status(200).send(produto);
				})
				.catch(function(err){
					res.status(400).json(err);  
				});
			})
			
  	}

  	//Lista uma Produto específica, de acordo com o id passado
  	listar(req, res, next){
    	ProdutoModel
			.findById(req.params.id, { where: {ativo: 'N'} })
			.then(function(produto) {
				res.status(200).send(produto);
			})
			.catch(function(err){
				res.status(400).json(err);  
			});
	  }
	  
	//Lista todas os produtos
  	listarMaisVendidos(req, res, next){
		//Variaveis
		let config    = require('../config-env.json');
		let Sequelize = require('sequelize');
		let sequelize = new Sequelize(config.database.nome, config.database.usuario, config.database.senha, {
			host: config.database.host,
			port: config.database.porta,
			dialect: config.database.dialect,
			define: config.database.options,
			logging: config.database.log
		});
		let sql = 'SELECT p.nome AS label, COALESCE(SUM(pi.quantidade), 0) AS value '+
			'FROM pedido_item pi '+
				'RIGHT JOIN produto p ON p.id = pi.produto_id '+
			'WHERE '+
				'p.empresa_id = '+req.body.empresa_id+' '+
			'GROUP BY '+
				'p.id, p.empresa_id '+
			'ORDER BY '+
				'total DESC '+
			'LIMIT '+
				'0, 5 ';

		sequelize
			.query(sql, {type: sequelize.QueryTypes.SELECT})
			.then(maisVendidos => {
				res.status(200).send(maisVendidos);
			})
  	}

  	//Insere uma produto
  	inserir(req, res, next){
		//Variáveis
		let produto = {};

		produto.nome = req.body.nome;
		produto.descricao = req.body.descricao;
		produto.preco = req.body.preco;
		produto.imagem = '';
		produto.thumbnail = req.body.thumbnail;
		produto.ativo = true;
		produto.empresa_id = req.body.empresa_id;
		produto.categoria_id = req.body.categoria_id;

    	ProdutoModel.create(
			{ 
				nome: produto.nome, 
				descricao: produto.descricao,
				preco: produto.preco,
				ativo: produto.ativo,
				imagem: produto.imagem,
				thumbnail: produto.thumbnail,
				empresa_id: produto.empresa_id,
				categoria_id: produto.categoria_id
			}
    	)
    	.then(function(produto) {
      		res.status(201).send(produto);
    	})
    	.catch(function(err){
			console.log(err);
      		res.status(400).json(err);  
    	});
  	}

  	//Atualiza um produto
  	atualizar(req, res, next){
		//Variáveis
		let produto = {};
		
		produto.nome = req.body.nome;
		produto.descricao = req.body.descricao;
		produto.preco = req.body.preco;
		produto.imagem = req.body.imagem;
		produto.thumbnnail = req.body.thumbnnail;
		produto.data_inclusao = req.body.data_inclusao;
		produto.ativo = req.body.ativo;
		produto.empresa_id = req.body.empresa_id;
		produto.categoria_id = req.body.categoria_id;

		ProdutoModel
			.update(produto, {where: {id: req.params.id} })
			.then(function(Produto) {
				res.status(200).send(produto);
			})
			.catch(function(err){
				res.status(400).json(err);  
				console.log(err);
			});
	}

  //Exclui um produto
  excluir(req, res, next){
    ProdutoModel
		.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(function(produto) {
			res.status(200).json(produto);
		})
		.catch(function(err){
			res.status(400).json(err);  
		});
  	}
}

module.exports = new ProdutoDAO;