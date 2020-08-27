
module.exports.incluir_noticia = function(application, req, res){
    res.render("admin/form_add_noticia", { validacao: [], noticia: [] });  
}


module.exports.salvar_noticias = function (application, req, res){
        
    let noticiasBody = req.body;

    req.assert('titulo', 'Titulo e obrigatorio').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 a 100').len(10, 100);
    req.assert('autor', 'Autor e obrigatorio').notEmpty();
    req.assert('noticia', 'Noticia e obrigatorio').notEmpty();
    req.assert('data', 'data Noticia e obrigatorio').notEmpty();
    //.isDate({format: 'YYYY-MM-DD'});

    var erros = req.validationErrors();

    if (erros) {

        console.log('erros de validacao');
        console.log(noticiasBody);

        res.render("admin/form_add_noticia", { validacao: erros, noticia: noticiasBody });
        return;
    }

    // conexo modificada com o consign
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);


    noticiasModel.salvarNoticia(noticiasBody, function (error, result) {

        console.log(error)
        // as chaves do json devem iguais das colunas das tabelas
        // o redirect evita que o formulario seja reenviado com o f5 ou actulizacao da pagina 
        res.redirect('/noticias');

        // o noticias vai fazer uma nova requisicao que eh buscar a lista das noticias -- routas 
    });
}