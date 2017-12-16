//Constantes
const bodyParser    = require('body-parser');
const express       = require('express');
const helmet        = require('helmet');
const compression   = require('compression');
const cluster       = require('cluster');
const os            = require('os');
const numCPUs       = os.cpus().length;
const cors          = require('cors');
const api           = require('./routes/api');
const app           = express();         
const router        = express.Router();
const options       = {};

//Variáveis
var formData = require("express-form-data");

if (cluster.isMaster) {
	for (var i = 0; i < numCPUs; i++) {
    	cluster.fork();
  	}

  	cluster.on('exit', function(worker, code, signal) {
    	console.log('worker ' + worker.process.pid + ' died');
  	});
} else {
	app.use(express.static(__dirname+"/uploads"));
	app.use(formData.parse({}));
	app.use(formData.union());

	//Configurando o body parser para pegar POSTS
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	//Habilitando o CORS
	app.use(cors());
	app.options('*', cors());

	//Setando o Helmet
	app.use(helmet());

	//Setando o compression
	app.use(compression());

	// Add headers
	app.use(function (req, res, next) {
		// Website you wish to allow to connect
		res.setHeader('Access-Control-Allow-Origin', '*');

		// Request methods you wish to allow
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

		// Request headers you wish to allow
		res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

		// Set to true if you need the website to include cookies in the requests sent to the API (e.g. in case you use sessions)
		res.setHeader('Access-Control-Allow-Credentials', true);

		// Pass to next layer of middleware
		next();
	});

	//Setandos as rotas que estarão dentro de api/
	app.use('/api', api);

	//Inicia o servidor
	app.listen(3003, os.networkInterfaces())
}

module.exports = app;