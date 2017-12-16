//Constantes
const config    = require('../config-env.json');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.database.nome, config.database.usuario, config.database.senha, {
  host: config.database.host,
  port: config.database.porta,
  dialect: config.database.dialect,
  define: config.database.options,
  logging: config.database.log
});

//Realizando a conexão com o banco de dados
sequelize
  .authenticate()
  .then(function(err) {
    if (!!err) {
      console.log('Falha ao estabelecer conexão com o banco de dados:', err)
    }
  });

module.exports = sequelize;