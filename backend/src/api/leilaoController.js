const Leilao = require('../database/leilaoModel');

module.exports = {
    async index(req, res) {
        const leiloes = await Leilao.findAll();

        return res.json(leiloes);
    },

    async create(req, res) {
        const {
            codigo,
            descricao,
            vendedor,
            inicioPrevisto
        } = req.body;

        var newLeilao = await Leilao.create({
            codigo: codigo,
            descricao: descricao,
            vendedor: vendedor,
            inicioPrevisto: inicioPrevisto
        }).then(()=> {
            res.json('Criado com sucesso!')
        }).catch(err => {
            res.json("Ocorreu um erro ao processar sua solicitação: " + err);
        });
    },

    async update(req, res) {
        const { id } = req.params;
        const {
            codigo,
            descricao,
            vendedor,
            inicioPrevisto
        } = req.body;

        const putLeilao = await Leilao.update({
            codigo,
            descricao,
            vendedor,
            inicioPrevisto
        }, {
            where: {
                id: id
            }
        }).then( () => {
            res.json("Atualizado com sucesso!")
        }).catch( err => {
            res.json("Ocorreu um erro ao processar sua solicitação: " + err)
        })
    },

    async delete(req, res) {
        const { id } = req.params;

        var delLeilao = await Leilao.destroy({
            where: {
                id: id
            }
        }).then( () => {
            res.json("Deletado com sucesso!")
        }).catch( err => {
            res.json("Não foi possível deletar o Leilão: " + err);
        })
    }
}