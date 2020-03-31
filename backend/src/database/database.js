const Sequelize = require('sequelize');

const connection = new Sequelize('jmj_leiloes', 'postgres', 'ccjjpostgresql', {
    host: 'localhost',
    dialect: 'postgres',
    timezone: '-04:00'
});

module.exports = connection;