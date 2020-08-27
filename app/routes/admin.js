
module.exports = function(application){

application.get('/incluir_noticia', function (req, res) {
    application.app.controllers.admin.incluir_noticia(application,req,res);
});

application.post('/noticias/salvar', function (req, res) {
    application.app.controllers.admin.salvar_noticias(application, req, res);

  });

}