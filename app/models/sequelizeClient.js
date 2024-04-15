const { Sequelize } = require('sequelize');
require('dotenv/config'); 

// Option 1: Passing a connection URI
const sequelize = new Sequelize(process.env.PG_URL, {
    define: {
        underscored: true,
    }
});

module.exports = sequelize;
