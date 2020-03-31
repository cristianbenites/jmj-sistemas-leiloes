const Sequelize = require("sequelize");
const connection = require("./database");

const Empresa = require("./empresaModel");
const Leilao = require("./leilaoModel");

const Comprador = connection.define('compradores', {
    empresa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Empresa,
            key: 'id'
        }
    },
    leilao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Leilao,
            key: 'id'
        }
    },
});

Empresa.belongsToMany(Leilao, { through: 'Comprador' });
Leilao.belongsToMany(Empresa, { through: 'Comprador' });

module.exports = Comprador;