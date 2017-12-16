const sequelize = require('../config/db');

class ComentarioModel 
{ 
    constructor()
    {
        return sequelize.define('comentario_empresa', 
            {
                id: { 
                    type: sequelize.Sequelize.INTEGER(11), 
                    autoIncrement: true,
                    allowNull: false,
                    primaryKey: true,
                    unique: true 
                },
                descricao: {
                    type: sequelize.Sequelize.TEXT,
                    allowNull: true,
                    defaultValue: null,
                },
                avaliacao: {
                    type: sequelize.Sequelize.DOUBLE,
                    allowNull: false,
                    defaultValue: 0.00
                },
                empresa_id: {
                    type: sequelize.Sequelize.INTEGER(11),
                    references: 'empresa',
                    referencesKey: 'id' 
                },
                consumidor_id: {
                    type: sequelize.Sequelize.INTEGER(11),
                    references: 'consumidor',
                    referencesKey: 'id' 
                },
                data: {
                    type: sequelize.Sequelize.DATE,
                    allowNull: true,
                    defaultValue: sequelize.Sequelize.NOW
                },
            },
            {
                tableName: 'comentario_empresa'
            });
    }
}

module.exports = new ComentarioModel;