const Sequelize = require("sequelize");
const connection = require("./database");

const Leilao = connection.define('leiloes', {
    codigo: {
        type: Sequelize.INTEGER,
    },
    descricao: {
        type: Sequelize.STRING(60),
        allowNull: false
    },
    vendedor: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    inicioPrevisto: {
        type: Sequelize.DATE,
        allowNull: false,
    },
});

module.exports = Leilao;