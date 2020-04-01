const Lote = require('../database/loteModel');
const Leilao = require('../database/leilaoModel');
const Unidade = require('../database/unidadeModel');


module.exports = {
    async index(req, res) {
        Lote.findAll({
            include: [
                { model: Leilao, as: 'leilaoLote' },
                { model: Unidade, as: 'unidadeLote' }
            ]
        }).then(lotes => {
            res.json(lotes);
        }).catch(err => {
            res.json("Ocorreu um erro ao processar sua solicitação: " + err);
        });   
    },

    async create(req, res) {
        const { 
            numeroLote,
            descricao,
            quantidade,
            valorInicial,
            unidade,
            leilao
        } = req.body

        var newLote = Lote.create({ 
            numeroLote,
            descricao,
            quantidade,
            valorInicial,
            unidade,
            leilao
        }).then(()=> {
            res.json('Criado com sucesso!')
        }).catch(err => {
            res.json("Ocorreu um erro ao processar sua solicitação: " + err);
        });
    },

    async update(req, res) {
        const { id } = req.params;
        const { 
            numeroLote,
            descricao,
            quantidade,
            valorInicial,
            unidade,
            leilao
        } = req.body;

        const [putLote] = await Lote.update({
            numeroLote,
            descricao,
            quantidade,
            valorInicial,
            unidade,
            leilao
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

        var [ delLote ] = await Lote.destroy({
            where: {
                id: id,
            }
        }).then(result=> {
            res.status(204).json(result);
        }).catch(err => {
            res.json("Ocorreu um erro ao deletar o lote: " + err);
        });
    }
    
}