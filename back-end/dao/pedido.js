//Variáveis
const PedidoModel = require('../model/pedido');
const LIMIT = 25;

class PedidoDAO 
{
  	//Lista todas as empresas
  	listarTodos(req, res, next){
	  	//Variaveis
		let total = 0;
		  
		req.query.offset = 0;
		req.query.limit = LIMIT;
		req.query.order = (req.query.sort != null ? [JSON.parse(req.query.sort)] : null);
		req.query.where = (req.query.filter != null ? JSON.parse(req.query.filter) : null);

		PedidoModel
			.count()
			.then(function(total_param){
				total = total_param;

				PedidoModel
					.findAll(req.query)
					.then(function(pedido) {
						res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
						res.setHeader('Content-Range', 'bytes 0-25/'+total.toString());
						res.status(200).send(pedido);
					})
					.catch(function(err){
						res.status(400).json(err);  
					});
			})
  	}

  	//Lista um pedido específico, de acordo com o id passado
  	listar(req, res, next){
		PedidoModel
			.findById(req.params.id)
			.then(function(pedido) {
				res.status(200).send(pedido);
			})
			.catch(function(err){
				res.status(400).json(err);  
			});
	}
	  
	totalPedidos(req, res, next){
		//Variáveis
		let pedido = {};

		console.log(req.body.empresa_id);
		PedidoModel
			.count({where: {empresa_id: req.body.empresa_id}})
			.then(total => {
				pedido = {total_pedidos: total};
				res.status(200).json(pedido);
			})
			.catch(function(err){
				res.status(400).json(err);
			})
			
		return pedido;
	}

	totalVendas(req, res, next){
		//Variáveis
		let pedido = {};

		PedidoModel
			.sum('total_venda', {where: {empresa_id: req.body.empresa_id}})
			.then(total => {
				pedido = {total_vendas: total};
				res.status(200).json(pedido);
			})
			.catch(function(err){
				res.status(400).json(err);
			})
	}

  	//Insere um pedido
  	inserir(req, res, next, pedido){
		PedidoModel
			.create(
			{ 
				codigo: pedido.codigo,
				pedido_id: pedido.pedido_id,
				produto_id: pedido.produto_id,
				quantidade: pedido.quantidade,
				status: pedido.status,
				preco: pedido.preco,
				total_venda: pedido.total_venda,
				empresa_id: pedido.empresa_id
			})
			.then(function(pedido_param) {
				res.status(201).send(pedido_param);
			})
			.catch(function(err){
				res.status(400).json(err);  
			});
  	}

  	//Atualiza uma empresa
  	atualizar(req, res, next){
		//Variáveis
		let pedido = {};

		pedido.status = req.body.status;

		PedidoModel
			.update(pedido, {where: {id: req.params.id} })
			.then(function(pedido) {
				res.status(200).send(pedido);
			})
			.catch(function(err){
				res.status(400).json(err);  
			});
	}

  	//Exclui um pedido
  	excluir(req, res, next){
    	EmpresaModel
			.destroy({
				where: {
					id: req.params.id
				}
			})
			.then(function(empresa) {
				console.log('excluido');
			})
			.catch(function(err){
				res.status(400).json(err);  
			});
	}

	listarPedidoAberto(req, res, next){
		let pedido = {};

		PedidoModel
		.findAll({where: {status: 0}})
		.then(function(pedido_param) {
			pedido = pedido_param;
			res.status(200);
		})
		.catch(function(err){
			res.status(400).json(err);  
		});	

		return pedido;
	}

}

module.exports = new PedidoDAO;