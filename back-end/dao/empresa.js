//Variáveis
const EmpresaModel = require('../model/empresa');
const LIMIT = 25;

class EmpresaDAO {
	//Lista todas as empresas
	listarTodos(req, res, next) {
		//Variáveis
		let total = 0;

		req.query.offset = 0;
		req.query.limit = LIMIT;
		req.query.order = (req.query.sort != null ? [JSON.parse(req.query.sort)] : null);
		req.query.where = (req.query.filter != null ? JSON.parse(req.query.filter) : null);

		EmpresaModel
			.count()
			.then(function (total_param) {
				total = total_param;

				EmpresaModel
					.findAll(req.query)
					.then(function (empresa) {
						res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
						res.setHeader('Content-Range', 'bytes 0-25/' + total.toString());
						res.status(200).send(empresa);
					})
					.catch(function (err) {
						res.status(400).json(err);
					});
			})
	}

	//Lista uma empresa específica, de acordo com o id passado
	listar(req, res, next) {
		EmpresaModel
			.findById(req.params.id, { where: { ativo: 'N' } })
			.then(function (empresa) {
				res.status(200).send(empresa);
			})
			.catch(function (err) {
				res.status(400).json(err);
			});
	}

	//Insere uma empresa
	inserir(req, res, next) {
		//Variáveis
		let empresa = {};

		empresa.nome = req.body.nome;
		empresa.email = req.body.email;
		empresa.senha = req.body.senha;
		empresa.telefone = req.body.telefone;
		empresa.ativo = req.body.ativo;
		empresa.cep = req.body.cep;
		empresa.endereco = req.body.endereco;
		empresa.numero = req.body.numero;
		empresa.bairro = req.body.bairro;
		empresa.logradouro = req.body.logradouro;
		empresa.thumbnail = req.body.thumbnail;

		EmpresaModel.create(
			{
				nome: empresa.nome,
				email: empresa.email,
				senha: empresa.senha,
				telefone: empresa.telefone,
				ativo: empresa.ativo,
				cep: empresa.cep,
				endereco: empresa.endereco,
				numero: empresa.numero,
				bairro: empresa.bairro,
				logradouro: empresa.logradouro,
				imagem: empresa.imagem,
				thumbnail: empresa.thumbnail
			}
		)
			.then(function (empresa) {
				res.status(201).send(empresa);
			})
			.catch(function (err) {
				res.status(400).json(err);
			});
	}

	//Atualiza uma empresa
	atualizar(req, res, next) {
		//Variáveis
		let empresa = {};

		empresa.nome = req.body.nome;
		empresa.email = req.body.email;
		empresa.senha = req.body.senha;
		empresa.telefone = req.body.telefone;
		empresa.data_inclusao = req.body.data_inclusao;
		empresa.ativo = req.body.ativo;
		empresa.cep = req.body.cep;
		empresa.endereco = req.body.endereco;
		empresa.numero = req.body.numero;
		empresa.bairro = req.body.bairro;
		empresa.logradouro = req.body.logradouro;
		empresa.thumbnail = req.body.thumbnail;

		EmpresaModel
			.update(empresa, { where: { id: req.params.id } })
			.then(function (empresa) {
				res.status(200).send(empresa);
			})
			.catch(function (err) {
				res.status(400).json(err);
			});
	}

	//Exclui uma empresa
	excluir(req, res, next) {
		EmpresaModel
			.destroy({
				where: {
					id: req.params.id
				}
			})
			.then(function (empresa) {
				console.log('excluido');
			})
			.catch(function (err) {
				res.status(400).json(err);
			});
	}

	autenticar(req, res, next) {
		EmpresaModel.findOne({
			where: {
				email: req.body.username,
				senha: req.body.password,
				ativo: 1
			}
		})
		.then(function (empresa) {
			//Variáveis
			let retorno = {};
			let mensagem = '';
			let status = 0;

			if (empresa) {
				status = 200;
				mensagem = '';
			} else {
				status = 400;
				mensagem = 'Login ou senha inválido(s)';
			}

			retorno = {
				body: empresa,
				mensagem: mensagem
			}

			res.status(status).json(retorno);
		})
		.catch(function (err) {
			res.status(400).json(err);
		});
	};
}

module.exports = new EmpresaDAO;