// usando funcao como classe nas Ling POO
function NoticiasDAO(connection){
       this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
    this._connection.query('SELECT * FROM noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function (param, callback) {
    this._connection.query("SELECT * FROM noticias WHERE id ="+param.id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function (noticia,callback){
    this._connection.query("insert into noticias set ? ", noticia, callback)
}

NoticiasDAO.prototype.getUltimasNoticias_5 = function(callback){
    this._connection.query('SELECT * FROM noticias n order by n.data desc limit 5', callback);

}

module.exports = function(){
       return NoticiasDAO;
}