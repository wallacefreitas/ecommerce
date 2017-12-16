var sequelize = require('../config/db');

class AdministradorModel {
	constructor() {
		return sequelize.define('administrador', {
			id: {
				type: sequelize.Sequelize.INTEGER(11),
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
				unique: true
			},
			email: {
				type: sequelize.Sequelize.STRING(150),
				allowNull: false,
				validate: {
					len: [1, 150],
					notEmpty: {
						msg: "O campo Email não pode ser vazio!"
					}
				}
			},
			senha: {
				type: sequelize.Sequelize.STRING(50),
				allowNull: false,
				validate: {
					len: [1, 150],
					notEmpty: {
						msg: "O campo Senha não pode ser vazio!"
					}
				}
			},
			empresa_id: {
				type: sequelize.Sequelize.INTEGER(11),
				references: 'empresa',
				referencesKey: 'id' 
			}
		},
		{
			tableName: 'administrador'
		},
		{
			indexes: [
				{
					type: 'FULLTEXT', name: 'idx_administrador_email', fields: ['email'],
				}
			]
		});
	}
}

module.exports = new AdministradorModel;