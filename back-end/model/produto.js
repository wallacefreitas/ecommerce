const sequelize = require('../config/db');

class ProdutoModel 
{ 
	constructor()
	{
		return sequelize.define('produto', {
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
			preco: {
				type: sequelize.Sequelize.FLOAT,
				allowNull: false,
				defaultValue: 0.00
			},
			imagem: {
				type: sequelize.Sequelize.STRING(180),
				allowNull: true,
				defaultValue: null
			},
			thumbnail: {
				type: sequelize.Sequelize.STRING(180),
				allowNull: true,
				defaultValue: null
			},
			data_inclusao: {
				type: sequelize.Sequelize.DATE,
				defaultValue: sequelize.Sequelize.NOW
			},
			data_alteracao: {
				type: sequelize.Sequelize.DATE,
				allowNull: true,
				defaultValue: null
			},
			data_exclusao: {
				type: sequelize.Sequelize.DATE,
				allowNull: true,
				defaultValue: null
			},
			ativo: {
				type: sequelize.Sequelize.BOOLEAN,
				defaultValue: 1
			},
			categoria_id: {
				type: sequelize.Sequelize.INTEGER(11),
				references: 'categoria',
				referencesKey: 'id' 
			},
			empresa_id: {
				type: sequelize.Sequelize.INTEGER(11),
				references: 'empresa',
				referencesKey: 'id' 
			}
		},
		{
			tableName: 'produto'
		},
		{
			indexes: [
				{ 
					type: 'FULLTEXT', name: 'idx_produto_nome', fields: ['nome'],
				}
			]
		});
	}
}

module.exports = new ProdutoModel;