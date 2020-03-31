const Sequelize = require("sequelize");
const connection = require("./database");

const Unidade = require('./unidadeModel');
const Leilao = require('./leilaoModel');

const Lote = connection.define('lotes', {
    numeroLote: {
        type: Sequelize.INTEGER
    },
    descricao: {
        type: Sequelize.STRING(60),
        allowNull: false
    },
    quantidade: {
        type: "numeric",
        allowNull: false,
    },
    valorInicial: {
        type: "numeric",
    },
    unidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Unidade,
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
    }
    
});

Leilao.hasMany(Lote, { foreignKey: 'leilao'});
Unidade.hasMany(Lote, { foreignKey: 'unidade'});

module.exports = Lote;