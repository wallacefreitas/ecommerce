//Variáveis
const ComentarioModel = require('../model/comentario');
const LIMIT = 25;

class ComentarioDAO 
{
    //Lista todos os comentários
    listarTodos(req, res, next){
        //Variáveis
        let total = 0;

        req.query.offset = 0;
        req.query.limit = (req.query.limit == null ? LIMIT : req.query.limit);
        //req.query.order = [JSON.parse(req.query.sort)];
        req.query.where = (req.query.filter != null ? JSON.parse(req.query.filter) : null);

        ComentarioModel
            .count()
            .then(function(total_param){
                total = total_param
                ComentarioModel
                    .findAll(req.query)
                    .then(function(comentario) {
                        res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
                        res.setHeader('Content-Range', 'bytes 0-25/'+total.toString());
                        res.status(200).send(comentario);
                    })
                    .catch(function(err){
                        res.status(400).json(err);  
                    });
            })
    }

  	//Lista uma Comentário específico, de acordo com o id passado
  	listar(req, res, next){
    	ComentarioModel
			.findById(req.params.id)
			.then(function(comentario) {
				res.status(200).send(comentario);
			})
			.catch(function(err){
				res.status(400).json(err);  
			});
  	}
}

module.exports = new ComentarioDAO;