// disponibilizando recursos do JS (que esta no server) para o Browser
const express = require('express');
// vai adicionar as routas do sistema de forma automatica
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();

// chamando o modulo
//const msg = require("./modulo_teste");

// apontar no express que vai usar o ejs
// usando o set no
app.set('view engine', 'ejs');

// definir o padro do caminho das views 
app.set('views','./app/views')

// implementando o middleware body-parse
// middleware deve ser usado antes do processamento da applicacao
app.use(bodyParser.urlencoded({extended: true}));

// middle de validacao
app.use(expressValidator());

// mapeando os ficheiros staticos (css, js, img)
app.use(express.static('./app/public'))

consign()
     .include('app/routes')
     .then('config/dbConnection.js')
     .then('app/models')
     .then('app/controllers')
     .into(app);

module.exports = app;