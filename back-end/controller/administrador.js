//Variáveis
const AdministradorDAO = require("../dao/administrador");

//Classe
class AdministradorController {
  	autenticar(req, res, next){
		AdministradorDAO.autenticar(req, res, next);
  	}
}

module.exports = new AdministradorController