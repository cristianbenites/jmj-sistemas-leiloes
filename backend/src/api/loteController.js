const Lote = require('../database/loteModel');
const Leilao = require('../database/leilaoModel');


module.exports = {
    async index(req, res) {
        const lotes = await Lote.findAll().then(()=> {
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
    }
    
}