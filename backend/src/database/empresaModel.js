const Sequelize = require("sequelize");
const connection = require("./database");

const Empresa = connection.define('empresas', {
    razaoSocial: {
        type: Sequelize.STRING(64),
        allowNull: false
    },
    cnpj: {
        type: Sequelize.STRING(32),
        allowNull: false,
        unique: true
    },
    logradouro: {
        type: Sequelize.STRING(64),
    },
    municipio: {
        type: Sequelize.STRING(64),
    },
    numero: {
        type: Sequelize.STRING(10),
    },
    complemento: {
        type: Sequelize.STRING(64),
    },
    bairro: {
        type: Sequelize.STRING(64),
    },
    cep: {
        type: Sequelize.STRING(16),
    },
    telefone: {
        type: Sequelize.STRING(32),
    },
    email: {
        type: Sequelize.STRING(254),
        allowNull: false
    },
    site: {
        type: Sequelize.STRING(254),
    },
    usuario: {
        type: Sequelize.STRING(64),
        allowNull: false,
        unique: true
    },
    senha: {
        type: Sequelize.STRING(64),
        allowNull: false
    }
});

module.exports = Empresa;