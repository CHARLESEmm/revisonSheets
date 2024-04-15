const { Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelizeClient');

class User extends Model {}

User.init(
    {
        firstname: { // Correction : "firstname" au lieu de "firtname"
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'user',
    }
);

module.exports = User;
