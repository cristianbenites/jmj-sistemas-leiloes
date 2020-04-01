const express = require('express');

const routes = express.Router();

// Controllers
const UnidadeController = require('./api/unidadeController');
const LoteController = require('./api/loteController');
const LeilaoController = require('./api/leilaoController');
const EmpresaController = require('./api/empresaController');

routes.get('/', (req, res) => {
    res.json({name: 'It Works!'});
});


routes.get('/unidades', UnidadeController.index);
routes.post('/unidades', UnidadeController.create);
routes.put('/unidades/:id', UnidadeController.update);
routes.delete('/unidades/:id', UnidadeController.delete);

routes.get('/lotes', LoteController.index);
routes.post('/lotes', LoteController.create);
routes.put('/lotes/:id', LoteController.update);
routes.delete('/lotes/:id', LoteController.delete);

routes.get('/empresas', EmpresaController.index);
routes.post('/empresas', EmpresaController.create);
routes.put('/empresas/:id', EmpresaController.update);
routes.delete('/empresas/:id', EmpresaController.delete);



module.exports = routes;