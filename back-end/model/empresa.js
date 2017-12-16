var sequelize = require('../config/db');

class EmpresaModel {
	constructor() {
		return sequelize.define('empresa', {
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
			email: {
				type: sequelize.Sequelize.STRING(150),
				allowNull: false,
				validate: {
					isEmail: {
						msg: "O campo Email deve ser preenchido corretamente! Ex: usuario@teste.com.br"
					},
					notEmpty: {
						msg: "O campo Email não pode ser vazio!"
					},
					len: [1, 150]
				}
			},
			senha: {
				type: sequelize.Sequelize.STRING(50),
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			descricao: {
				type: sequelize.Sequelize.TEXT,
				allowNull: true,
				defaultValue: null,
			},
			data_inclusao: {
				type: sequelize.Sequelize.DATE,
				allowNull: true,
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
			cep: {
				type: sequelize.Sequelize.STRING(8),
				allowNull: false,
				defaultValue: null
			},
			endereco: {
				type: sequelize.Sequelize.STRING(100),
				allowNull: false,
				defaultValue: null
			},
			numero: {
				type: sequelize.Sequelize.STRING(5),
				allowNull: false,
				defaultValue: null
			},
			bairro: {
				type: sequelize.Sequelize.STRING(60),
				allowNull: false,
				defaultValue: null
			},
			logradouro: {
				type: sequelize.Sequelize.STRING(50),
				allowNull: true,
				defaultValue: null
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
			ativo: {
				type: sequelize.Sequelize.BOOLEAN,
				defaultValue: 1
			},
			id_google: {
				type: sequelize.Sequelize.TEXT(50),
				allowNull: false
			},
			admin: {
				type: sequelize.Sequelize.BOOLEAN,
				defaultValue: 0
			},
			segmento_id: {
				type: sequelize.Sequelize.INTEGER(11),
				references: 'segmento',
				referencesKey: 'id' 
			}
		},
		{
			tableName: 'empresa'
		},
		{
			indexes: [
				{
					type: 'FULLTEXT', name: 'idx_empresa_nome', fields: ['nome'],
					type: 'FULLTEXT', name: 'idx_empresa_email', fields: ['email'],
					type: 'FULLTEXT', name: 'idx_empresa_nome_email', fields: ['nome', 'email'],
				}
			]
		});
	}
}

module.exports = new EmpresaModel;