const sequelize = require('../config/db');

class PedidoModel 
{ 
    constructor()
    {
        return sequelize.define('pedido', {
            id: { 
                type: sequelize.Sequelize.INTEGER(11), 
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
                unique: true 
            },
            codigo: {
                type: sequelize.Sequelize.STRING(6),
                allowNull: false,
                validate: {
                    len: [1, 6],
                    notEmpty: {
                            msg: "O campo Código não pode ser vazio!"
                        }   
                }
            },
            consumidor_id: {
                type: sequelize.Sequelize.INTEGER(11),
                references: 'consumidor',
                referencesKey: 'id' 
            },
            data_venda: {
                type: sequelize.Sequelize.DATE,
                allowNull: false,
                defaultValue: sequelize.Sequelize.NOW
            },
            status: { 
                type: sequelize.Sequelize.INTEGER(11), 
                allowNull: false,
            },
            total_venda: {
                type: sequelize.Sequelize.FLOAT,
                allowNull: false,
                defaultValue: 0.00
            },
            empresa_id: {
				type: sequelize.Sequelize.INTEGER(11),
				references: 'empresa',
				referencesKey: 'id' 
			}
        },
        {
            tableName: 'pedido'
        })
    }
}

module.exports = new PedidoModel;