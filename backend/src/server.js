const express = require("express");
const app = express();

const connection = require("./database/database");

const routes = require('./routes');

const Empresa = require("./database/empresaModel");
const Unidade = require('./database/unidadeModel');
const Leilao = require('./database/leilaoModel');
const Comprador = require('./database/compradorModel');
const Lote = require('./database/loteModel');

connection
    .authenticate()
    .then( () => {
        console.log("A conexão com o banco de dados foi bem-sucedida")
    })
    .catch( err => {
        console.error("Não foi possível estabelecer a conexão com o banco de dados: ", err)
    });

app.use(express.json())
app.use(routes);


app.listen(3333);