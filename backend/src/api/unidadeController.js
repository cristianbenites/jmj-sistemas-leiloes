const Unidade = require('../database/unidadeModel');

module.exports = {
    async index(req, res){
        const units = await Unidade.findAll()

        return res.json(units);
    },

    async create(req, res) {
        const { name } = req.body;

        var newUnit = await Unidade.create({
            nome: name,
        }).then( () => {
            res.json("Criado com sucesso!")
        }).catch(err => {
            res.json("Ocorreu um erro ao processar sua solicitação: " + err)
        })
    },

    async update(req, res) {
        const { id } = req.params;
        const { name } = req.body;

        const [ putUnit ] = await Unidade.update({
            nome: name,
        }, {
            where: {
                id: id,
            }
        }).then( () => {
            res.json("Atualizado com sucesso!")
        }).catch( err => {
            res.json("Ocorreu um erro ao processar sua solicitação: " + err)
        })
    },

    async delete(req, res) {
        const { id } = req.params;

        var [ delUnit ] = await Unidade.destroy({
            where: {
                id: id,
            }
        }).then(result=> {
            res.status(204).json(result);
        }).catch(err => {
            res.json("Ocorreu um erro ao deletar a unidade: " + err);
        })
    }
}

