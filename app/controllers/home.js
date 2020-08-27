module.exports.index = function(application, req, res){

    let connection = application.config.dbConnection();

    let noticiasModel = new application.app.models.NoticiasDAO(connection);
    
        noticiasModel.getUltimasNoticias_5(function(error, result){
            console.log(error)
            res.render("home/index",{noticiasLast5: result});
        });
          
}