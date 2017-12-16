const sequelize = require('../config/db');

class SegmentoModel 
{ 
	constructor()
	{
		return sequelize.define('segmento', {
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
		},
		{
			tableName: 'segmento'
		},
		{
			indexes: [
				{ 
					type: 'FULLTEXT', name: 'idx_segmento_descricao', fields: ['segmento'],
				}
			]
		});
	}
}

module.exports = new SegmentoModel;