const app = require('./config/server')

// ouvindo a porta 7588 
app.listen(8888, function (){
    console.log('Servidor ON LINE  8888');
});

// modulo ejs -> Criar pagina html com javascript (dinamicamente);

// com o consign ja nao usamos as rotas ...
 
/*
// criando a rota para noticias 
var rotaNoticias = require('./app/routes/noticias')(app);

// criando a rota para a inclusao da noticia
var rotaInclusaoNoticias = require('./app/routes/inclusao_noticias')(app);

// criando a rota para a home
var rotaHome = require('./app/routes/home')(app);
*/