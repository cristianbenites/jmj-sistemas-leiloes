const Empresa = require('../database/empresaModel');

module.exports = {
    async index(req, res) {
        Empresa.findAll({

        }).then(empresas => {
            res.json(empresas);
        }).catch(err => {
            res.json("Ocorreu um erro ao processar sua solicitação: " + err);
        });   
    },
    
    async create(req, res) {
        const {
            razaoSocial,
            cnpj,
            logradouro,
            municipio,
            numero,
            complemento,
            bairro,
            cep,
            telefone,
            email,
            site,
            usuario,
            senha,
        } = req.body;

        var newEmpresa = Empresa.create({
            razaoSocial,
            cnpj,
            logradouro,
            municipio,
            numero,
            complemento,
            bairro,
            cep,
            telefone,
            email,
            site,
            usuario,
            senha
        }).then(()=> {
            res.json('Criado com sucesso!')
        }).catch(err => {
            res.json("Ocorreu um erro ao processar sua solicitação: " + err);
        });
    },
    async update(req, res) {
        return
    },
    async delete(req, res) {
        return
    },

}