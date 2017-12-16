var sequelize = require('../config/db');

class ConsumidorModel {
	constructor() {
		return sequelize.define('consumidor', {
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
			data_nascimento: {
				type: sequelize.Sequelize.DATE,
				allowNull: true,
				defaultValue: null,
			},
			sexo: {
				type: sequelize.Sequelize.STRING(1),
				allowNull: true,
				defaultValue: null
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
			telefone: {
				type: sequelize.Sequelize.INTEGER(15),
				allowNull: true,
				defaultValue: null,
				validate: {
					isNumeric: true,
				}
			},
			cpf: {
				type: sequelize.Sequelize.STRING(15),
				allowNull: true,
				defaultValue: null,
				validate: {
					isNumeric: true,
				}
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
			ativo: {
				type: sequelize.Sequelize.BOOLEAN,
				defaultValue: 1
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
				type: sequelize.Sequelize.STRING(200),
				allowNull: true,
				defaultValue: null
			}
		},
			{
				tableName: 'consumidor'
			},
			{
				indexes: [
					{
						type: 'FULLTEXT', name: 'idx_consumidor_nome', fields: ['nome'],
						type: 'FULLTEXT', name: 'idx_consumidor_email', fields: ['email'],
						type: 'FULLTEXT', name: 'idx_consumidor_nome_email', fields: ['nome', 'email'],
					}
				]
			});
	}
}

module.exports = new ConsumidorModel;