// Le modele va faire le lien avec la base de donnees. C'est le seul capable d'interoger cette derniere
const { Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelizeClient')

class Sheet extends Model { }

Sheet.init({
    // Lister toutes les proprietes propre a notre model (attention sequelize gere tout seul l'id, le createdAt et le updatedAt)
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    season: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    viewAmount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    tableName: 'sheet',
})

module.exports = Sheet;