//Variáveis
const PedidoModel = require('../model/pedido');
const PedidoDAO = require('../dao/pedido');
const PedidoItemModel = require('../model/pedido_item');
const LIMIT = 25;
const STATUS_ABERTO = 1;

class PedidoItemDAO 
{ 
	//Lista todos os itens do pedido
  	listarTodos(req, res, next){
	  	//Variaveis
	  	let total = 0;
		
		req.query.offset = 0;
		req.query.limit = LIMIT;
		req.query.order = (req.query.sort != null ? [JSON.parse(req.query.sort)] : null);
		req.query.where = (req.query.filter != null ? JSON.parse(req.query.filter) : null);

		PedidoItemModel
			.count()
			.then(function(total_param){
				total = total_param;
				
				PedidoItemModel
					.findAll(req.query)
					.then(function(pedido_item) {
						res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
						res.setHeader('Content-Range', 'bytes 0-25/'+total.toString());
						res.status(200).send(pedido_item);
					})
					.catch(function(err){
						res.status(400).json(err);  
					});
			});
	}

  	//Lista uma empresa específica, de acordo com o id passado
  	listar(req, res, next){
		PedidoItemModel
			.findById(req.params.id)
			.then(function(empresa) {
				res.status(200).send(empresa);
			})
			.catch(function(err){
				res.status(400).json(err);  
			});
	}	
	  
	inserir(req, res, next){
		let pedido_id = 0;
		let pedido_encontrado = PedidoDAO.listarPedidoAberto(req, res, next);
		let pedido = {};
		let pedidoAberto = 4;

		if(Object.keys(pedido_encontrado).length == 0){
			pedido.codigo = '000003';
			pedido.consumidor_id = 1;
			pedido.data_venda = Date.now().toString();
			pedido.status = STATUS_ABERTO;
			pedido.total_venda = 0.0;
			pedido.empresa_id = 1;

			//PedidoDAO.inserir(req, res, next, pedido);
		} else {
			pedidoAberto = PedidoDAO.listarPedidoAberto(req, res, next).id;
		}

		/*
		PedidoItemModel
			.create({
				codigo: '000002',
				pedido_id: pedidoAberto,
				produto_id: 2,
				quantidade: 3,
				preco: 10.0,
				total: 30.0
			})
			.then(function(pedido) {
				res.status(201);
			})
			.catch(function(err){
				res.status(400).json(err);  
			});
		*/
	}
}

module.exports = new PedidoItemDAO;