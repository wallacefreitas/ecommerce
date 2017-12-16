//Constantes
const fs = require('fs-extra');
const router  = require('express').Router();

//Controllers
const AdministradorController = require('../controller/administrador');
const ConsumidorController    = require('../controller/consumidor');
const EmpresaController       = require('../controller/empresa');
const CategoriaController     = require('../controller/categoria');
const ProdutoController       = require('../controller/produto');
const SegmentoController      = require('../controller/segmento');
const ComentarioController    = require('../controller/comentario');
const PedidoController        = require('../controller/pedido');
const PedidoItemController    = require('../controller/pedido_item');

//Consumidor
router.get('/consumidor', ConsumidorController.listarTodos);
router.get('/consumidor/:id', ConsumidorController.listar);
router.get('/total_consumidores', ConsumidorController.totalConsumidores);
router.post('/consumidor', ConsumidorController.inserir);
router.put('/consumidor/:id', ConsumidorController.atualizar);
router.delete('/consumidor/:id', ConsumidorController.excluir);

//Empresa
router.get('/empresa', EmpresaController.listarTodos);
router.get('/empresa/:id', EmpresaController.listar);
router.post('/empresa', EmpresaController.inserir);
router.put('/empresa/:id', EmpresaController.atualizar);
router.delete('/empresa/:id', EmpresaController.excluir);
router.post('/auth', EmpresaController.autenticar);

//Categoria
router.get('/categoria', CategoriaController.listarTodos);
router.get('/categoria/:id', CategoriaController.listar);
router.post('/categoria', CategoriaController.inserir);
router.put('/categoria/:id', CategoriaController.atualizar);
router.delete('/categoria/:id', CategoriaController.excluir);

//Produto
router.get('/produto', ProdutoController.listarTodos);
router.get('/produto/:id', ProdutoController.listar);
router.post('/listar_mais_vendidos', ProdutoController.listarMaisVendidos);
router.post('/produto', ProdutoController.inserir);
router.put('/produto/:id', ProdutoController.atualizar);
router.delete('/produto/:id', ProdutoController.excluir);

//Comentário
router.get('/comentario', ComentarioController.listarTodos);
router.get('/comentario/:id', ComentarioController.listar);
//router.post('/comentario', ComentarioController.inserir);
//router.put('/comentario/:id', ComentarioController.atualizar);
//router.delete('/comentario/:id', ComentarioController.excluir);

//Segmentos
router.get('/segmento', SegmentoController.listarTodos);
router.get('/segmento/:id', SegmentoController.listar);

//Pedido
router.get('/pedido', PedidoController.listarTodos);
router.get('/pedido/:id', PedidoController.listar);
router.put('/pedido/:id', PedidoController.atualizar);
router.post('/total_pedidos', PedidoController.totalPedidos);
router.post('/total_vendas', PedidoController.totalVendas);

//Pedido Item
router.get('/pedido_item', PedidoItemController.listarTodos);
router.get('/pedido_item/:id', PedidoItemController.listar);
router.post('/pedido_item', PedidoItemController.inserir);

router.get('/uploads/:id', ConsumidorController.download)


module.exports = router;