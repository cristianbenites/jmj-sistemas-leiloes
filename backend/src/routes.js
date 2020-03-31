const express = require('express');

const routes = express.Router();

// Controllers
const UnidadeController = require('./api/unidadeController');
const LoteController = require('./api/loteController');
const LeilaoController = require('./api/leilaoController');

routes.get('/', (req, res) => {
    res.json({name: 'It Works!'});
});


routes.get('/unidades', UnidadeController.index);
routes.post('/unidades', UnidadeController.create);
routes.put('/unidades/:id', UnidadeController.update);
routes.delete('/unidades/:id', UnidadeController.delete);

routes.get('/lotes', LoteController.index);
routes.post('/lotes', LoteController.create);
// routes.put('/lotes/:id', LoteController.update);
// routes.delete('/lotes/:id', LoteController.delete);

routes.get('/leiloes', LeilaoController.index);
routes.post('/leiloes', LeilaoController.create);
routes.put('/leiloes/:id', LeilaoController.update);
routes.delete('/leiloes/:id', LeilaoController.delete);



module.exports = routes;