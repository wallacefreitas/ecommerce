var sequelize = require('../config/db');

class CategoriaModel 
{ 
  constructor()
  {
    return sequelize.define('categoria', {
      id: { 
        type: sequelize.Sequelize.INTEGER(11), 
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true 
      },
      nome: {
        type: sequelize.Sequelize.STRING(150),
        allowNull: false,
        validate: {
          len: [1, 150],
          notEmpty: {
            msg: "O campo Nome não pode ser vazio!"
          }   
        }
      },
      descricao: {
        type: sequelize.Sequelize.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      ativo: {
        type: sequelize.Sequelize.BOOLEAN,
        defaultValue: 1
      },
    },
    {
      tableName: 'categoria'
    },
    {
      indexes: [
        { 
          type: 'FULLTEXT', name: 'idx_categoria_nome', fields: ['nome'],
        }
      ]
    });
  }
}

module.exports = new CategoriaModel;