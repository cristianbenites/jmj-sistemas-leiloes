const Sequelize = require('sequelize');
const connection = require('./database');

const Unidade = connection.define('unidades', {
    nome: {
        type: Sequelize.STRING(128),
        allowNull: false,
    }
});

module.exports = Unidade;