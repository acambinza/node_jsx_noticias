// exemplo de um modulo

var msg = "Esta modulo contem apenas uma string"


// podemos retornar uma string, um objecto ou mesmo uma funcao

// para ser um modulo
/// module.exports = msg;


// retornando uma funcao 
module.exports = function (){ 
    return msg;
}