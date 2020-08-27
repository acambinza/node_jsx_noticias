//const dbConnection = require('../../config/dbConnection');

const app = require("../../config/server");

module.exports = function(application) {

// rotas noticias 
application.get('/noticias', function(req, res) {

  // entregamos a responsabilidade ao Controller Noticia
  application.app.controllers.noticias.noticias(application, req, res);

    });

  // rotas noticia
  application.get('/noticia', function (req, res) {
    application.app.controllers.noticias.noticia(application, req, res);
    
  });

};

