const sequelize = require('../config/db');

class PedidoItemModel 
{ 
    constructor()
    {
        return sequelize.define('pedido_item', {
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
            pedido_id: {
                type: sequelize.Sequelize.INTEGER(11),
                references: 'pedido',
                referencesKey: 'id' 
            },
            produto_id: {
                type: sequelize.Sequelize.INTEGER(11),
                references: 'produto',
                referencesKey: 'id' 
            },
            quantidade: {
                type: sequelize.Sequelize.FLOAT,
                allowNull: false,
                defaultValue: 0.00
            },
            preco: {
                type: sequelize.Sequelize.FLOAT,
                allowNull: false,
                defaultValue: 0.00
            },
            total: {
                type: sequelize.Sequelize.FLOAT,
                allowNull: false,
                defaultValue: 0.00
            }
        },
        {
            tableName: 'pedido_item'
        })
    }
}

module.exports = new PedidoItemModel;