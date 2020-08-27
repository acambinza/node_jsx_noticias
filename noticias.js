// disponibilizando recursos do JS (que esta no server) para o Browser
const http =  require('http');

var server = http.createServer(function(req, res){ 

     // pegando o que vem do request (url)

     var categoria = req.url;
     if(categoria == '/tecnologia'){
          res.end("<html><body><h3>Cruso de NodeJS - Portal de Noticias</h3>Tecnologia</body></html>");
     }else if(categoria == '/moda'){
          res.end("<html><body><h3>Cruso de NodeJS - Portal de Noticias</h3>Moda</body></html>");
     }else{
          res.end("<html><body><h3>Cruso de NodeJS - Portal de Noticias</h3> Inicial</body></html>");
     }

     // com o res , enviamos uma resposta, usando o end();
     
});
server.listen(7588); // escutando na porta 7588

