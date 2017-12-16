//Variáveis
const AdministradorModel = require('../model/administrador');

class AdministradorDAO 
{
  autenticar(req, res, next){
	console.log(req.body);
    AdministradorModel.findOne({
      	where: {
        	email: req.body.username,
        	senha: req.body.password
      	}
    })
    .then(function(administrador) {
		//Variáveis
		let retorno = {};
		let mensagem = '';
		let status = 0;

		if (administrador){
			status = 200;
			mensagem = '';
		} else {
			status = 400;
			mensagem = 'Login ou senha inválido(s)';
		}

		retorno = {
			body: administrador,
			mensagem: mensagem
		}

      	res.status(status).json(retorno);
    })
    .catch(function(err){
      	res.status(400).json(err);  
    });
  };
}

module.exports = new AdministradorDAO;