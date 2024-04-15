const { Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelizeClient');

class Tag extends Model { }

Tag.init({
    // Model attributes are defined here
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
   
  },{
    // Other model options go here
    sequelize, // We need to pass the connection instance
    tableName: 'tag', // We need to choose the model name
  },
);

module.exports = Tag;
